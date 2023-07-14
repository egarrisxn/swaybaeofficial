"use client";
import DiscordEmbed from "../../components/DiscordEmbed";
import GoogleCalendar from "../../components/GoogleCalendar";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import Spotify2 from "@/components/Spotify2";
import SpotifyEmbed from "@/components/SpotifyEmbed";

export default function FindMe() {
  return (
    <main className="">
      <GoogleCalendar />
      <SpotifyEmbed />
      <Spotify2 />
      <DiscordEmbed />
      <YoutubeEmbed vnum={0} />
    </main>
  );
}
