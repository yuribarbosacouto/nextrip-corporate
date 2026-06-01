import { useMemo, useState } from "react";
import type { ComponentType, CSSProperties, FormEvent } from "react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Gauge,
  Globe2,
  HeartHandshake,
  LineChart,
  MapPinned,
  MessageCircle,
  Plane,
  QrCode,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

type IconType = ComponentType<LucideProps>;

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const formatCurrency = (value: number, maximumFractionDigits = 0) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits,
  }).format(value);

const kpis = [
  { value: "90", label: "colaboradores premiados", detail: "jornada internacional completa" },
  { value: "18", label: "unidades conectadas", detail: "RJ e SP em uma experiência única" },
  { value: "95%", label: "satisfação esperada", detail: "pesquisa pós-evento e NPS" },
  { value: "20%", label: "taxa de gestão", detail: "modelo financeiro transparente" },
];

const serviceLanes: Array<{ icon: IconType; title: string; copy: string }> = [
  {
    icon: BriefcaseBusiness,
    title: "Eventos corporativos",
    copy: "Planejamento ponta a ponta para premiações, encontros de liderança, convenções e integrações.",
  },
  {
    icon: Plane,
    title: "Viagens de incentivo",
    copy: "Roteiros internacionais que transformam metas batidas em reconhecimento memorável.",
  },
  {
    icon: Workflow,
    title: "Logística empresarial",
    copy: "Controle de participantes, traslados, hospedagem, agenda, fornecedores e operação local.",
  },
  {
    icon: BarChart3,
    title: "Métricas executivas",
    copy: "Indicadores de custo, adesão, satisfação, engajamento e retorno para apoiar decisão.",
  },
];

const platformFeatures: Array<{ icon: IconType; title: string; copy: string }> = [
  {
    icon: Gauge,
    title: "Planejador em minutos",
    copy: "Entradas rápidas de participantes, destino e orçamento para gerar uma visão inicial do projeto.",
  },
  {
    icon: QrCode,
    title: "Check-in inteligente",
    copy: "QR Code, credenciamento digital e status de presença por participante.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação centralizada",
    copy: "Convites digitais, avisos de embarque, lembretes e suporte antes, durante e depois da viagem.",
  },
  {
    icon: LineChart,
    title: "Relatórios pós-evento",
    copy: "Pesquisa de satisfação, feedbacks, relatório executivo e indicadores para liderança.",
  },
];

const timeline = [
  "Recepção",
  "Integração",
  "Passeios",
  "Workshops",
  "Lazer",
  "Premiação",
  "Encerramento",
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="NextTrip Corporate">
        <img src={asset("assets/nexttrip-logo.jpeg")} alt="" />
        <span>
          <strong>NextTrip</strong>
          <small>Corporate</small>
        </span>
      </a>

      <nav className="primary-nav" aria-label="Navegação principal">
        <a href="#metricas">Métricas</a>
        <a href="#plataforma">Plataforma</a>
        <a href="#case">Case</a>
        <a href="#contato">Contato</a>
      </nav>

      <a className="button button-primary header-cta" href="#contato">
        <CalendarCheck size={18} />
        Agendar demo
      </a>
    </header>
  );
}

function MetricCard({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <article className="metric-card">
      <strong>{value}</strong>
      <span>{label}</span>
      <p>{detail}</p>
    </article>
  );
}

