import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  left: 0;
  bottom: 0;

  height: 35rem;
  width: 100%;
  background: ${(props) => props.theme.colors.black};

  padding-top: 8rem;

  @media screen and (max-width: 1024px) {
    padding: 0;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;

  gap: 2rem;

`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 2rem;

  color: ${(props) => props.theme.colors.white};

  > h1 {
    font-weight: 700;
    font-size: 3rem;
    max-width: 35rem;

    > strong {
        padding-left: 1rem;
    }
  }

  >p {
    font-weight: 300;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    > h1 {
        font-size: 2rem;
        >strong {
            padding: 0;
        }
    }
  }
`;

export const ImagesLink = styled.div`
  display: flex;
  gap: 1.5rem;

 > a >img {
    max-width: 10.5rem ;
 }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
