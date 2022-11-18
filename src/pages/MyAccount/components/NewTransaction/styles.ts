import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.75);
`;

export const ModalContent = styled(Dialog.Content)`
  display: flex;

  align-items: center;
  text-align: center;
  justify-content: center;

  flex-direction: column;
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #202024;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid #00875f;

  width: 30rem;
  height: 30rem;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    width: 20rem;
    height: 25rem;
  }

  @media screen and (max-width: 375px) {
    width: 15rem;
  }
`;

export const ModalTitle = styled(Dialog.Title)`
  font-weight: 700;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  > form {
    display: flex;
    width: 16rem;

    align-items: center;
    justify-content: center;

    gap: 2rem;

    text-align: center;
    flex-direction: column;

    @media screen and (max-width: 375px) {
    width: 10rem;
  }

    > input {
      border-radius: 6px;
      border: 0;
      width: 100%;
      background: #121214;
      color: #c4c4cc;
      height: 3.5rem;
      padding-left: 1rem;

      &::placeholder {
        color: #c4c4cc;
      }

      &:focus {
        border: 4px solid #00875f;
        outline: none;
      }
    }

    > button {
      height: 3.625rem;
      min-width: 100%;

      border: 0;
      background: #00875f;
      font-weight: bold;
      padding: 0 1.25rem;
      margin-top: 1.5rem;
      border-radius: 6px;
      cursor: pointer;
      color: ${(props) => props.theme.colors.white};

      transition: all 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
