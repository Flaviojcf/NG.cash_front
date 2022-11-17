import { Container, ImagesLink, Content, TextContainer } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <TextContainer>
        <h1><strong>Somos a Nova Geração</strong> transformando o Futuro.</h1>
        <p>O novo é constante, construa conosco.</p>
        </TextContainer>
        <ImagesLink>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.neaglebank"
          >
            <img src="googleplay.a58a8ba.png" />
          </a>
          <a target="_blank" href="https://apps.apple.com/app/id1480105326">
            <img src="appstore.a23ac7c.png" />
          </a>
        </ImagesLink>
      </Content>
    </Container>
  );
}
