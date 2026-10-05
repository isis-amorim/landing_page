import { useState } from 'react';
import { Disc3, Music, ArrowRight } from 'lucide-react';
import { albums } from '@/data/albums';

export default function Albums() {
  const [active, setActive] = useState(0);
  const album = albums[active];

  return (
    <section
      id="albums"
      className="relative py-28 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-rose-400">
            DISCOGRAFIA
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white">
            Os Álbuns
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Quatro álbuns de estúdio. Uma evolução imparável. Explore os discos
            que definiram uma geração.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {albums.map((a, i) => (
              <button
                key={a.id}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 lg:flex-shrink text-left p-4 rounded-xl border transition-all duration-300 ${
                  i === active
                    ? 'bg-white/10 border-white/30'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-4 lg:gap-3">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="hidden lg:block">
                    <div className="text-white font-bold text-sm">{a.title}</div>
                    <div className="text-white/40 text-xs mt-0.5">
                      {a.year} · {a.tracks} faixas
                    </div>
                  </div>
                  <div className="lg:hidden">
                    <div className="text-white font-bold text-xs">{a.title}</div>
                    <div className="text-white/40 text-[10px]">{a.year}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div
            key={album.id}
            className="relative rounded-3xl overflow-hidden animate-[fadeIn_0.5s_ease-out]"
          >
            <div className="relative h-[420px] sm:h-[500px]">
              <img
                src={album.image}
                alt={album.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${album.accent} opacity-80 mix-blend-multiply`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold">
                    {album.type}
                  </span>
                  <span className="text-white/60 text-sm">{album.year}</span>
                </div>
                <h3 className="text-3xl sm:text-5xl font-black text-white mb-3">
                  {album.title}
                </h3>
                <p className="text-white/70 text-sm sm:text-base max-w-lg leading-relaxed mb-5">
                  {album.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <Music size={14} className="text-white/50" />
                  <span className="text-white/50 text-xs font-medium tracking-wide">
                    FAIXAS PRINCIPAIS
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {album.highlights.map((track) => (
                    <span
                      key={track}
                      className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium hover:bg-white/20 transition-colors cursor-default"
                    >
                      {track}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform">
                    <Disc3 size={16} />
                    Ouvir Agora
                  </button>
                  <button className="flex items-center gap-1 text-white/70 hover:text-white text-sm font-medium transition-colors">
                    Lista de Faixas <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
