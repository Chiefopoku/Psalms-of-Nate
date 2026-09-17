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
  )],
  ["WhatsApp", "https://whatsapp.com/channel/0029VbDgEGwKbYMGbM30IF1G", (
    <svg key="wa" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="17" height="17"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5a9.5 9.5 0 0 1-4.85-1.33l-.35-.2-3.6.94.96-3.51-.23-.36a9.46 9.46 0 0 1-1.45-5.05c0-5.23 4.26-9.49 9.5-9.49 2.54 0 4.92.99 6.71 2.78a9.43 9.43 0 0 1 2.78 6.72c0 5.23-4.26 9.5-9.68 9.5zm8.46-17.9A11.77 11.77 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.78 1.47c6.58 0 11.94-5.35 11.94-11.93 0-3.19-1.24-6.19-3.49-8.42z"/></svg>
  )]
];
const groups = [
  {title:"Explore",links:[["The composer","/about"],["The story","/story"],["Compositions","/library"],["Manuscripts","/#manuscripts"]]},
  {title:"Connect",links:[["Contact","/contact"],["Projects","/projects"],["Search the music","/search"]]}
];
export function Footer(){return <footer className="nate-footer"><div className="nate-footer-panel">
  <div className="footer-texture" aria-hidden="true"/>
  <div className="footer-top"><div className="footer-brand"><Link href="/" className="nate-wordmark"><Music2 strokeWidth={1.2}/><span>Psalms of Nate</span></Link><p>Let the praise rise.</p><div className="footer-socials">{socials.map(([label,href,icon])=><a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{icon}</a>)}</div></div>{groups.map(group=><div key={group.title} className="footer-links"><h2>{group.title}</h2><nav aria-label={group.title}>{group.links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></div>)}</div>
  <div className="footer-bottom"><div><Link href="/contact#permissions">Scores &amp; permissions</Link><Link href="/about">Made for voices together</Link></div><p>© {new Date().getFullYear()} Psalms of Nate. All rights reserved. · Web design by Ozprix Studios</p></div>
  </div></footer>}
