import * as Dialog from "@radix-ui/react-dialog";
import {
  MainContainer,
  ModalContent,
  ModalOverlay,
  ModalTitle,
} from "./styles";

export function NewTransaction() {
  return (
    <Dialog.Portal>
      <ModalOverlay>
        <ModalContent>
          <ModalTitle>Nova transação</ModalTitle>
          <MainContainer>
            <form>
              <input type="text" placeholder="Usuário que irá receber" />
              <input type="number" placeholder="Valor de transferência" />
              <button>Enviar</button>
            </form>
          </MainContainer>
        </ModalContent>
      </ModalOverlay>
    </Dialog.Portal>
  );
}
