"use client";
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
        <div className="grid grid-row">
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/CuZrus5L5wF"
              width={328}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TikTokEmbed
              url="https://www.tiktok.com/@sway_baetv/video/7216771608592141610"
              width={325}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TwitterEmbed
              url="https://twitter.com/sway_baeTV/status/1644803479293100034"
              width={250}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
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
