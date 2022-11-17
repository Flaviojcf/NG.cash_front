import styled from "styled-components";

export const AboutSectionContainer = styled.section`
  display: flex;

  flex-direction: column;
  align-items: center;
  
 
  background: ${(props) => props.theme.colors.white};
`;

export const DescriptionContainerForAboutSection = styled.div`
  display: flex;
  justify-content: center;

  height: 100%;
  width: 100%;

  
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }

`;

export const ImageContainerForDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10rem;

  width: 50%;
  height: 100%;

  > img {
    min-width: 25rem;
    width: 80%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    > img {
      min-width: 20rem;
      width: 40%;
    }
  }
`;

export const TextContainerForDescription = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-right: auto;


  text-align: left;

  padding-top: 2rem;

  > h1 {
    font-weight: 700;
    font-size: 3rem;
  }

  > p:nth-child(2) {
    font-weight: 400;
  }

  > p {
    margin-top: 2rem;
    font-weight: 300;
    font-size: 1.08rem;
  }

  > p:nth-child(4) {
    width:32rem;
  }

  @media screen and (max-width: 1024px) {
    margin-right: auto;
    padding-left: 1rem;

    > p:nth-child(4) {
    width: 100%;
  }

    > h1 {
      font-size: 2rem;
    }

    > p {
      width: 100%;
    }
  }
`;
