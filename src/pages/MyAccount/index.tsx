import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Cards } from "./components/Cards/Cards";
import { Extract } from "./components/Extract/Extract";
import { Profile } from "./components/Profile/Profile";
import { Container } from "./styles";

export function MyAccount() {
 
  const [selecteComponent, setSelecteComponent] = useState("Extract");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  

  function handleSelectComponent(name: string) {
    setSelecteComponent(name);
  }

  return (
    <Container>
      <Profile
        handleClick={handleSelectComponent}
        selecteComponent={selecteComponent}
      />
      {selecteComponent === "Extract" ? <Extract /> : <Cards />}
    </Container>
  );
}
