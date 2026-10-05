import { ChevronDown, Play, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/736355/pexels-photo-736355.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Palco de show"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-[fadeIn_0.8s_ease-out]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-white/90 tracking-wide">
            NOVO ÁLBUM — LOST IN HEAVEN · DISPONÍVEL AGORA
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tight animate-[fadeInUp_0.8s_ease-out]">
          CHASE
          <br />
          <span className="bg-gradient-to-r from-rose-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            ATLANTIC
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed animate-[fadeInUp_1s_ease-out]">
          Três irmãos da Austrália que reescreveram as fronteiras do
          R&amp;B alternativo, pop e rock em algo inteiramente seu.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_1.2s_ease-out]">
          <a
            href="#albums"
            className="group flex items-center gap-2 px-7 py-3.5 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-white/10"
          >
            <Play size={16} className="fill-black group-hover:scale-110 transition-transform" />
            Explorar a Música
          </a>
          <a
            href="#tour"
            className="flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-sm hover:bg-white/20 transition-all"
          >
            <Calendar size={16} />
            Datas da Turnê 2024
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-[bounce_2s_infinite]"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
