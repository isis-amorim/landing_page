import { useState } from 'react';
import { Instagram, Youtube, Twitter, Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-rose-600/15 to-transparent rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Junte-se ao movimento.
          </h2>
          <p className="mt-3 text-white/50 max-w-md mx-auto">
            Receba atualizações exclusivas, acesso antecipado a ingressos e
            conteúdo inédito direto no seu e-mail.
          </p>

          {submitted ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-emerald-400">
              <CheckCircle2 size={20} />
              <span className="font-medium">Você está dentro. Bem-vindo à família.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full sm:flex-1 px-5 py-3 bg-white/5 border border-white/15 rounded-full text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95"
              >
                Inscrever-se
                <Send size={14} />
              </button>
            </form>
          )}
        </div>

        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-lg font-black text-white">CHASE</span>
              <span className="text-lg font-light tracking-[0.2em] text-white/50">
                ATLANTIC
              </span>
            </div>

            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Youtube, href: '#' },
                { Icon: Twitter, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-white/30 text-xs">
            Site tributário feito por fãs. Chase Atlantic e todas as marcas
            associadas pertencem aos seus respectivos proprietários.
          </p>
        </div>
      </div>
    </footer>
  );
}
