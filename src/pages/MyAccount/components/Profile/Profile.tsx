import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { NewTransaction } from "../NewTransaction/NewTransaction";
import {
  AvatarContainer,
  BalanceContainer,
  ContainerProfile,
  ImageContainer,
  MenuContainer,
  ProfileContainer,
  ValueContainer,
} from "./styles";

interface ProfileProps {
  handleClick: Function;
  selecteComponent: string;
}

export function Profile({ handleClick, selecteComponent }: ProfileProps) {
  const { username, balance } = useAuthContext();
  const [show, setShow] = useState<boolean>(true);
  const [selectedOption, setselectedOption] = useState("Extract");
  const [open, setOpen] = useState(false);

  function getName(name: string) {
    if (name === "Extract") {
      setselectedOption("Extract");
      handleClick(name);
    } else if (name === "New transaction") {
      setselectedOption("New transaction");
    } else if (name === "Cards") {
      setselectedOption("Cards");
      handleClick(name);
    }
  }

  const isExtract =
    open === false &&
    selectedOption === "New transaction" &&
    selecteComponent === "Extract";
  const isCards =
    open === false &&
    selectedOption === "New transaction" &&
    selecteComponent === "Cards";

  console.log(isCards);

  return (
    <ContainerProfile>
      <ProfileContainer>
        <AvatarContainer>
          <h2>{username}</h2>
          <h3>PREMIUM CLIENT</h3>
        </AvatarContainer>
      </ProfileContainer>
      <BalanceContainer>
        <p>Saldo</p>
        <ValueContainer>
          {show ? (
            <strong>
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(balance)}
            </strong>
          ) : (
            <strong>R$ ***,**</strong>
          )}

          <button onClick={() => setShow(!show)}>
            {show ? "Ocultar" : "Mostrar"}
          </button>
        </ValueContainer>
      </BalanceContainer>
      <MenuContainer>
        <ul>
          <li
            onClick={() => getName("Extract")}
            className={
              selectedOption === "Extract" || isExtract ? "LiSelected" : ""
            }
          >
            Extrato
          </li>
          <Dialog.Root open={open} onOpenChange={() => setOpen(!open)}>
            <Dialog.Trigger asChild>
              <li
                onClick={() => getName("New transaction")}
                className={open === true ? "LiSelected" : ""}
              >
                Nova Transação
              </li>
            </Dialog.Trigger>
            <NewTransaction />
          </Dialog.Root>
          <li
            onClick={() => getName("Cards")}
            className={
              selectedOption === "Cards" || isCards ? "LiSelected" : ""
            }
          >
            Cartões
          </li>
        </ul>
      </MenuContainer>
      <ImageContainer>
        <img src="trampolin-white.9465396.png" />
        <img src="stone.fe058db.png" />
      </ImageContainer>
    </ContainerProfile>
  );
}
