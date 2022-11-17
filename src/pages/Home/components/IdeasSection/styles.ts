import styled from "styled-components";

export const IdeasSectionContainer = styled.section`
  display: flex;

  align-items: flex-start;

  margin-top: 8rem;

  gap: 4rem;

  background: ${(props) => props.theme.colors.white};

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const TextContainerForIdeas = styled.div`
  display: flex;
  width: 50%;

  flex-direction: column;
  gap: 1.5rem;

  > h1 {
    max-width: 24rem;
    font-weight: 700;
    font-size: 3rem;
  }

  > p {
    text-align: left;
    font-weight: 400;
    font-size: 1.08rem;
    min-width: 12.5rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 1rem;
    text-align: left;
    margin-right: auto;

    > h1 {
      width: 16rem;
      font-size: 2rem;
    }
  }
`;

export const ImageContainerForIdeas = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  margin-right: 15rem;

  width: 40%;
  height: 100%;

  > img {
    min-width: 30rem;
    width: 100%;
    height: 40%;
  }

  @media screen and (max-width: 1650px) {
    margin-right: 10rem;
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
