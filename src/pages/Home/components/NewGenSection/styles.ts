import styled from "styled-components";

export const NewGenSectionContainer = styled.section`
  display: flex;

  align-items: center;

  padding: 8rem 4rem;

  background: ${(props) => props.theme.colors.black};
`;

export const TextContainerForNewGenSection = styled.div`
  display: flex;
  flex-direction: column;

  text-align: start;

  gap: 1.5rem;

  color: ${(props) => props.theme.colors.white};

  > h1 {
    font-weight: 700;
    font-size: 2.75rem;
  }

  > h2 {
    font-weight: 300;
    opacity: 0.9;
    font-size: 2.25rem;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const ImagesLinkForNewGenSection = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageContainerForNewGenSection = styled.div`
  display: flex;
  margin-left: auto;

  width: 50%;

  > img {
    width: 75%;
    margin-left: auto;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
