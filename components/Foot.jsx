import React from "react";
import Link from "next/link";
import DiscordLogo from "../public/icons/discord.svg";
import InstagramLogo from "../public/icons/instagram.svg";
import PatreonLogo from "../public/icons/patreon.svg";
import SpotifyLogo from "../public/icons/spotify.svg";
import TiktokLogo from "../public/icons/tiktok.svg";
import TwitchLogo from "../public/icons/twitch.svg";
import TwitterLogo from "../public/icons/twitter.svg";
import YoutubeLogo from "../public/icons/youtube.svg";

export default function Foot() {
  return (
    <footer className="">
      <div className="">
        <div className="animate-bounce">
          <Link href="https://www.twitch.com" className="cursor-pointer">
            <TwitchLogo />
          </Link>
          <Link href="https://www.discord.com" className="cursor-pointer">
            <DiscordLogo />
          </Link>
          <Link href="https://www.instagram.com" className="cursor-pointer">
            <InstagramLogo />
          </Link>
          <Link href="https://www.youtube.com" className="cursor-pointer">
            <YoutubeLogo />
          </Link>
          <Link href="https://www.tiktok.com" className="cursor-pointer">
            <TiktokLogo />
          </Link>
          <Link href="https://www.twitter.com" className="cursor-pointer">
            <TwitterLogo />
          </Link>
          <Link href="https://www.spotify.com" className="cursor-pointer">
            <SpotifyLogo />
          </Link>
          <Link href="https://www.patreon.com" className="cursor-pointer">
            <PatreonLogo />
          </Link>
        </div>
        <div className="">
          <p className="">
            2023 <span className=""> Swaybae </span>
          </p>
          <div className="">
            <p className="">Inc. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// export default function Foot() {
//   return (
//     <footer className="footer-center container rounded-lg shadow-lg xl:px-20 lg:px-12 sm:px-6 px-4 py-4 ">
//       <div className="flex flex-col items-center justify-center">
//         <div className="animate-bounce flex items-center gap-x-6">
//           <Link href="https://www.twitch.com" className="cursor-pointer">
//             <TwitchLogo />
//           </Link>
//           <Link href="https://www.discord.com" className="cursor-pointer">
//             <DiscordLogo />
//           </Link>
//           <Link href="https://www.instagram.com" className="cursor-pointer">
//             <InstagramLogo />
//           </Link>
//           <Link href="https://www.youtube.com" className="cursor-pointer">
//             <YoutubeLogo />
//           </Link>
//           <Link href="https://www.tiktok.com" className="cursor-pointer">
//             <TiktokLogo />
//           </Link>
//           <Link href="https://www.twitter.com" className="cursor-pointer">
//             <TwitterLogo />
//           </Link>
//           <Link href="https://www.spotify.com" className="cursor-pointer">
//             <SpotifyLogo />
//           </Link>
//           <Link href="https://www.patreon.com" className="cursor-pointer">
//             <PatreonLogo />
//           </Link>
//         </div>
//         <div className="flex items-center mt-4">
//           <p className="text-base leading-4 text-gray-800">
//             2023 <span className="font-semibold">Swaybae</span>
//           </p>
//           <div className=" border-l border-gray-800 pl-2 ml-2">
//             <p className=" text-base leading-4 text-gray-800">
//               Inc. All rights reserved
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
