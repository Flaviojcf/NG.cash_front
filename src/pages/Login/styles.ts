import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  height: 100%;

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
  padding-bottom: 0.5rem;

  > img {
    width: 80%;
  }

  background: ${(props) => props.theme.colors.gray};

  @media screen and (max-width: 1024px) {
    margin-top: 4rem;
    height: 100%;
    width: 100%;
  }
`;

export const LoginContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 50vw;
  height: 100vh;

  background: ${(props) => props.theme.colors["purple-200"]};

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const LoginFormContainer = styled.form`
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
  text-align: center;
  justify-content: center;
  padding: 2rem;

  > p {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.2rem;
  }
`;

export const InputAndButtonContainer = styled.div`
  display: flex;

  gap: 2rem;
  padding: 2rem 2rem;

  flex-direction: column;

  > button {
    height: 2.5rem;

    border: none;
    border-radius: 6px;

    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.black};

    transition: all 0.2s;

    &:disabled {
      cursor: not-allowed;
    }

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
  .IconActive {
    margin-left: auto;
    margin-right: 0.2rem;
    cursor: pointer;
    margin-top: -2.3rem;
  }
  .IconDisabled {
    display: none;
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
  align-items: center;
  justify-content: center;

  background: ${(props)=>props.theme.colors.green};

  margin-top: auto;

  > img {
    width: 90%;
    height: 10rem;
   

    @media screen and (max-width: 425px) {
      margin-bottom: auto;
      height: 4rem;
    }
  }
`;
