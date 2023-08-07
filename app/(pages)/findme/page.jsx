import { YouTubeCarousel } from "@/components/YouTubeCarousel";
import { YouTubeCarousel2 } from "@/components/YouTubeCarousel2";
import DiscordContainer from "@/components/DiscordContainer";
import InstagramContainer from "@/components/InstagramContainer";
import SpotifyContainer from "@/components/SpotifyContainer";

export default function FindMe() {
  return (
    <main>
      <div className="container flex flex-col items-center justify-center">
        <div className="p-8 hidden md:block">
          <YouTubeCarousel />
        </div>
        <div className="p-8 block md:hidden">
          <YouTubeCarousel2 />
        </div>
        <div className="p-8">
          <DiscordContainer />
        </div>
        <div className="p-8">
          <InstagramContainer />
        </div>
        <div className="p-8">
          <SpotifyContainer />
        </div>
      </div>
    </main>
  );
}
