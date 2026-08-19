# Checklist Vercel — segurança (GlobalPass)

Itens de console. O código já envia headers via `next.config.ts`; isto não substitui a configuração da conta.

## Previews

- [ ] **Deployment Protection** em Preview: Vercel Authentication (time) ou senha.
- [ ] Confirmar que deploys `*.vercel.app` não ficam públicos sem login.
- [ ] O site já manda `noindex` quando `VERCEL_ENV !== "production"`.

## Domínio

- [ ] Domínio canônico: `https://globalpass.app` (ou `www`) com redirect do outro.
- [ ] Certificado HTTPS automático no domínio de produção.
- [ ] `NEXT_PUBLIC_SITE_URL=https://globalpass.app` só em **Production** (sem barra no final).
- [ ] Preview não precisa da URL de produção; o `noindex` cobre SEO.

## WAF / abuso

- [ ] Plano Pro: **Attack Challenge Mode** / WAF se aparecer scrape ou bot.
- [ ] Quando existir formulário: Turnstile/honeypot no app + rate limit; não só WAF.

## Git e equipe

- [ ] Proteger `main` (PR obrigatório, sem push direto se o time for >1).
- [ ] Não gravar tokens no repositório (`.env*` já está no `.gitignore`).
- [ ] Convidar só quem precisa no projeto Vercel.

## HSTS preload (depois do go-live)

- [ ] Headers já incluem `includeSubDomains; preload`.
- [ ] Submeter em https://hstspreload.org quando o domínio de produção estiver estável em HTTPS.

## Analytics

- [ ] Se ligar Vercel Analytics, GA ou Pixel: carregar **somente** com consentimento `status === "all"` no banner.
