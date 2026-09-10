import Link from "next/link";
import { Facebook, Instagram, Music2, Youtube } from "lucide-react";
import { APPLE_ARTIST, SPOTIFY_ARTIST } from "@/data/streaming";
import { AppleMusicIcon, SpotifyIcon } from "@/components/icons/BrandIcons";
const socials: [string, string, React.ReactNode][] = [
  ["YouTube", "https://www.youtube.com/@PsalmsofNate", <Youtube key="yt" size={18} />],
  ["Apple Music", APPLE_ARTIST, <AppleMusicIcon key="am" className="h-[17px] w-[17px]" />],
  ["Spotify", SPOTIFY_ARTIST, <SpotifyIcon key="sp" className="h-[17px] w-[17px]" />],
  ["Instagram", "https://www.instagram.com/psalms_of_nate/", <Instagram key="ig" size={18} />],
  ["Facebook", "https://www.facebook.com/profile.php?id=61576235281747", <Facebook key="fb" size={18} />],
  ["TikTok", "https://www.tiktok.com/@psalms.of.nate", (
    <svg key="tt" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="17" height="17"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.55 3h-3.02v12.3a2.4 2.4 0 1 1-2.4-2.4c.16 0 .32.02.47.05V9.9a5.6 5.6 0 0 0-.47-.02 5.4 5.4 0 1 0 5.4 5.4V8.9a7.2 7.2 0 0 0 4.2 1.34V7.2a4.28 4.28 0 0 1-3.13-1.38z"/></svg>
  )]
];
const groups = [
  {title:"Explore",links:[["The composer","/about"],["Compositions","/library"],["Manuscripts","/#manuscripts"]]},
  {title:"Connect",links:[["Contact","/contact"],["Projects","/projects"],["Search the music","/search"]]}
];
export function Footer(){return <footer className="nate-footer"><div className="nate-footer-panel">
  <div className="footer-texture" aria-hidden="true"/>
  <div className="footer-top"><div className="footer-brand"><Link href="/" className="nate-wordmark"><Music2 strokeWidth={1.2}/><span>Psalms of Nate</span></Link><p>Let the praise rise.</p><div className="footer-socials">{socials.map(([label,href,icon])=><a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{icon}</a>)}</div></div>{groups.map(group=><div key={group.title} className="footer-links"><h2>{group.title}</h2><nav aria-label={group.title}>{group.links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></div>)}</div>
  <div className="footer-bottom"><div><Link href="/contact#permissions">Scores &amp; permissions</Link><Link href="/about">Made for voices together</Link></div><p>© {new Date().getFullYear()} Psalms of Nate. All rights reserved. · Web design by Ozprix Studios</p></div>
  </div></footer>}
