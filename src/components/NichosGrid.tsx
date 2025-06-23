
import React from "react";

const nichos = [
  "SDR para Qualificação de Leads",
  "Atendimento de Salão de Beleza",
  "Atendimento Odontológico",
  "Atendimento Médico",
  "Atendimento para Alunos de Curso Digital",
  "Cobrança e Recuperação de Crédito",
  "Suporte Técnico",
  "Pesquisa de Satisfação",
  "Agendamento de Consultas e Reuniões",
  "Vendas Ativas",
  "Follow-up de Propostas",
  "Retenção de Clientes",
  "Confirmação e lembretes de Agendamentos",
  "Convites e Divulgação de Eventos",
  "Vendas Cruzadas (Cross-selling)",
  "Assistência a Clientes VIP",
  "Atendimento a Assinantes e Sócios",
  "Consultas Educacionais e Lembretes",
  "Telemedicina e Atendimento Médico",
  "Consultoria Jurídica e Advocacia",
  "Imobiliário (Corretagem e Gestão de Imóveis)",
  "Delivery e Serviços de Comida",
  "Gestão de Seguros",
  "Turismo e Viagens",
  "Educação e EAD (Ensino a Distância)",
  "Manutenção Predial e Residencial",
  "Saúde e Bem-estar",
  "Segurança Eletrônica",
  "Organizadores de Eventos",
  "Associações e Organizações sem Fins Lucrativos",
  "Recursos Humanos e Recrutamento",
  "Consultoria Financeira e Investimento",
];

const NichosGrid: React.FC = () => (
  <section className="py-16 max-w-6xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
      Nichos de Atuação dos <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-transparent bg-clip-text font-extrabold">Agentes CloudZen</span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {nichos.map((nicho, i) => (
        <div
          className="group relative bg-white/80 backdrop-blur-sm border border-gray-100/50 rounded-xl p-5 flex items-center font-medium text-gray-700 shadow-sm hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer overflow-hidden"
          style={{ 
            animationDelay: `${i * 0.05}s`,
          }}
          key={i}
        >
          {/* Efeito de gradiente no hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Indicador colorido */}
          <span className="relative w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300 shadow-sm" />
          
          {/* Texto */}
          <span className="relative group-hover:text-gray-800 transition-colors duration-300">
            {nicho}
          </span>
          
          {/* Ícone de seta que aparece no hover */}
          <div className="relative ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500">
              <path d="M5 12l6-6-6-6"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default NichosGrid;
