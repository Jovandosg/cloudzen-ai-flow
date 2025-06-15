
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
  "Confirmação e lembrentes de Agendamentos",
  "Convites e Divulgação de Eventos",
  "Vendas Cruzadas (Cross-selllings)",
  "Assistência a Clientes VIP",
  "Atendimento a Assinantes e Sócios",
  "Consultas Educacionais e Lembretes",
  "Telemedicina e Atendimento Médico",
  "Consultória Jurídica e Advocacia",
  "Imobiliário (Corretagem e Gestão de Imóveis)",
  "Delivery e Serviços de Comida",
  "Gestão de Seguros",
  "Turismo e Viagens",
  "Educação e EAD (Ensino a Distância)",
  "Manutenção Predial e Residencial",
  "Saúde e Bem-estar",
  "Segurança Eletronica",
  "Organizadores de Eventos",
  "Associações e Organizaçõessem Fins Lucrativos",
  "Recursos Humanos e Recrutamento",
  "Consultoria Financeira e Investimento",
];

const NichosGrid: React.FC = () => (
  <section className="py-12 max-w-6xl mx-auto">
    <h2 className="text-2xl font-semibold text-primary text-center mb-6">
      Nichos de Atuação dos <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text font-bold">Agentes CloudZen</span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {nichos.map((nich, i) => (
        <div
          className="bg-background/70 border border-border rounded-lg p-4 flex items-center font-medium text-muted-foreground shadow hover:shadow-md hover:bg-background/90 transition"
          key={i}
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3 block" />
          {nich}
        </div>
      ))}
    </div>
  </section>
);

export default NichosGrid;
