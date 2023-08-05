import React from "react";
// import Link from "next/link";
// import {
//   SvgTwitch,
//   SvgDiscord,
//   SvgInstagram,
//   SvgPatreon,
//   SvgSpotify,
//   SvgTiktok,
//   SvgTwitter,
//   SvgYoutube,
// } from "../public/icons";

const MyFooter = () => {
  return (
    <div className="relative bottom-0 xl:px-20 lg:px-12 sm:px-6 px-4 py-4 mt-4">
      <div className="flex flex-col items-center justify-center">
        <div className="animate-pulse flex items-center gap-x-4">
          {/* <Link href="https://www.twitch.tv/sway_bae" passHref>
            <SvgTwitch className="cursor-pointer hover:text-secondary" />
          </Link>
          <Link href="https://discord.com/invite/7jKWvX2pfW" passHref>
            <SvgDiscord className="cursor-pointer hover:text-secondary" />
          </Link>
          <Link href="https://www.instagram.com/sway_baetv" passHref>
            <SvgInstagram className="cursor-pointer hover:text-secondary" />
          </Link>
          <Link href="https://www.youtube.com/sway_baetv" passHref>
            <SvgYoutube className="cursor-pointer hover:text-secondary" />
          </Link>
          <Link href="https://www.tiktok.com/@sway_baetv" passHref>
            <SvgTiktok className="cursor-pointer hover:text-secondary" />
          </Link>
          <Link href="https://twitter.com/sway_baetv" passHref>
            <SvgTwitter className="cursor-pointer hover:text-secondary" />
          </Link>
          <Link href="https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq?si=f42c980da494497d"
            passHref>
            <SvgSpotify className="cursor-pointer hover:text-secondary" />
          </Link>
          <Link href="https://www.patreon.com/" passHref>
            <SvgPatreon className="cursor-pointer hover:text-secondary" />
          </Link> */}
        </div>
        <div className="flex items-center mt-2">
          <p className="text-base leading-4 bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent">
            2023 <span className="font-semibold">Swaybae</span>
          </p>
          <div className=" border-l border-secondary pl-2 ml-2">
            <p className=" text-base leading-4 bg-gradient-to-r from-primary via-urgent to-secondary bg-clip-text text-transparent">
              Inc. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
