import Architecture from "./components/architecture";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Impact from "./components/impact";
import Integrations from "./components/integrations";
import Journey from "./components/journey";
import Platform from "./components/platform";
import UseCases from "./components/use-cases";
import Wallet from "./components/wallet";
import Why from "./components/why";
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
