import styled from "styled-components";

export const BenefitsSectionContainer = styled.section`
  display: flex;

  align-items: flex-start;

  margin-top: 8rem;

  gap: 4rem;

  background: ${(props) => props.theme.colors.white};

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageContainerForBenefits = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  margin-right: auto;

  width: 40%;
  height: 100%;

  > img {
    min-width: 20rem;
    width: 100%;
    height: 40%;
  }

  @media screen and (max-width: 1024px) {
    margin: 0;
    width: 100%;
    > img {
      min-width: 20rem;
      padding: 0.5rem;
      width: 40%;
    }
  }
`;

export const TextContainerForBenefits = styled.div`
  display: flex;
  width: 50%;

  flex-direction: column;

  padding-top: 2rem;
  gap: 1.5rem;

  margin-left: 2rem;

  > h1 {
    font-weight: 700;
    font-size: 3rem;
  }

  > h2 {
    text-align: left;
    font-weight: 400;
    font-size: 1.08rem;
    min-width: 12.5rem;
  }

  > ul {
    display: flex;
    flex-direction: column;
    text-align: right;
    gap: 1.5rem;



    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      min-width: 12.5rem;

      > img {
        max-width: 2rem;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 1rem;
    text-align: left;
    margin-right: auto;

    > h1 {
      font-size: 2rem;
    }
  }
`;
