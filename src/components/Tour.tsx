import { MapPin, Ticket } from 'lucide-react';
import { tourDates } from '@/data/tour';

const statusConfig = {
  available: { label: 'Disponível', className: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
  few: { label: 'Restam Poucos', className: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  soldout: { label: 'Esgotado', className: 'bg-rose-500/15 text-rose-400 border-rose-500/30' },
};

export default function Tour() {
  return (
    <section
      id="tour"
      className="relative py-28 bg-black overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-fuchsia-600/8 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.3em] text-rose-400">
            AO VIVO NO PALCO
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white">
            Datas da Turnê 2024
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto">
            Experiência Chase Atlantic ao vivo. Energia pura, produção imersiva,
            noites inesquecíveis.
          </p>
        </div>

        <div className="space-y-3">
          {tourDates.map((show) => {
            const status = statusConfig[show.status];
            return (
              <div
                key={show.id}
                className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 sm:w-20 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {show.date}
                  </div>
                  <div className="text-xs text-white/40 font-medium">
                    {show.month}
                  </div>
                </div>

                <div className="hidden sm:block w-px h-12 bg-white/10" />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-white font-bold text-base sm:text-lg truncate">
                    <MapPin size={14} className="text-rose-400 flex-shrink-0" />
                    {show.city}
                  </div>
                  <div className="text-white/40 text-sm mt-0.5 truncate">
                    {show.venue} · {show.day}
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className={`hidden sm:inline-block px-3 py-1 rounded-full border text-xs font-bold ${status.className}`}
                  >
                    {status.label}
                  </span>
                  <button
                    disabled={show.status === 'soldout'}
                    className={`flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
                      show.status === 'soldout'
                        ? 'bg-white/5 text-white/30 cursor-not-allowed'
                        : 'bg-white text-black hover:scale-105 active:scale-95'
                    }`}
                  >
                    <Ticket size={14} />
                    <span className="hidden sm:inline">
                      {show.status === 'soldout' ? 'Esgotado' : 'Ingressos'}
                    </span>
                    <span className="sm:hidden">
                      {show.status === 'soldout' ? 'N/A' : 'Comprar'}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            Mais datas a serem anunciadas. Siga para atualizações.
          </p>
        </div>
      </div>
    </section>
  );
}
