"use client";
import Carousel from "../../components/Carousel";
import YoutubeEmbed from "../../components/YoutubeEmbed";

export default function FindMe() {
  return (
    <main className="hero">
      <div>
        <Carousel />
        <div>
          <YoutubeEmbed vnum={0} />
        </div>
      </div>
    </main>
  );
}
