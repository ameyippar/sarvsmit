import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Problem } from "@/components/problem";
import { Services } from "@/components/services";
import { Categories } from "@/components/categories";
import { Approach } from "@/components/approach";
import { InnovationProcess } from "@/components/innovation";
import { InnovationFramework } from "@/components/framework";
import { Differentiation } from "@/components/differentiation";
import { Capabilities } from "@/components/capabilities";
import { CaseStudies } from "@/components/casestudies";
import { WhoWeWorkWith } from "@/components/clients";
import { SixGates } from "@/components/gates";
import { Vision } from "@/components/vision";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Problem />
      <Services />
      <Categories />
      <Approach />
      <InnovationProcess />
      <InnovationFramework />
      <Differentiation />
      <Capabilities />
      <CaseStudies />
      <WhoWeWorkWith />
      <SixGates />
      <Vision />
      <Contact />
    </main>
  );
}






