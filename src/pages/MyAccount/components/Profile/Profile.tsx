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

export function Profile() {
  const { username, balance } = useAuthContext();
  const [show, setShow] = useState<boolean>(true);
  const [selectedOption, setselectedOption] = useState("Extrato");
  console.log(selectedOption)
  const [open, setOpen] = useState(false);
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
            onClick={() => setselectedOption("Extrato")}
            className={selectedOption === "Extrato" || open === false && selectedOption === "Nova Transação"? "LiSelected" : ""}
          >
            Extrato
          </li>
          <Dialog.Root open={open} onOpenChange={()=>setOpen(!open)}>
            <Dialog.Trigger asChild>
              <li
                onClick={() => setselectedOption("Nova Transação")}
                className={
                    open ? "LiSelected" : ""
                }
              >
                Nova Transação
              </li>
            </Dialog.Trigger>
            <NewTransaction />
          </Dialog.Root>
          <li
            onClick={() => setselectedOption("Cartões")}
            className={selectedOption === "Cartões" ? "LiSelected" : ""}
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
