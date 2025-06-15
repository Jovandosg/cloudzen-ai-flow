
import React from "react";
import IAForm from "@/components/IAForm";
import NichosGrid from "@/components/NichosGrid";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";

// Imagem anexa como logo
const LOGO = "/lovable-uploads/8caf5cf2-c173-44d2-adaf-0edc72ed62b0.png";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-x-hidden">
      {/* Efeito de BG Glow atrás do logo */}
      <div className="fixed top-0 left-0 w-full h-96 z-0 pointer-events-none" style={{
          background: "radial-gradient(circle at 50% 25%, #3cf 0%, #a0f 65%, transparent 90%)",
          opacity: 0.38,
          filter: "blur(60px)",
        }}></div>

      <header className="w-full flex flex-col items-center pt-16 relative z-20">
        {/* Logo principal */}
        <img src={LOGO} alt="CloudZen Logo" className="w-44 h-44 object-contain mb-4 drop-shadow-2xl" style={{filter: "drop-shadow(0 0 32px #32dffc90)"}} />
        {/* Slogan */}
        <div className="text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r from-blue-300 via-cyan-400 to-purple-500 text-transparent bg-clip-text drop-shadow">
          Conversas inteligentes, atendimento no fluxo da IA.
        </div>
        {/* Headline e subheadline */}
        <h1 className="text-4xl md:text-5xl font-black text-center text-primary mb-2 mt-4 drop-shadow-[0_4px_24px_rgba(53,172,255,0.5)]">Automatize o atendimento do seu negócio com a CloudZen</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-center text-muted-foreground max-w-2xl mb-5">
          Agentes inteligentes que criam fluxos de conversa personalizados para vendas, suporte e muito mais.
        </h2>
        {/* Slogan secundário */}
        <div className="italic text-md text-blue-200 mb-5">
          "Seu atendimento, automatizado no fluxo da inteligência artificial."
        </div>
        {/* Formulário CTA */}
        <div className="w-full max-w-xl mt-8 mb-4">
          <IAForm />
        </div>
      </header>

      {/* Benefícios */}
      <BenefitsSection />

      {/* Como funciona */}
      <HowItWorks />

      {/* Nichos */}
      <NichosGrid />

      {/* Rodapé */}
      <footer className="w-full pt-10 pb-6 text-center text-sm text-muted-foreground mt-12">
        © {new Date().getFullYear()} CloudZen. IA que conecta seu negócio.
      </footer>
    </div>
  );
};

export default Index;
