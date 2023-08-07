export default function DiscordEmbed() {
  return (
    <div>
      <iframe
        className="rounded-md box-shadow-2xl"
        src="https://discord.com/widget?id=530445935767978016&theme=dark"
        width="325"
        height="355"
        allowFullScreen
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        loading="lazy"
      ></iframe>
    </div>
  );
}
