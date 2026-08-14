import Image from "next/image";
import CookiePreferencesButton from "./components/cookie-preferences-button";

const navItems = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Jornada", href: "#jornada" },
  { label: "Integrações", href: "#integracoes" },
  { label: "Contato", href: "#contato" },
];

const userJourneySteps = [
  {
    step: "01",
    title: "Convite",
    description:
      "O administrador envia um convite por e-mail ou link direto no App, com validade configurável.",
  },
  {
    step: "02",
    title: "Autocadastro",
    description:
      "O usuário envia foto do documento e selfie. A validação de identidade é automática — concluída em segundos, sem intervenção manual.",
  },
  {
    step: "03",
    title: "Credencial",
    description:
      "A credencial é emitida digitalmente: QR Code dinâmico, Mobile Pass na Wallet ou chave BLE, conforme o hardware instalado no local.",
  },
  {
    step: "04",
    title: "Check-in",
    description:
      "Na chegada, o usuário confirma a presença pelo app. A recepção é notificada automaticamente e o acesso é pré-validado antes da catraca (etapa opcional).",
  },
  {
    step: "05",
    title: "Acesso",
    description:
      "A catraca, porta ou cancela responde à credencial conforme as permissões definidas. O evento é registrado com timestamp, local e dispositivo.",
  },
];

const platformFeatures = [
  {
    title: "Motor de Governança Centralizado",
    description:
      "Todas as regras de permissão em um único motor: quem entra, onde, quando e por quanto tempo. Qualquer alteração propaga imediatamente para todas as unidades e dispositivos — sem reprogramar equipamentos individualmente.",
  },
  {
    title: "Permissões Detalhadas",
    description:
      "Configure por perfil, área, horário e período. Credenciais temporárias expiram automaticamente no último dia do contrato.",
  },
  {
    title: "Auditoria em Tempo Real",
    description:
      "Cada tentativa de acesso — autorizada ou negada — é registrada com timestamp, credencial, local e dispositivo. Histórico completo disponível para compliance e auditorias.",
  },
  {
    title: "Multiunidades em Painel Único",
    description:
      "Gerencie filiais, andares, eventos e sites a partir de um único portal. Relatórios consolidados com drill-down por unidade.",
  },
  {
    title: "Ciclo de Vida Controlado",
    description:
      "Credenciais com validade definida por regra de negócio. Expiram automaticamente, notificam o gestor com antecedência e eliminam o risco do crachá ativo de ex-colaborador.",
  },
  {
    title: "Dashboard Operacional",
    description:
      "Visão em tempo real de eventos ativos, ocupação por local, fluxo de entradas e saídas, convidados pendentes e anomalias. Dados para decisão — não planilha.",
  },
];

const integrations = [
  "Genetec Security Center",
  "Honeywell Pro-Watch",
  "HID Global / OSDP",
  "Controle iD",
  "Hikvision ACS",
  "Intelbras",
  "Dormakaba",
  "API REST aberta",
];

const useCases = [
  {
    title: "Visitantes",
    description:
      "O convite é enviado com antecedência. O visitante faz o pré-cadastro com documento e recebe uma credencial válida apenas para aquela visita. A recepção é notificada na chegada. Elimina o cadastro manual em sistema e as filas no balcão da recepção.",
  },
  {
    title: "Terceiros & Prestadores",
    description:
      "Acesso restrito ao espaço, ao horário e ao período contratado. A credencial é emitida com validade definida e expira automaticamente, sem etapas manuais de cancelamento.",
  },
  {
    title: "Eventos & Credenciamento",
    description:
      "Credencial individual por participante, validação ágil na entrada e controle de ocupação em tempo real. A estrutura escala conforme o volume do evento, mantendo a mesma operação.",
  },
  {
    title: "Multiunidades",
    description:
      "Uma única credencial com permissões específicas por site. O colaborador que transita entre unidades carrega o acesso correto em cada local — sem recadastro, com gestão centralizada.",
  },
];

