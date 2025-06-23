
import React from "react";

const benefits = [
  {
    title: "Atendimento 24h",
    desc: "Sem filas e sem complicação, seu cliente atendido a qualquer hora.",
    icon: (
      <svg width={34} height={34} fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400"><circle cx="17" cy="17" r="15" /><path d="M17 6v6l4 2"/></svg>
    ),
  },
  {
    title: "Reduza custos",
    desc: "Economize recursos e aumente a eficiência do seu time.",
    icon: (
      <svg width={34} height={34} fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400"><rect x="4" y="9" width="26" height="14" rx="7"/><path d="M16 15h2"/></svg>
    ),
  },
  {
    title: "Personalize fluxos",
    desc: "Configure para saúde, educação, vendas, e mais – de acordo com seu segmento.",
    icon: (
      <svg width={34} height={34} fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400"><circle cx="17" cy="17" r="14"/><path d="M17 11v6l4 2"/></svg>
    ),
  },
  {
    title: "Multicanais",
    desc: "WhatsApp, site, telefone e outros canais num só lugar.",
    icon: (
      <svg width={34} height={34} fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-400"><rect x="6" y="8" width="22" height="18" rx="4"/><path d="M17 12v4"/></svg>
    ),
  },
];

const BenefitsSection: React.FC = () => (
  <section className="py-10 max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
      Benefícios do Atendimento Inteligente CloudZen
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
      {benefits.map((b, idx) => (
        <div
          className="group flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg shadow-blue-400/10 border border-gray-100/50 hover:shadow-xl hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
          style={{ 
            animationDelay: `${idx * 0.1}s`,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 100%)'
          }}
          key={idx}
        >
          <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse">
            {b.icon}
          </div>
          <div className="font-semibold text-lg mb-2 text-primary group-hover:text-blue-600 transition-colors duration-300">
            {b.title}
          </div>
          <div className="text-sm text-muted-foreground text-center group-hover:text-gray-700 transition-colors duration-300">
            {b.desc}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BenefitsSection;
