import styled from "styled-components";

export const ContainerProfile = styled.section`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  max-width: 22.5rem;
  padding-top: 6.5rem;

  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors["black-100"]};

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    max-height: 45rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 100%;

  padding-bottom: 1.25rem;
`;

export const AvatarContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  margin-top: 0.3125rem;

  > h3 {
    margin: 0;
    font-weight: 500;
  }
  > h3 {
    font-weight: 400;
    font-size: 0.975rem;
    margin-top: 0.5rem;
    color: ${(props) => props.theme.colors["purple-200"]};
  }
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 10%;

  width: 100%;

  & > div > strong {
    font-size: 1.3rem;
    margin-right: 10%;
  }
`;

export const ValueContainer = styled.div`
  display: flex;

  > strong {
    font-size: 1.3rem;
    margin-right: 10%;
  }

  > button {
    height: 2.5rem;
    min-width: 4rem;
    border: none;
    border-radius: 6px;

    background-color: ${(props) => props.theme.colors.green};

    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;

  > ul {
    display: flex;
    flex-direction: column;

    gap: 2rem;
    width: 100%;
    height: 18.75rem;

    margin-top: 1.5rem;

    > li {
      display: flex;
      width: 100%;
      border-left: 4px solid transparent;

      line-height: 3.75rem;
      padding-left: 1rem;
      margin-bottom: 1rem;

      &:hover {
        background: ${(props) => props.theme.colors.gray};
        border-left: 4px solid ${(props) => props.theme.colors.green};
        cursor: pointer;
      }
    }
  }

  .LiSelected {
    background: ${(props) => props.theme.colors.gray};
    border-left: 4px solid ${(props) => props.theme.colors["purple-200"]};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: auto;
  margin-bottom: 0.5rem;

  gap: 2rem;

  > img {
    max-width: 8rem;
  }
`;