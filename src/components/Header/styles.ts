import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Container = styled.div`
  display: flex;
  position: fixed;

  width: 100%;
  height: 6.25rem;

  background: ${(props) => props.theme.colors.black};

  padding: 1.5rem;
`;

export const LinkContainer = styled.ul`
  display: flex;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  > li > a > img {
    width: 6.25rem;
    height: 4.25rem;
  }

  .Linkedin {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

export const LinkToPagesContainer = styled.div`
  display: flex;

  width: 20rem;

  justify-content: space-between;
  align-items: center;

  > li > a {
    color: ${(props) => props.theme.colors.white};
    transition: 0.2s;

    &:hover {
      opacity: 0.5;
    }
  }

  .LinkBorderBottomColor {
    border-bottom: 4px solid ${(props)=>props.theme.colors.green};
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

// Radix styles

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  cursor: pointer;

  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    margin-left: auto;

    padding-right: 0;
  }
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  display: flex;
  flex-direction: column;

  width: 10rem;
  height: 10rem;

  margin-right: 1.5rem;
  margin-top: 2.5rem;


  background: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 6px -1px 29px 0px rgba(0,0,0,0.75);

  > a:first-child {
    cursor: pointer;
    margin-left: auto;
    > img {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
    }
  }

  > ul {
    display: flex;
    position: absolute;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 1rem;

    > li > a{
      color: ${(props) => props.theme.colors.black};
      transition: 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
