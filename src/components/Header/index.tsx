import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ArrowRight, List } from "phosphor-react";
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
            <Link to="/Home" className={pathname === '/Home' ? "LinkBorderBottomColor" : ''}>HOME</Link>
          </li>

          <li>
            <Link to="/" className={pathname === '/' ? "LinkBorderBottomColor" : ''}>LOGIN</Link>
          </li>
          <li>
            <Link to="/Register" className={pathname === '/Register' ? "LinkBorderBottomColor" : ''}>REGISTER</Link>
          </li>
          <li>
            <Link to="/User" className={pathname === '/User' ? "LinkBorderBottomColor" : ''}>USER</Link>
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
                <ArrowRight size={18} display={pathname === '/Home' ? 'flex' : 'none'}/>
                <Link to="/Home">HOME</Link>
              </li>

              <li>
                <ArrowRight size={18} display={pathname === '/' ? 'flex' : 'none'}/>
                <Link to="/">LOGIN</Link>
              </li>
              <li>
                <ArrowRight size={18} display={pathname === '/Register' ? 'flex' : 'none'}/>
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
