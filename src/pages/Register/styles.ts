import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  height: 100vh;

  padding-top: 2rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }


`;

export const ImageContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  
  align-items: center;
  justify-content: center;
  

  > img {
    width: 90%;
  }

  background: ${(props) => props.theme.colors["black-100"]};

  @media screen and (max-width: 1024px) {
    margin-top: 4rem;
    width: 100vw;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 50vw;
  height: 100vh;

  background: ${(props) => props.theme.colors["purple-200"]};

  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;

export const RegisterFormContainer = styled.form`
  display: flex;

  text-align: center;
  overflow: hidden;

  width: 25rem;
  height: 38rem;


  flex-direction: column;

  border: 3px solid ${(props) => props.theme.colors.black};
  box-shadow: -2px 6px 56px 10px rgba(0, 0, 0, 0.75);

  > p {
    margin-top: 1.5rem;
    color: ${(props) => props.theme.colors.black};
    font-weight: 500;


    @media screen and (max-width: 425px) {
      margin-bottom: 0.75rem;
  }


    > a {
      color: ${(props) => props.theme.colors.black};
      cursor: pointer;
      text-decoration: underline;

    }
  }

  
  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 425px) {
    width: 20rem;
    height: 30rem;
  }

  @media screen and (max-width: 375px) {
    width: 18rem;
    height: 30rem;
  }

`;

export const TitleRegisterFormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  > p {
    color: ${(props) => props.theme.colors.white};
    text-decoration: underline;
    font-size: 1.2rem;
  }
`;

export const InputAndButtonContainer = styled.div`
  display: flex;

  gap: 2rem;
  padding: 0rem 2rem;

  flex-direction: column;

  > button {
    height: 2.5rem;

    border: none;
    border-radius: 6px;

    background-color: ${(props) => props.theme.colors.green};

    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    color: red;
    margin-left: auto;
  }

  > input {
    border-radius: 4px;
    border: none;
    height: 2.5rem;

    padding: 0rem 1rem;

    &:focus {
      border: 4px solid ${(props) => props.theme.colors.green};
      outline: none;
    }
  }

  .Red {
    border: 1px solid red;
    &:focus {
      border: 2px solid red;
      outline: none;
    }
  }
`;

export const ImageFormContainer = styled.div`
  display: flex;

  margin-top: auto;

  > img {
    width: 100%;
    height: 10rem;

    @media screen and (max-width: 425px) {
      margin-bottom: auto;
      height: 6rem;
  }
  }

`;
