import { useEffect } from "react";

import { AboutSection } from "./components/AboutSection/AboutSection";
import { BenefitsSection } from "./components/BenefitsSection/BenefitsSection";
import { IdeasSection } from "./components/IdeasSection/IdeasSection";
import { NewGenSection } from "./components/NewGenSection/NewGenSection";
import { Container, Content } from "./styles";

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <NewGenSection />
      <Content>
        <AboutSection />
        <BenefitsSection />
        <IdeasSection />
      </Content>
    </Container>
  );
}
