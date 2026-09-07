#!/usr/bin/env python3
"""
Helper script to fetch on-demand assets from the Psalms of Nate Google Drive catalog.
Usage:
    python3 fetch_asset.py --id <FILE_ID> --out <DEST_PATH>
    python3 fetch_asset.py --query <SEARCH_STRING> --out <DEST_DIR>
    python3 fetch_asset.py --list <OPTIONAL_FILTER>
"""
import sys, os, json, argparse, requests

MANIFEST_FILE = os.path.join(os.path.dirname(__file__), "assets_manifest.json")

def load_manifest():
    if not os.path.exists(MANIFEST_FILE):
        print(f"Error: {MANIFEST_FILE} not found.")
        sys.exit(1)
    with open(MANIFEST_FILE, "r") as f:
        return json.load(f)

def download_file(file_id, out_path):
    url = f"https://drive.google.com/uc?id={file_id}&export=download"
    session = requests.Session()
    response = session.get(url, stream=True)
    
    # Handle confirmation prompt for large files
    for k, v in response.cookies.items():
        if k.startswith("download_warning"):
            url = f"{url}&confirm={v}"
            response = session.get(url, stream=True)
            break

    if response.status_code != 200:
        print(f"Failed to download {file_id}: HTTP {response.status_code}")
        return False

    os.makedirs(os.path.dirname(os.path.abspath(out_path)), exist_ok=True)
    with open(out_path, "wb") as f:
        for chunk in response.iter_content(chunk_size=65536):
            if chunk:
                f.write(chunk)
    size_mb = os.path.getsize(out_path) / (1024 * 1024)
    print(f"Downloaded: {out_path} ({size_mb:.2f} MB)")
    return True

def main():
    parser = argparse.ArgumentParser(description="Fetch assets on demand")
    parser.add_argument("--id", help="Google Drive file ID")
    parser.add_argument("--out", help="Output file or directory path")
    parser.add_argument("--query", help="Search string in manifest")
    parser.add_argument("--list", nargs="?", const="", help="List items matching filter")
    args = parser.parse_args()

    manifest = load_manifest()

    if args.list is not None:
        filter_str = args.list.lower()
        matches = [m for m in manifest if filter_str in (m.get("path") or "").lower()]
        print(f"Found {len(matches)} items:")
        for m in matches[:50]:
            print(f"  [{m['id']}] {m['path']}")
        if len(matches) > 50:
            print(f"  ... and {len(matches) - 50} more")
        return

    if args.id:
        out = args.out or "downloaded_asset"
        download_file(args.id, out)
        return

    if args.query:
        matches = [m for m in manifest if args.query.lower() in (m.get("path") or "").lower()]
        if not matches:
            print(f"No matches for '{args.query}'")
            return
        out_dir = args.out or "assets"
        for m in matches:
            dest = os.path.join(out_dir, m["path"])
            download_file(m["id"], dest)

if __name__ == "__main__":
    main()
