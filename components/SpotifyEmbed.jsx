export default function SpotifyEmbed() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <iframe
        className="rounded-lg"
        src="https://open.spotify.com/embed/playlist/6am5YjtzZAOPnmvwbGHDxm?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
