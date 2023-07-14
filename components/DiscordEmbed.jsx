export default function DiscordEmbed() {
  return (
    <div>
      <iframe
        className="rounded-2xl box-shadow-2xl"
        src="https://discord.com/widget?id=530445935767978016&theme=dark"
        width="300"
        height="352"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
}
