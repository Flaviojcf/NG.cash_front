import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  height: 55rem;
  max-width: 22.5rem;
  padding-top: 6.5rem;

  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors["black-100"]};
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
    min-width: 4rem;
  }
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;

  > ul {
    display: flex;
    flex-direction: column;

    gap: 1.5rem;
    width: 100%;
    height: 18.75rem;


    margin-top: 1.5rem;
    overflow-y: auto;

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
