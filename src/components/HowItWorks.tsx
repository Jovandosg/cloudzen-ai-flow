
import React from "react";

const steps = [
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400 transition-colors duration-300"><circle cx="20" cy="20" r="17"/><path d="M12 20h16"/></svg>
    ),
    title: "Contato pelo canal preferido",
    desc: "Cliente inicia uma conversa pelo WhatsApp, site, telefone, ou outro canal.",
    step: "01"
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400 transition-colors duration-300"><rect x="8" y="8" width="24" height="24" rx="6"/><path d="M14 18l4 4 8-8"/></svg>
    ),
    title: "Agente virtual entende e resolve",
    desc: "O agente identifica e resolve solicitações em segundos, de forma automatizada.",
    step: "02"
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400 transition-colors duration-300"><circle cx="20" cy="20" r="17"/><path d="M20 12v8l5 3"/></svg>
    ),
    title: "Sua equipe entra só se necessário",
    desc: "Quando necessário, as demandas são transferidas para a equipe humana.",
    step: "03"
  },
];

const HowItWorks: React.FC = () => (
  <section className="relative w-full py-16 my-12 overflow-hidden">
    {/* Background com gradiente animado */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-60"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-blue-800/5 to-purple-900/10"></div>
    
    {/* Elementos decorativos animados */}
    <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
    <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-purple-200 to-pink-300 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
    
    <div className="relative z-10 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
        Como funciona na prática
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group flex-1">
            {/* Linha conectora para desktop */}
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2 z-0">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            )}
            
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group-hover:bg-white/95 h-full flex flex-col">
              {/* Número do passo */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.step}
              </div>
              
              {/* Ícone */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
              </div>
              
              {/* Conteúdo */}
              <div className="text-center flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
