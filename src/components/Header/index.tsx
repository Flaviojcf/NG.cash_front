import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ArrowRight, List } from "phosphor-react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import {
  Container,
  DropdownMenuContent,
  DropdownMenuTrigger,
  LinkContainer,
  LinkToPagesContainer,
} from "./styles";

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isAuthenticated, onLogout } = useAuthContext();

  async function handleLogout() {
    onLogout();
    navigate("/Home");
    location.reload();
  }

  return (
    <Container>
      <LinkContainer>
        <li>
          <Link to="/">
            <img src="https://careers.ng.cash/static/media/logo_ng_cash.38841a96a95927fdf7bf.gif" />
          </Link>
        </li>

        <LinkToPagesContainer>
          <li>
            <Link
              to="/Home"
              className={pathname === "/Home" ? "LinkBorderBottomColor" : ""}
            >
              HOME
            </Link>
          </li>

          <li className={isAuthenticated ? "LiDisplayNone" : ""}>
            <Link
              to="/"
              className={pathname === "/" ? "LinkBorderBottomColor" : ""}
            >
              LOGIN
            </Link>
          </li>
          <li className={isAuthenticated ? "LiDisplayNone" : ""}>
            <Link
              to="/Register"
              className={
                pathname === "/Register" ? "LinkBorderBottomColor" : ""
              }
            >
              REGISTER
            </Link>
          </li>
          <li className={!isAuthenticated ? "LiDisplayNone" : ""}>
            <Link
              to="/MyAccount"
              className={
                pathname === "/MyAccount" ? "LinkBorderBottomColor" : ""
              }
            >
              MY ACCOUNT
            </Link>
          </li>
          <li
            onClick={handleLogout}
            className={!isAuthenticated ? "LiDisplayNone" : ""}
          >
            LOGOUT
          </li>
        </LinkToPagesContainer>

        <DropdownMenu.Root>
          <DropdownMenuTrigger asChild>
            <List size={32} color="white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/fl%C3%A1vio-jcosta/"
            >
              <img
                src="/logo_linkedin.c304a4148cde039a54532585f4d47b48.svg"
                className="LinkedinMediaQuery"
              />
            </a>

            <ul>
              <li>
                <ArrowRight
                  size={18}
                  display={pathname === "/Home" ? "flex" : "none"}
                />
                <Link to="/Home">HOME</Link>
              </li>
              <li className={!isAuthenticated ? "LiDisplayNone" : ""}>
                <ArrowRight
                  size={18}
                  display={pathname === "/MyAccount" ? "flex" : "none"}
                />
                <Link to="/MyAccount">MY ACCOUNT</Link>
              </li>
              <li
                onClick={handleLogout}
                className={!isAuthenticated ? "LiDisplayNone" : ""}
              >
                LOGOUT
              </li>

              <li className={isAuthenticated ? "LiDisplayNone" : ""}>
                <ArrowRight
                  size={18}
                  display={pathname === "/" ? "flex" : "none"}
                />
                <Link to="/">LOGIN</Link>
              </li>

              <li className={isAuthenticated ? "LiDisplayNone" : ""}>
                <ArrowRight
                  size={18}
                  display={pathname === "/Register" ? "flex" : "none"}
                />
                <Link to="/Register">REGISTER</Link>
              </li>
            </ul>
          </DropdownMenuContent>
        </DropdownMenu.Root>

        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/fl%C3%A1vio-jcosta/"
          >
            <img
              src="/logo_linkedin.c304a4148cde039a54532585f4d47b48.svg"
              className="Linkedin"
            />
          </a>
        </li>
      </LinkContainer>
    </Container>
  );
}
