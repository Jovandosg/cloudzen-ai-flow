
import React from "react";

const steps = [
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400"><circle cx="20" cy="20" r="17"/><path d="M12 20h16"/></svg>
    ),
    title: "Contato pelo canal preferido",
    desc: "Cliente inicia uma conversa pelo WhatsApp, site, telefone, ou outro canal.",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400"><rect x="8" y="8" width="24" height="24" rx="6"/><path d="M14 18l4 4 8-8"/></svg>
    ),
    title: "Agente virtual entende e resolve",
    desc: "O agente identifica e resolve solicitações em segundos, de forma automatizada.",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400"><circle cx="20" cy="20" r="17"/><path d="M20 12v8l5 3"/></svg>
    ),
    title: "Sua equipe entra só se necessário",
    desc: "Quando necessário, as demandas são transferidas para a equipe humana.",
  },
];

const HowItWorks: React.FC = () => (
  <section className="bg-gradient-to-r from-blue-900/60 via-blue-800/50 to-purple-900/70 w-full py-14 my-10 rounded-3xl shadow-inner shadow-blue-700/10">
    <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
      Como funciona na prática
    </h2>
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 justify-center">
      {steps.map((step, idx) => (
        <div
          className="flex flex-col items-center gap-4 bg-background/80 rounded-xl p-6 border border-border shadow-sm grow"
          key={idx}
        >
          <div>{step.icon}</div>
          <div className="font-semibold text-lg text-primary text-center">{step.title}</div>
          <div className="text-sm text-muted-foreground text-center">{step.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
