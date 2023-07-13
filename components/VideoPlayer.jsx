import { useState, useEffect } from "react";

export default function VideoPlayer({ vnum }) {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const loadVideo = async () => {
      const cid = "UC_un3YZXBtAlCyApGu4_eSQ";
      const channelURL = encodeURIComponent(
        `https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`
      );
      const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

      try {
        const response = await fetch(reqURL);
        const result = await response.json();
        const link = result.items[vnum].link;
        const id = link.substr(link.indexOf("=") + 1);
        setVideoSrc(`https://youtube.com/embed/${id}?controls=0&autoplay=1`);
      } catch (error) {
        console.log("error", error);
      }
    };

    loadVideo();
  }, [vnum]);

  return (
    <div>
      <iframe
        className="latestVideoEmbed"
        width="600"
        height="340"
        frameborder="0"
        allowfullscreen
        src={videoSrc}
      ></iframe>
    </div>
  );
}
