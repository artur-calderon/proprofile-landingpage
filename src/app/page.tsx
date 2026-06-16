import FAQ from "@/components/landing/FAQ";
import FeaturesBento from "@/components/landing/FeaturesBento";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import ProblemSection from "@/components/landing/ProblemSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-hidden pt-14">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <FeaturesBento />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
