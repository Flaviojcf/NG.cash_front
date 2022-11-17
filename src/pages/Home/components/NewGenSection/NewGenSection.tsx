import {
  TextContainerForNewGenSection,
  NewGenSectionContainer,
  ImagesLinkForNewGenSection,
  ImageContainerForNewGenSection,
} from "./styles";

export function NewGenSection() {
  return (
    <NewGenSectionContainer>
      <TextContainerForNewGenSection>
        <h1>A CARTEIRA DA NOVA GERAÇÃO.</h1>
        <h2>É para todas as idades!</h2>
        <ImagesLinkForNewGenSection>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.neaglebank"
          >
            <img src="googleplay.a58a8ba.png" />
          </a>
          <a target="_blank" href="https://apps.apple.com/app/id1480105326">
            <img src="appstore.a23ac7c.png" />
          </a>
        </ImagesLinkForNewGenSection>
      </TextContainerForNewGenSection>
      <ImageContainerForNewGenSection>
        <img src="home-ngcash-app.49e176e-removebg-preview.png" />
      </ImageContainerForNewGenSection>
    </NewGenSectionContainer>
  );
}
