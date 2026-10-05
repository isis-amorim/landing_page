const galleryImages = [
  { url: 'https://images.pexels.com/photos/894557/pexels-photo-894557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Público no show', span: 'lg:col-span-2 lg:row-span-2' },
  { url: 'https://images.pexels.com/photos/13717323/pexels-photo-13717323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cantor no palco', span: '' },
  { url: 'https://images.pexels.com/photos/1309599/pexels-photo-1309599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Luzes do show', span: '' },
  { url: 'https://images.pexels.com/photos/22857353/pexels-photo-22857353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Silhueta do artista', span: '' },
  { url: 'https://images.pexels.com/photos/38345953/pexels-photo-38345953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Mãos do público', span: 'lg:col-span-2' },
  { url: 'https://images.pexels.com/photos/16118368/pexels-photo-16118368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Luzes vermelhas no palco', span: '' },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-28 bg-gradient-to-b from-black to-zinc-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.3em] text-rose-400">
            AO VIVO &amp; SEM CORTES
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white">
            Galeria
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto">
            Momentos capturados de palcos ao redor do mundo.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-white text-xs font-medium tracking-wide">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
