import { useEffect } from "react";

export default function TikTokEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="">
      <blockquote
        className="tiktok-embed rounded-2xl box-shadow-2xl justify-start"
        cite="https://www.tiktok.com/@sway_baetv"
        data-unique-id="sway_baetv"
        data-embed-type="creator"
        style={{ justifyContent: "start", width: "300px", height: "352px" }}
      >
        <section>
          <a
            target="_blank"
            href="https://www.tiktok.com/@sway_baetv?refer=creator_embed"
            className="text-blue-500 underline"
          >
            @sway_baetv
          </a>
        </section>
      </blockquote>
    </div>
  );
}
