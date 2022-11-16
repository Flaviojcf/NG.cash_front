import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { List } from "phosphor-react";
import { Link, useLocation } from "react-router-dom";
import {
  Container,
  DropdownMenuContent,
  DropdownMenuTrigger,
  LinkContainer,
  LinkToPagesContainer,
} from "./styles";

export function Header() {
  const {pathname} = useLocation()

 

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
            <Link to="/" className={pathname === '/' ? "LinkBorderBottomColor" : ''}>HOME</Link>
          </li>

          <li>
            <Link to="/Login" className={pathname === '/Login' ? "LinkBorderBottomColor" : ''}>LOGIN</Link>
          </li>
          <li>
            <Link to="/Register" className={pathname === '/Register' ? "LinkBorderBottomColor" : ''}>REGISTER</Link>
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
                <Link to="/">HOME</Link>
              </li>

              <li>
                <Link to="/Login">LOGIN</Link>
              </li>
              <li>
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
