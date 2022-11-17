import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 0rem 8rem 18rem;

  @media screen and (max-width:1440px){
    padding: 10rem 0rem 8rem 6rem;
  }

  @media screen and (max-width:1024px){
    padding: 8rem 0;
  }
`;
