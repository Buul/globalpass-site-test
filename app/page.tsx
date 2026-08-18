import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Architecture from "./sections/architecture/architecture";
import Hero from "./sections/hero/hero";
import Impact from "./sections/impact/impact";
import Integrations from "./sections/integrations/integrations";
import Journey from "./sections/journey/journey";
import Platform from "./sections/platform/platform";
import UseCases from "./sections/use-cases/use-cases";
import Wallet from "./sections/wallet/wallet";
import Why from "./sections/why/why";
import { content } from "./content";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main id="conteudo" aria-label={content.a11y.main}>
        <Hero />
        <Journey />
        <Platform />
        <Integrations />
        <UseCases />
        <Wallet />
        <Why />
        <Impact />
        <Architecture />
      </main>
      <Footer />
    </div>
  );
}
