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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@sway_baetv"
        data-unique-id="sway_baetv"
        data-embed-type="creator"
        style={{ maxWidth: "780px", minWidth: "288px" }}
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
