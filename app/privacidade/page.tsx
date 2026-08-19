import type { Metadata } from "next";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { content } from "../content";
import { container } from "../lib/ui";

export const metadata: Metadata = {
  title: content.privacy.title,
  description: content.privacy.intro,
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main
        id="conteudo"
        className="py-[90px]"
        aria-labelledby="privacidade-title"
      >
        <article className={container}>
          <h1
            id="privacidade-title"
            className="max-w-[700px] text-[clamp(2rem,3vw,3rem)] leading-[1.08] tracking-[-0.06em]"
          >
            {content.privacy.title}
          </h1>
          <p className="mt-4 text-muted">{content.privacy.updated}</p>
          <p className="mt-6 max-w-[70ch] text-[1.05rem] leading-[1.7] text-foreground">
            {content.privacy.intro}
          </p>
          {content.privacy.sections.map((section) => (
            <section key={section.title} className="mt-10 max-w-[70ch]">
              <h2 className="text-xl font-bold tracking-tight text-primary">
                {section.title}
              </h2>
              <p className="mt-3 leading-[1.7] text-muted">{section.body}</p>
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
}
