import { Music2, Globe2, Users } from 'lucide-react';

const stats = [
  { icon: Music2, value: '4', label: 'Álbuns de Estúdio' },
  { icon: Globe2, value: '2B+', label: 'Streams Globais' },
  { icon: Users, value: '8M+', label: 'Ouvintes Mensais' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-black overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8649312/pexels-photo-8649312.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                alt="Artista no palco"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/90 text-sm font-medium tracking-wide">
                  Mitchell Cave · Christian Anthony · Clinton Cave
                </p>
                <p className="text-white/50 text-xs mt-1">Cairns, Austrália</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-24 bg-gradient-to-r from-rose-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-rose-600/30 rotate-3">
              <span className="text-white font-black text-lg">EST. 2011</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold tracking-[0.3em] text-rose-400">
              A HISTÓRIA
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white leading-tight">
              De produtores de quarto a fenômeno global.
            </h2>
            <div className="mt-6 space-y-4 text-white/60 leading-relaxed">
              <p>
                Chase Atlantic é um trio australiano de pop alternativo e
                R&amp;B formado pelos irmãos Mitchel e Clinton Cave ao lado de
                Christian Anthony. O que começou como um projeto de covers no
                YouTube em Cairns evoluiu para uma das atos mais distintos da
                música moderna.
              </p>
              <p>
                O som deles desafia categorização — uma mistura sensual de
                R&amp;B alternativo, dark pop, rock e música eletrônica,
                produzida inteiramente pela própria banda. Cada canção é
                escrita, gravada e produzida em seu próprio estúdio, dando-lhes
                controle criativo total sobre seu universo sonoro.
              </p>
              <p>
                Com bilhões de streams e uma base de fãs ferozmente dedicada,
                o Chase Atlantic continua a expandir fronteiras a cada lançamento,
                provando que o artismo independente pode competir nos maiores
                palcos do mundo.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <s.icon className="mx-auto text-rose-400 mb-2" size={22} />
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  <div className="text-xs text-white/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
