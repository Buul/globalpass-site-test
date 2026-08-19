const phoneDigits = "5511986550492";
const whatsappMessage =
  "Olá! Gostaria de agendar uma demonstração da Global Pass.";

export const content = {
  meta: {
    title: "GlobalPass | Credencial digital para controle de acesso físico",
    description:
      "O Global Pass simplifica toda gestão de acesso da sua empresa, oferecendo uma jornada segura, inteligente e acolhedora para cada visitante, colaboradores e prestador de serviço.",
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
    title:
      "Gestão de acesso simplificada.\nIntegração completa com a\ninfraestrutura existente.",
    description:
      "O Global Pass simplifica toda gestão de acesso da sua empresa, oferecendo uma jornada segura, inteligente e acolhedora para cada visitante, colaboradores e prestador de serviço.",
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
      "Ronda X (cloud) Senior",
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
    privacy: "Política de privacidade",
  },

  cookies: {
    title: "Cookies neste site",
    description:
      "Este site grava no seu navegador apenas a sua escolha sobre este aviso, para não perguntar de novo. Não usamos cookies de análise nem pixels de terceiros neste momento. Você pode rever a escolha no rodapé.",
    essential: "Apenas necessários",
    acceptAll: "Ok, entendi",
    preferences: "Preferências de cookies",
    privacy: "Ler a política de privacidade",
  },

  privacy: {
    title: "Política de privacidade",
    updated: "Atualizada em 19 de agosto de 2026.",
    intro:
      "Esta página descreve como a GlobalPass trata dados pessoais no site institucional globalpass.app. É um texto mínimo de transparência (LGPD). Não substitui contrato de cliente da plataforma Global Pass.",
    sections: [
      {
        title: "Quem somos",
        body: "O site é operado pela GlobalPass. Para questões de privacidade ou segurança, use o e-mail indicado no rodapé.",
      },
      {
        title: "Dados que coletamos",
        body: "O site não exige cadastro. Se você nos escreve por e-mail, telefone ou WhatsApp, tratamos os dados que você envia para responder o contato. Não rodamos, neste momento, ferramentas de análise de terceiros.",
      },
      {
        title: "Armazenamento no navegador",
        body: "Usamos o armazenamento local do navegador somente para lembrar se você já respondeu ao aviso de cookies. Isso não identifica você junto a um serviço nosso em nuvem.",
      },
      {
        title: "Compartilhamento",
        body: "Links para WhatsApp e Instagram levam a serviços de terceiros, com as políticas deles. Não vendemos dados pessoais.",
      },
      {
        title: "Seus direitos",
        body: "Você pode pedir acesso, correção ou exclusão dos dados que tivermos a seu respeito, e revogar a escolha do aviso de cookies pelo link no rodapé. Para exercer direitos LGPD, contate o e-mail do rodapé.",
      },
    ],
  },
} as const;
