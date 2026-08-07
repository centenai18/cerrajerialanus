import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Beneficios from "@/components/Beneficios";
import Servicios from "@/components/Servicios";
import Marcas from "@/components/Marcas";
import Resenas from "@/components/Resenas";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <Beneficios />
        <Servicios />
        <Marcas />
        <Resenas />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