function Hero() {
  const heroStyle = {
    "--hero-image": `url(${asset("assets/san-andres-hero.jpg")})`,
  } as CSSProperties;

  return (
    <section className="hero" id="inicio" style={heroStyle} aria-label="NextTrip Corporate">
      <div className="hero-content">
        <p className="eyebrow">Eventos, incentivo e logística empresarial</p>
        <h1>NextTrip Corporate</h1>
        <p className="hero-copy">
          Onde negócios encontram experiências memoráveis, com planejamento inteligente,
          operação completa e indicadores que a liderança consegue acompanhar.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#metricas">
            Ver métricas
            <ArrowRight size={18} />
          </a>
          <a className="button button-ghost" href="#plataforma">
            <Sparkles size={18} />
            Conhecer plataforma
          </a>
        </div>
      </div>

      <div className="hero-dashboard" aria-label="Resumo executivo">
        <div>
          <span>Urban Experience Awards 2026</span>
          <strong>San Andrés, Colômbia</strong>
        </div>
        <div className="dashboard-mini-grid">
          <span>7 dias / 6 noites</span>
          <span>R$ 894 mil contrato</span>
          <span>R$ 9.933 por participante</span>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="section-shell metrics-section" id="metricas">
      <div className="section-heading">
        <p className="eyebrow">Métricas que sustentam a proposta</p>
        <h2>Uma operação pensada para reconhecimento, retenção e controle financeiro.</h2>
      </div>

      <div className="metric-grid">
        {kpis.map((item) => (
          <MetricCard key={item.label} {...item} />
        ))}
      </div>

      <div className="metrics-board">
        <div className="board-copy">
          <p className="eyebrow">Dashboard executivo</p>
          <h3>Dados para aprovar, operar e medir o evento.</h3>
          <p>
            O case Urban Experience Awards 2026 usa números de custo, adesão,
            satisfação e investimento por participante para transformar a viagem
            em decisão estratégica.
          </p>
          <div className="signal-list">
            <span>
              <CheckCircle2 size={18} />
              Redução de rotatividade
            </span>
            <span>
              <CheckCircle2 size={18} />
              Integração entre unidades
            </span>
            <span>
              <CheckCircle2 size={18} />
              Relatório pós-evento
            </span>
          </div>
        </div>

        <div className="visual-dashboard" aria-label="Painel de indicadores">
          <div className="dashboard-topline">
            <span>Contrato</span>
            <strong>R$ 894.000</strong>
          </div>
          <div className="donut-row">
            <div className="donut" aria-hidden="true">
              <span>20%</span>
            </div>
            <div className="donut-legend">
              <span>
                <i className="legend-dot dot-blue" />
                Custos operacionais: R$ 745 mil
              </span>
              <span>
                <i className="legend-dot dot-green" />
                Gestão NextTrip: R$ 149 mil
              </span>
            </div>
          </div>
          <div className="bar-stack">
            <span style={{ "--bar": "84%" } as CSSProperties}>Operação</span>
            <span style={{ "--bar": "95%" } as CSSProperties}>Satisfação</span>
            <span style={{ "--bar": "88%" } as CSSProperties}>Engajamento</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section-shell services-section">
      <div className="section-heading horizontal">
        <div>
          <p className="eyebrow">Solução completa</p>
          <h2>Da estratégia ao último feedback.</h2>
        </div>
        <p>
          A NextTrip une planejamento corporativo, experiência turística e operação
          com tecnologia para que o evento entregue valor antes, durante e depois.
        </p>
      </div>

      <div className="service-grid">
        {serviceLanes.map(({ icon: Icon, title, copy }) => (
          <article className="service-card" key={title}>
            <Icon size={28} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section className="platform-section" id="plataforma">
      <div className="section-shell platform-layout">
        <div className="platform-copy">
          <p className="eyebrow">Plataforma NextTrip</p>
          <h2>Gestão visual para eventos corporativos de alto impacto.</h2>
          <p>
            O site apresenta a NextTrip como uma solução com método: simulação,
            orçamento, credenciamento, comunicação e mensuração em um fluxo único.
          </p>
          <a className="button button-light" href="#simulador">
            Simular orçamento
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="feature-grid">
          {platformFeatures.map(({ icon: Icon, title, copy }) => (
            <article className="feature-card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section className="section-shell case-section" id="case">
      <div className="case-visual">
        <img src={asset("assets/presentation-board.jpg")} alt="Materiais visuais do Urban Experience Awards 2026" />
      </div>

      <div className="case-copy">
        <p className="eyebrow">Case demonstrativo</p>
        <h2>Urban Experience Awards 2026</h2>
        <p>
          Uma viagem internacional para reconhecer os melhores colaboradores da
          Urban Store, conectar unidades do RJ e SP e fortalecer a cultura de metas.
        </p>

        <div className="case-stats">
          <span>
            <strong>R$ 745 mil</strong>
            custos operacionais
          </span>
          <span>
            <strong>R$ 149 mil</strong>
            lucro bruto estimado
          </span>
          <span>
            <strong>R$ 9.933</strong>
            investimento por colaborador
          </span>
        </div>

        <div className="timeline" aria-label="Cronograma do evento">
          {timeline.map((day, index) => (
            <div className="timeline-item" key={day}>
              <span>{index + 1}</span>
              <strong>{day}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Simulator() {
  const [participants, setParticipants] = useState(90);
  const [costPerPerson, setCostPerPerson] = useState(8278);
  const [fee, setFee] = useState(20);

  const totals = useMemo(() => {
    const operational = participants * costPerPerson;
    const management = operational * (fee / 100);
    const contract = operational + management;
    return {
      operational,
      management,
      contract,
      perPerson: contract / participants,
    };
  }, [costPerPerson, fee, participants]);

  return (
    <section className="section-shell simulator-section" id="simulador">
      <div className="section-heading horizontal">
        <div>
          <p className="eyebrow">Simulador financeiro</p>
          <h2>Transforme escopo em número de aprovação.</h2>
        </div>
        <p>
          Ajuste participantes, investimento médio e taxa de gestão para visualizar
          o contrato estimado de um evento corporativo.
        </p>
      </div>

      <div className="simulator-grid">
        <div className="simulator-controls">
          <label>
            <span>Participantes</span>
            <strong>{participants}</strong>
            <input
              type="range"
              min="20"
              max="300"
              step="5"
              value={participants}
              onChange={(event) => setParticipants(Number(event.target.value))}
            />
          </label>

          <label>
            <span>Custo operacional por pessoa</span>
            <strong>{formatCurrency(costPerPerson)}</strong>
            <input
              type="range"
              min="4000"
              max="16000"
              step="250"
              value={costPerPerson}
              onChange={(event) => setCostPerPerson(Number(event.target.value))}
            />
          </label>

          <label>
            <span>Taxa de gestão</span>
            <strong>{fee}%</strong>
            <input
              type="range"
              min="10"
              max="30"
              step="1"
              value={fee}
              onChange={(event) => setFee(Number(event.target.value))}
            />
          </label>
        </div>

        <div className="simulator-output" aria-label="Resultado do simulador">
          <div>
            <span>Custos operacionais</span>
            <strong>{formatCurrency(totals.operational)}</strong>
          </div>
          <div>
            <span>Gestão NextTrip</span>
            <strong>{formatCurrency(totals.management)}</strong>
          </div>
          <div className="output-total">
            <span>Contrato estimado</span>
            <strong>{formatCurrency(totals.contract)}</strong>
          </div>
          <div>
            <span>Investimento por participante</span>
            <strong>{formatCurrency(totals.perPerson, 2)}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="contact-section" id="contato">
      <div className="section-shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Próximo evento</p>
          <h2>Transformando reconhecimento em experiências memoráveis.</h2>
          <p>
            Conte sua meta de negócio e a NextTrip estrutura a jornada, o orçamento,
            a operação e os indicadores que comprovam o impacto.
          </p>
          <div className="contact-highlights">
            <span>
              <ShieldCheck size={18} />
              Operação completa
            </span>
            <span>
              <Trophy size={18} />
              Reconhecimento de talentos
            </span>
            <span>
              <Globe2 size={18} />
              Experiências internacionais
            </span>
          </div>
        </div>

        <form className="lead-form" onSubmit={handleSubmit}>
          <label>
            Nome
            <input type="text" name="name" placeholder="Seu nome" required />
          </label>
          <label>
            Empresa
            <input type="text" name="company" placeholder="Nome da empresa" required />
          </label>
          <label>
            E-mail
            <input type="email" name="email" placeholder="voce@empresa.com" required />
          </label>
          <label>
            Objetivo do evento
            <select name="goal" defaultValue="Reconhecimento">
              <option>Reconhecimento</option>
              <option>Integração</option>
              <option>Treinamento</option>
              <option>Viagem de incentivo</option>
            </select>
          </label>
          <button className="button button-primary button-full" type="submit">
            Solicitar proposta
            <ArrowRight size={18} />
          </button>
          {sent && (
            <p className="form-feedback">
              Solicitação registrada para demonstração. A apresentação pode seguir
              com esse fluxo de captação.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Platform />
        <CaseStudy />
        <Simulator />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="footer-brand">
          <img src={asset("assets/nexttrip-logo.jpeg")} alt="" />
          <span>
            <strong>NextTrip Corporate</strong>
            <small>Onde negócios encontram experiências memoráveis.</small>
          </span>
        </div>
        <div className="footer-links">
          <a href="#metricas">Métricas</a>
          <a href="#plataforma">Plataforma</a>
          <a href="#contato">Contato</a>
        </div>
      </footer>
    </>
  );
}

export default App;
