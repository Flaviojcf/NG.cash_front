import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Extract } from "./components/Extract/Extract";
import { Profile } from "./components/Profile/Profile";
import { Container } from "./styles";

export function MyAccount() {
  const { username, balance, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!isAuthenticated ? (
        useEffect(() => {
          navigate("/");
        })
      ) : (
        <Container>
          <Profile />
          <Extract />
        </Container>
      )}
    </>
  );
}
