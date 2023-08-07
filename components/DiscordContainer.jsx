import DiscordEmbed from "./(embeds)/DiscordEmbed";

export default function DiscordContainer() {
  return (
    <div className="card bg-base-100 p-4 rounded-xl shadow-xl shadow-purple-500/50 ">
      <DiscordEmbed />
    </div>
  );
}
