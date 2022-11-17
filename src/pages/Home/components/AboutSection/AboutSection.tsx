import {
  AboutSectionContainer,
  DescriptionContainerForAboutSection,
  ImageContainerForDescription,
  TextContainerForDescription,
} from "./styles";

export function AboutSection() {
  return (
    <AboutSectionContainer>
      <DescriptionContainerForAboutSection>
        <TextContainerForDescription>
          <h1>SOBRE</h1>
          <p>Somos a carteira digital da Nova Geração.</p>
          <p>Viemos te ajudar a construir a sua independência financeira</p>
          <p>
            Vivemos o novo, transformando o futuro. Afinal, depois do ponto, vem
            um novo começo.
          </p>
        </TextContainerForDescription>
        <ImageContainerForDescription>
          {" "}
          <img src="ngcash.5b8db70.png" alt="" />
        </ImageContainerForDescription>
      </DescriptionContainerForAboutSection>
    </AboutSectionContainer>
  );
}
