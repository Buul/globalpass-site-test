const phoneDigits = "5511986550492";
const whatsappMessage =
  "Olá! Gostaria de agendar uma demonstração da Global Pass.";

export const content = {
  meta: {
    title: "GlobalPass | Credencial digital para controle de acesso físico",
    description:
      "Plataforma de credenciamento inteligente com validação de identidade, biometria e credencial digital. Segurança, conformidade e eficiência em todo o ciclo de acesso.",
    keywords: [
      "GlobalPass",
      "credencial digital",
      "controle de acesso físico",
      "KYC digital",
      "HID Mobile Access",
      "gestão de identidade e acessos",
      "QR Code dinâmico",
      "Mobile Pass",
    ],
    ogAlt: "GlobalPass — credencial digital para acesso físico",
  },

  a11y: {
    skipToContent: "Ir para o conteúdo",
    main: "Conteúdo principal",
  },

  brand: {
    name: "GlobalPass",
    homeAriaLabel: "GlobalPass home",
  },

  nav: {
    ariaLabel: "Navegação principal",
    items: [
      { label: "Plataforma", href: "#plataforma" },
      { label: "Jornada", href: "#jornada" },
      { label: "Integrações", href: "#integracoes" },
      { label: "Contato", href: "#contato" },
    ],
    cta: "Fale conosco",
  },

  contact: {
    phoneDigits,
    whatsappUrl: `https://wa.me/${phoneDigits}?text=${encodeURIComponent(whatsappMessage)}`,
    items: [
      {
        icon: "mail" as const,
        label: "E-mail",
        value: "everton.mota@globalpass.app",
        href: "mailto:everton.mota@globalpass.app",
        external: false,
      },
      {
        icon: "instagram" as const,
        label: "Instagram",
        value: "@globalpass",
        href: "https://www.instagram.com/globalpass",
        external: true,
      },
      {
        icon: "phone" as const,
        label: "Telefone",
        value: "(11) 98655-0492",
        href: `tel:+${phoneDigits}`,
        external: false,
      },
    ],
  },

  hero: {
    imageAlt:
      "Pessoas acessando o lobby de um edifício corporativo por catracas",
    eyebrow: "Gestão de Identidade e Acessos",
    title: "Identidade verificada. Acesso liberado.",
    description:
      "Plataforma de credenciamento inteligente que gestiona a validação de identidade, biometria e documentação, proporcionando segurança, conformidade e eficiência operacional em todo o ciclo de acesso",
    ctaPrimary: "Agendar demonstração",
    ctaSecondary: "Ver a jornada",
  },

  journey: {
    eyebrow: "Jornada do Usuário",
    title: "Acesso digital, do início ao fim.",
    description:
      "O usuário recebe o convite, valida a identidade e apresenta a credencial — tudo pelo smartphone, sem depender de atendimento no local ou recepção.",
    steps: [
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
    ],
  },

  platform: {
    eyebrow: "Plataforma",
    title: "Fricção zero na portaria.\nControle total na gestão.",
    description:
      "Projetado com foco na experiência do usuário, o processo de credenciamento é realizado de forma totalmente digital, eliminando burocracias e reduzindo o tempo de acesso. Cada recurso elimina um processo manual e o substitui por regras configuráveis.",
    features: [
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
    ],
  },

  integrations: {
    eyebrow: "Ecossistema Aberto — Integrações",
    title: "Integra com a infraestrutura existente.",
    description:
      "A plataforma se conecta ao sistema de controle de acesso já instalado via API e conectores certificados, preservando o hardware existente e eliminando obras e reconfiguração manual dos dispositivos.",
    items: [
      "Genetec Security Center",
      "Honeywell Pro-Watch",
      "HID Global / OSDP",
      "Controle iD",
      "Hikvision ACS",
      "Intelbras",
      "Dormakaba",
      "API REST aberta",
    ],
  },

  useCases: {
    eyebrow: "Casos de Uso",
    title: "Perfis de acesso distintos.\nUma única plataforma de gestão.",
    description:
      "Cada jornada — visitantes, prestadores, eventos e multiunidades — opera regras, permissões e auditoria próprias, com gestão centralizada.",
    items: [
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
    ],
  },

  wallet: {
    eyebrow: "Global Pass Wallet + HID",
    title:
      "Credencial sempre disponível, com acesso liberado sem abrir o aplicativo",
    description:
      "A Global Pass Wallet integra-se nativamente ao HID Mobile Access, padrão mundial de credencial digital. O acesso por Bluetooth Low Energy e NFC funciona com o smartphone, com a praticidade de um crachá físico e o controle de uma plataforma SaaS.",
    imageAlt:
      "Profissional acessando a credencial digital pelo tablet no escritório",
    features: [
      {
        icon: "📱",
        title: "Smartphone como crachá",
        description:
          "Funciona com o aplicativo em segundo plano. No modo NFC, não depende de bateria do dispositivo",
      },
      {
        icon: "🔐",
        title: "Revogação instantânea",
        description:
          "Bloqueio em tempo real, sem necessidade de recolher crachá",
      },
      {
        icon: "🌍",
        title: "Padrão HID Global",
        description:
          "Integração nativa com HID Mobile Access, reconhecido mundialmente para credenciais digitais",
      },
      {
        icon: "📡",
        title: "Múltiplos protocolos",
        description:
          "Suporta BLE, NFC e QR Code dinâmico — adaptável a qualquer infraestrutura",
      },
    ],
  },

  why: {
    eyebrow: "Por que Global Pass",
    title: "Controle, eficiência e visibilidade em toda a operação.",
    items: [
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
    ],
  },

  impact: {
    eyebrow: "Impacto Operacional",
    title:
      "Redução de operação manual.\nGanho de eficiência na portaria.",
    description:
      "Convite antecipado, autocadastro e credencial digital eliminam as tarefas repetitivas concentradas antes do acesso, reduzindo custos operacionais e abrindo espaço para redimensionar a equipe.",
    table: {
      caption: "Comparação entre o processo atual de acesso e o processo com Global Pass",
      process: "Processo",
      before: "Processo Atual",
      after: "Com Global Pass",
      rows: [
        {
          process: "Cadastro",
          before: "Manual na portaria",
          after: "Autocadastro digital",
        },
        {
          process: "Autorização",
          before: "Realizada na hora",
          after: "Permissão pré-definida",
        },
        {
          process: "Credencial",
          before: "Emitida em balcão",
          after: "Disponível no smartphone",
        },
        {
          process: "Exceções",
          before: "Recorrentes e manuais",
          after: "Gerenciadas por regra",
        },
      ],
    },
  },

  architecture: {
    eyebrow: "Arquitetura do Sistema",
    title: "Governança centralizada. Execução distribuída.",
    description:
      "Um motor de decisão único coordena credenciais, permissões e auditoria em todas as camadas — da nuvem ao dispositivo físico.",
    items: [
      {
        number: "1",
        title: "SaaS (GCP)",
        description:
          "Núcleo. Dados e regras centralizados em nuvem com alta disponibilidade, backups automáticos e conformidade LGPD.",
      },
      {
        number: "2",
        title: "Identidade",
        description:
          "KYC Digital. Cada usuário é verificado com documento e biometria. O vínculo entre pessoa e credencial é único e rastreável.",
      },
      {
        number: "3",
        title: "Credencial Digital",
        description:
          "Multimodal. QR Code dinâmico, integração com Mobile Pass HID ou Bluetooth LE — adaptável ao hardware instalado no local.",
      },
      {
        number: "4",
        title: "Permissões",
        description:
          "Detalhadas. Regras configuradas por perfil, local, horário e validade. Herança de grupo e exceções individuais integralmente rastreadas.",
      },
      {
        number: "5",
        title: "Integração",
        description:
          "Certificada. Comunicação bidirecional com sistemas de controle de acesso e demais sistemas via API certificada.",
      },
      {
        number: "6",
        title: "Execução Física",
        description:
          "Hardware agnóstico. Catracas, portas, cancelas e leitores respondem à instrução do motor de governança em milissegundos, independentemente do fabricante.",
      },
      {
        number: "7",
        title: "Auditoria",
        description:
          "Rastreável. Histórico imutável de emissão, uso, negação e revogação — exportável para SIEM e relatórios de compliance.",
      },
      {
        number: "8",
        title: "Fisital",
        description:
          "Opcional. Camada de correlação entre eventos físicos e sistemas digitais para uma visão operacional unificada.",
      },
    ],
  },

  footer: {
    tagline: "Credencial Digital para Acesso Físico",
    cta: "Veja a Global Pass na sua operação.",
    ctaButton: "Agendar demonstração",
  },

  cookies: {
    title: "Cookies neste site",
    description:
      "Usamos cookies necessários para o funcionamento do site e, com o seu consentimento, cookies de análise para entender o uso das páginas. Você pode rever sua escolha no rodapé.",
    essential: "Apenas necessários",
    acceptAll: "Aceitar todos",
    preferences: "Preferências de cookies",
  },
} as const;