const whyGlobalPass = [
  {
    title: "Controle completo da jornada",
    description:
      "Controle sobre cada etapa da jornada de acesso. Do convite à credencial, da permissão ao registro de saída — visibilidade e governança completas para operação e gestão.",
  },
  {
    title: "Redução de etapas manuais",
    description:
      "Autocadastro, convite antecipado e credencial digital eliminam o atendimento presencial na portaria, reduzindo retrabalho operacional.",
  },
  {
    title: "Validade conforme regra de negócio",
    description:
      "Credenciais expiram automaticamente conforme o prazo definido e notificam o gestor com antecedência, eliminando o risco de acesso residual por credencial ativa de ex-colaborador.",
  },
  {
    title: "Visibilidade operacional em tempo real",
    description:
      "Ocupação atual, fluxo de entradas e saídas e ocorrências disponíveis no momento em que acontecem, sem depender de relatórios consolidados no dia seguinte",
  },
  {
    title: "Gestão centralizada entre unidades",
    description:
      "Credenciais, permissões e relatórios padronizados em painel único, com autonomia delegada por site — uma plataforma para todas as unidades, sem perda de controle local",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <div className="brand" aria-label="GlobalPass home">
            <Image
              src="/logo.svg"
              alt="GlobalPass"
              width={186}
              height={30}
              priority
            />
          </div>

          <nav className="main-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contato" className="button button-primary">
            Fale conosco
          </a>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-media">
            <Image
              src="/hero-lobby.png"
              alt="Pessoas acessando o lobby de um edifício corporativo por catracas"
              className="hero-photo"
              fill
              sizes="100vw"
              priority
            />
          </div>

          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="hero-eyebrow">
                Gestão de Identidade e Acessos
              </span>
              <h1>Identidade verificada. Acesso liberado.</h1>
              <p>
                Plataforma de credenciamento inteligente que gestiona a
                validação de identidade, biometria e documentação,
                proporcionando segurança, conformidade e eficiência operacional
                em todo o ciclo de acesso
              </p>

              <div className="cta-row">
                <a href="#contato" className="button button-primary">
                  Agendar demonstração
                </a>
                <a href="#jornada" className="button button-secondary">
                  Ver a jornada
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* USER JOURNEY SECTION */}
        <section id="jornada" className="section">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">Jornada do Usuário</span>
            <h2>Acesso digital, do início ao fim.</h2>
            <p>
              O usuário recebe o convite, valida a identidade e apresenta a
              credencial — tudo pelo smartphone, sem depender de atendimento no
              local ou recepção.
            </p>
          </div>

          <div className="container journey-grid">
            {userJourneySteps.map((step) => (
              <article key={step.step} className="journey-card">
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PLATFORM SECTION */}
        <section id="plataforma" className="section section-alt">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">Plataforma</span>
            <h2>Fricção zero na portaria. <br/> Controle total na gestão.</h2>
            <p>
              Projetado com foco na experiência do usuário, o processo de
              credenciamento é realizado de forma totalmente digital, eliminando
              burocracias e reduzindo o tempo de acesso. Cada recurso elimina um
              processo manual e o substitui por regras configuráveis.
            </p>
          </div>

          <div className="container features-grid">
            {platformFeatures.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* INTEGRATIONS SECTION */}
        <section id="integracoes" className="section">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">
              Ecossistema Aberto — Integrações
            </span>
            <h2>Integra com a infraestrutura existente.</h2>
            <p>
              A plataforma se conecta ao sistema de controle de acesso já
              instalado via API e conectores certificados, preservando o
              hardware existente e eliminando obras e reconfiguração manual dos
              dispositivos.
            </p>
          </div>

          <div className="container integrations-grid">
            {integrations.map((integration) => (
              <div key={integration} className="integration-badge">
                {integration}
              </div>
            ))}
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section id="casos" className="section section-alt">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">Casos de Uso</span>
            <h2>Perfis de acesso distintos. <br/> Uma única plataforma de gestão.</h2>
            <p>
              Cada jornada — visitantes, prestadores, eventos e multiunidades —
              opera regras, permissões e auditoria próprias, com gestão
              centralizada.
            </p>
          </div>

          <div className="container use-cases-grid">
            {useCases.map((useCase) => (
              <article key={useCase.title} className="use-case-card">
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WALLET SECTION */}
        <section className="section">
          <div className="container wallet-showcase">
            <div className="section-header">
              <span className="eyebrow eyebrow-dark">
                Global Pass Wallet + HID
              </span>
              <h2>
                Credencial sempre disponível, com acesso liberado sem abrir o
                aplicativo
              </h2>
              <p>
                A Global Pass Wallet integra-se nativamente ao HID Mobile
                Access, padrão mundial de credencial digital. O acesso por
                Bluetooth Low Energy e NFC funciona com o smartphone, com a
                praticidade de um crachá físico e o controle de uma plataforma
                SaaS.
              </p>
            </div>

            <div className="wallet-visual">
              <Image
                src="/wallet-office.jpg"
                alt=""
                className="wallet-visual-scene"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <Image
                src="/wallet-person.webp"
                alt="Profissional acessando a credencial digital pelo tablet no escritório"
                className="wallet-visual-person"
                width={712}
                height={976}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="container wallet-features-full">
            <div className="wallet-feature">
              <div className="feature-icon">📱</div>
              <strong>Smartphone como crachá</strong>
              <p>
                Funciona com o aplicativo em segundo plano. No modo NFC, não
                depende de bateria do dispositivo
              </p>
            </div>
            <div className="wallet-feature">
              <div className="feature-icon">🔐</div>
              <strong>Revogação instantânea</strong>
              <p>Bloqueio em tempo real, sem necessidade de recolher crachá</p>
            </div>
            <div className="wallet-feature">
              <div className="feature-icon">🌍</div>
              <strong>Padrão HID Global</strong>
              <p>
                Integração nativa com HID Mobile Access, reconhecido
                mundialmente para credenciais digitais
              </p>
            </div>
            <div className="wallet-feature">
              <div className="feature-icon">📡</div>
              <strong>Múltiplos protocolos</strong>
              <p>
                Suporta BLE, NFC e QR Code dinâmico — adaptável a qualquer
                infraestrutura
              </p>
            </div>
          </div>
        </section>

        {/* WHY GLOBAL PASS SECTION */}
        <section id="beneficios" className="section section-alt">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">Por que Global Pass</span>
            <h2>Controle, eficiência e visibilidade em toda a operação.</h2>
          </div>

          <div className="container benefits-grid">
            {whyGlobalPass.map((benefit) => (
              <article key={benefit.title} className="benefit-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* OPERATIONAL IMPACT SECTION */}
        <section className="section">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">Impacto Operacional</span>
            <h2>
              Redução de operação manual. <br/> Ganho de eficiência na portaria.
            </h2>
            <p>
              Convite antecipado, autocadastro e credencial digital eliminam as
              tarefas repetitivas concentradas antes do acesso, reduzindo custos
              operacionais e abrindo espaço para redimensionar a equipe.
            </p>
          </div>

          <div className="container impact-table">
            <div className="table-header-row">
              <div className="table-label-header">Processo</div>
              <div className="table-before-header">Processo Atual</div>
              <div className="table-after-header">Com Global Pass</div>
            </div>
            <div className="table-body">
              <div className="comparison-row">
                <div className="table-label">
                  <strong>Cadastro</strong>
                </div>
                <div className="table-before">
                  <span className="status-badge status-before">❌</span>
                  <p>Manual na portaria</p>
                </div>
                <div className="table-after">
                  <span className="status-badge status-after">✓</span>
                  <p>Autocadastro digital</p>
                </div>
              </div>
              <div className="comparison-row">
                <div className="table-label">
                  <strong>Autorização</strong>
                </div>
                <div className="table-before">
                  <span className="status-badge status-before">❌</span>
                  <p>Realizada na hora</p>
                </div>
                <div className="table-after">
                  <span className="status-badge status-after">✓</span>
                  <p>Permissão pré-definida</p>
                </div>
              </div>
              <div className="comparison-row">
                <div className="table-label">
                  <strong>Credencial</strong>
                </div>
                <div className="table-before">
                  <span className="status-badge status-before">❌</span>
                  <p>Emitida em balcão</p>
                </div>
                <div className="table-after">
                  <span className="status-badge status-after">✓</span>
                  <p>Disponível no smartphone</p>
                </div>
              </div>
              <div className="comparison-row">
                <div className="table-label">
                  <strong>Exceções</strong>
                </div>
                <div className="table-before">
                  <span className="status-badge status-before">❌</span>
                  <p>Recorrentes e manuais</p>
                </div>
                <div className="table-after">
                  <span className="status-badge status-after">✓</span>
                  <p>Gerenciadas por regra</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SYSTEM ARCHITECTURE SECTION */}
        <section className="section section-alt">
          <div className="container section-header">
            <span className="eyebrow eyebrow-dark">Arquitetura do Sistema</span>
            <h2>Governança centralizada. Execução distribuída.</h2>
            <p>
              Um motor de decisão único coordena credenciais, permissões e
              auditoria em todas as camadas — da nuvem ao dispositivo físico.
            </p>
          </div>

          <div className="container architecture-grid">
            <div className="arch-item">
              <div className="arch-number">1</div>
              <h4>SaaS (GCP)</h4>
              <p>
                Núcleo. Dados e regras centralizados em nuvem com alta
                disponibilidade, backups automáticos e conformidade LGPD.
              </p>
            </div>
            <div className="arch-item">
              <div className="arch-number">2</div>
              <h4>Identidade</h4>
              <p>
                KYC Digital. Cada usuário é verificado com documento e
                biometria. O vínculo entre pessoa e credencial é único e
                rastreável.
              </p>
            </div>
            <div className="arch-item">
              <div className="arch-number">3</div>
              <h4>Credencial Digital</h4>
              <p>
                Multimodal. QR Code dinâmico, integração com Mobile Pass HID ou
                Bluetooth LE — adaptável ao hardware instalado no local.
              </p>
            </div>
            <div className="arch-item">
              <div className="arch-number">4</div>
              <h4>Permissões</h4>
              <p>
                Detalhadas. Regras configuradas por perfil, local, horário e
                validade. Herança de grupo e exceções individuais integralmente
                rastreadas.
              </p>
            </div>
            <div className="arch-item">
              <div className="arch-number">5</div>
              <h4>Integração</h4>
              <p>
                Certificada. Comunicação bidirecional com sistemas de controle
                de acesso e demais sistemas via API certificada.
              </p>
            </div>
            <div className="arch-item">
              <div className="arch-number">6</div>
              <h4>Execução Física</h4>
              <p>
                Hardware agnóstico. Catracas, portas, cancelas e leitores
                respondem à instrução do motor de governança em milissegundos,
                independentemente do fabricante.
              </p>
            </div>
            <div className="arch-item">
              <div className="arch-number">7</div>
              <h4>Auditoria</h4>
              <p>
                Rastreável. Histórico imutável de emissão, uso, negação e
                revogação — exportável para SIEM e relatórios de compliance.
              </p>
            </div>
            <div className="arch-item">
              <div className="arch-number">8</div>
              <h4>Fisital</h4>
              <p>
                Opcional. Camada de correlação entre eventos físicos e sistemas
                digitais para uma visão operacional unificada.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contato" className="footer">
        <div className="container footer-wrap">
          <div>
            <div className="brand brand-footer">
              <Image src="/logo.svg" alt="GlobalPass" width={186} height={30} />
            </div>
            <p>Credencial Digital para Acesso Físico</p>
            <CookiePreferencesButton />
          </div>

          <div className="footer-cta">
            <p>Veja a Global Pass na sua operação.</p>
            <a
              //href="mailto:contato@globalpass.com"
              className="button button-primary"
            >
              Agendar demonstração
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
