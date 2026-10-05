import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Sobre', href: '#about' },
  { label: 'Álbuns', href: '#albums' },
  { label: 'Turnê', href: '#tour' },
  { label: 'Galeria', href: '#gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2">
          <span className="text-xl font-black tracking-tight text-white">
            CHASE
          </span>
          <span className="text-xl font-light tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
            ATLANTIC
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#tour"
            className="px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
          >
            Ingressos
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 mt-3">
          <div className="flex flex-col px-6 py-6 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white text-lg font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#tour"
              onClick={() => setOpen(false)}
              className="px-5 py-3 bg-white text-black rounded-full text-sm font-bold text-center"
            >
              Ingressos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
