import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  gap: 2rem;
  padding: 2rem;

  align-items: center;
  justify-content: center;
  margin: 0 auto;

  background: #a8a29e;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.black};
  background-size: cover;

  padding: 0.5rem;
  border-radius: 28px;

  max-width: 25rem;
  min-height: 15rem;

  width: 100%;

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width:768px) {
    max-width: 15rem;
    min-height: 25rem;
  }
`;

export const NgContainer = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;

  color: ${(props) => props.theme.colors.white};

  > span {
    display: flex;
    width: 100%;

    align-items: center;
    justify-content: space-between;

    > img {
      width: 3.875rem;
      margin-right: 0.625rem;
    }
  }
`;

export const CardDetailsContainer = styled.div`
  display: flex;


  margin-top: auto;
`;

export const CardNumberContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;

  color: ${(props) => props.theme.colors.white};
`;

export const CardValidateContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;

  gap: 1rem;
  margin-left: auto;
  color: ${(props) => props.theme.colors.white};
`;
