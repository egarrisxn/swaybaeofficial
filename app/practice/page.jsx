"use client";
import Spotify2 from "../../components/Spotify2";
import DiscordEmbed from "../../components/DiscordEmbed";
import SpotifyEmbed from "../../components/SpotifyEmbed";
import InstagramEmbedSite from "../../components/InstagramEmbed";
import TikTokEmbedSite from "../../components/TikTokEmbed";
import VideoPlayer from "../../components/VideoPlayer";
import {
  InstagramEmbed,
  TikTokEmbed,
  TwitterEmbed,
  YouTubeEmbed,
} from "react-social-media-embed";

export default function practice() {
  return (
    <>
      <main>
        <div className="container">
          <div className="flex justify-center">
            <Spotify2 />
          </div>
          <div className="flex justify-center">
            <DiscordEmbed />
          </div>
          <div className="flex justify-center">
            <SpotifyEmbed />
          </div>
          <div className="flex justify-center">
            <InstagramEmbedSite />
          </div>
          <div className="flex justify-center">
            <TikTokEmbedSite />
          </div>
          <div className="flex justify-center">
            <VideoPlayer vnum={0} />
          </div>
          <div className="flex justify-center">
            <InstagramEmbed
              url="https://www.instagram.com/p/CuZrus5L5wF"
              width={328}
            />
          </div>
          <div className="flex justify-center">
            <TikTokEmbed
              url="https://www.tiktok.com/@sway_baetv/video/7216771608592141610"
              width={325}
            />
          </div>
          <div className="flex justify-center">
            <TwitterEmbed
              url="https://twitter.com/sway_baeTV/status/1644803479293100034"
              width={250}
            />
          </div>
          <div className="flex justify-center">
            <YouTubeEmbed
              url="https://www.youtube.com/watch?v=mvMxPfSKx5k"
              width={325}
              height={220}
            />
          </div>
        </div>
      </main>
    </>
  );
}
