
import React from "react";
import IAForm from "@/components/IAForm";
import NichosGrid from "@/components/NichosGrid";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";

// Imagem anexa como logo
const LOGO = "/lovable-uploads/8caf5cf2-c173-44d2-adaf-0edc72ed62b0.png";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-x-hidden">
      {/* Efeito de BG Glow suave e animado atrás do logo */}
      <div
        className="fixed top-0 left-0 w-full h-96 z-0 pointer-events-none animate-pulse"
        style={{
          background:
            "radial-gradient(circle at 50% 25%, #e0f2fe 0%, #f8fafc 40%, #f0f9ff 70%, transparent 95%)",
          opacity: 0.6,
          filter: "blur(40px)",
          animation: "float 6s ease-in-out infinite",
        }}
      ></div>

      {/* Partículas flutuantes de fundo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-blue-200 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
      </div>

      <header className="w-full flex flex-col items-center pt-16 relative z-20">
        {/* Logo principal com animação de flutuação */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img
            src={LOGO}
            alt="CloudZen Logo"
            className="w-44 h-44 object-contain mb-4 drop-shadow-2xl transition-transform duration-300 hover:scale-110"
            style={{ 
              filter: "drop-shadow(0 0 32px #74d4fa70)",
              animation: "float 4s ease-in-out infinite"
            }}
          />
        </div>
        
        {/* Slogan com animação de entrada */}
        <div className="text-lg md:text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 text-transparent bg-clip-text drop-shadow animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Conversas inteligentes, atendimento no fluxo da IA.
        </div>
        
        {/* Headline e subheadline com animações */}
        <h1 className="text-4xl md:text-5xl font-black text-center text-primary mb-2 mt-4 drop-shadow-[0_4px_24px_rgba(165,180,252,0.16)] animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Automatize o atendimento do seu negócio com a CloudZen
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-center text-muted-foreground max-w-2xl mb-5 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          Agentes inteligentes que criam fluxos de conversa personalizados para vendas, suporte e muito mais.
        </h2>
        
        {/* Slogan secundário */}
        <div className="italic text-md text-blue-500 mb-5 animate-fade-in" style={{ animationDelay: '1s' }}>
          "Seu atendimento, automatizado no fluxo da inteligência artificial."
        </div>
        
        {/* Formulário CTA com animação */}
        <div className="w-full max-w-xl mt-8 mb-4 animate-scale-in" style={{ animationDelay: '1.2s' }}>
          <IAForm />
        </div>
      </header>

      {/* Seções animadas */}
      <div className="animate-fade-in" style={{ animationDelay: '1.4s' }}>
        <BenefitsSection />
      </div>

      <div className="animate-fade-in" style={{ animationDelay: '1.6s' }}>
        <HowItWorks />
      </div>

      <div className="animate-fade-in" style={{ animationDelay: '1.8s' }}>
        <NichosGrid />
      </div>

      {/* Rodapé */}
      <footer className="w-full pt-10 pb-6 text-center text-sm text-muted-foreground mt-12 animate-fade-in" style={{ animationDelay: '2s' }}>
        © {new Date().getFullYear()} CloudZen. IA que conecta o seu negócio.
      </footer>
    </div>
  );
};

export default Index;
