import {
  BenefitsSectionContainer,
  ImageContainerForBenefits,
  TextContainerForBenefits,
} from "./styles";

export function BenefitsSection() {
  return (
    <BenefitsSectionContainer>
      <ImageContainerForBenefits>
        <img src="ngcard.ced5acb.svg" />
      </ImageContainerForBenefits>
      <TextContainerForBenefits>
        <h1>NG.CASH</h1>
        <h2>Um pacote de benefícios.</h2>
        <ul>
          <li><img src="star.svg"/> Conta grátis</li>
          <li><img src="star.svg"/> Cartão físico grátis</li>
          <li><img src="star.svg"/> Cartão virtual grátis</li>
          <li><img src="star.svg"/> Mesada programada</li>
        </ul>
      </TextContainerForBenefits>
    </BenefitsSectionContainer>
  );
}
