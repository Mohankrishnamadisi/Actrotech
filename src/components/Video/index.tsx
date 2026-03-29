"use client";

export default function Video() {
  const videoId = "nyxi8n6x41w";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&showinfo=0&modestbranding=1`;

  return (
    <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
      <div className="absolute inset-0">
        <iframe
          src={embedUrl}
          title="ActroTech Hero Video"
          className="h-full w-full object-cover"
          allow="autoplay; encrypted-media; fullscreen"
          frameBorder="0"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
        <div className="max-w-xl">
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">Discover Passionate Tech Talent & Software Excellence</h2>
          <p className="mb-6 text-base sm:text-lg text-slate-100/90">
            ActroTech is your partner for next-level product engineering, remote staffing, and digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
};
