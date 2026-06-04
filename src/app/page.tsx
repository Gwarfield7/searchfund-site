import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
import PersonalNote from "./components/landing/PersonalNote";
import FounderVideo from "./components/landing/FounderVideo";
import Expectations from "./components/landing/Expectations";
import WhatMatters from "./components/landing/WhatMatters";
import Founders from "./components/landing/Founders";
import FAQ from "./components/landing/Accordion";
import FinalCTA from "./components/landing/FinalCTA";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Founders />
        <FounderVideo />
        <PersonalNote />
        <Expectations />
        <WhatMatters />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
