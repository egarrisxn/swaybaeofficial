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
    <div className="relative bottom-0 xl:px-20 lg:px-12 sm:px-6 px-4 py-4 mt-4">
      <div className="flex flex-col items-center justify-center">
        <div className="animate-pulse flex items-center gap-x-4">
          <Link
            href="https://www.twitch.com"
            className="cursor-pointer hover:text-secondary"
          >
            <TwitchLogo />
          </Link>
          <Link
            href="https://www.discord.com"
            className="cursor-pointer hover:text-secondary"
          >
            <DiscordLogo />
          </Link>
          <Link
            href="https://www.instagram.com"
            className="cursor-pointer hover:text-secondary"
          >
            <InstagramLogo />
          </Link>
          <Link
            href="https://www.youtube.com"
            className="cursor-pointer hover:text-secondary"
          >
            <YoutubeLogo />
          </Link>
          <Link
            href="https://www.tiktok.com"
            className="cursor-pointer hover:text-secondary"
          >
            <TiktokLogo />
          </Link>
          <Link
            href="https://www.twitter.com"
            className="cursor-pointer hover:text-secondary"
          >
            <TwitterLogo />
          </Link>
          <Link
            href="https://www.spotify.com"
            className="cursor-pointer hover:text-secondary"
          >
            <SpotifyLogo />
          </Link>
          <Link
            href="https://www.patreon.com"
            className="cursor-pointer hover:text-secondary"
          >
            <PatreonLogo />
          </Link>
        </div>
      </div>
    </div>
  );
}
