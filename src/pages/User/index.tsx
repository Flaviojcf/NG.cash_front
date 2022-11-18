import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AvatarContainer,
  BalanceContainer,
  Container,
  ImageContainer,
  MenuContainer,
  ProfileContainer,
  ValueContainer,
} from "./styles";

export function User() {
  const [show, setShow] = useState<boolean>(true);
  const [selectedOption, setselectedOption] = useState("");

  console.log(selectedOption);

  return (
    <Container>
      <ProfileContainer>
        <AvatarContainer>
          <h2>Flávio José</h2>
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
              }).format(100)}
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
            onClick={() => setselectedOption("inicio")}
            className={selectedOption === "inicio" ? "LiSelected" : ""}
          >
            Início
          </li>
          <li
            onClick={() => setselectedOption("Extrato")}
            className={selectedOption === "Extrato" ? "LiSelected" : ""}
          >
            Extrato
          </li>
          <li
            onClick={() => setselectedOption("Nova Transferência")}
            className={
              selectedOption === "Nova Transferência" ? "LiSelected" : ""
            }
          >
            Nova Transferência
          </li>
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
    </Container>
  );
}
