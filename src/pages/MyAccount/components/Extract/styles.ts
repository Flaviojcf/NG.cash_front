import styled from "styled-components";

export const NewTransactionContainer = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.gray};
  margin: 6.5rem 0.25rem 0.25rem 0.25rem;

  overflow: hidden;

  > table {
    display: flex;
    height: 100%;

    border: 2px solid ${(props) => props.theme.colors.black};

    flex-direction: column;
    align-items: center;
    width: 100%;

    border-spacing: 0 0.5rem;

    > thead {
      width: 100%;
      background: ${(props) => props.theme.colors.green};

      > tr {
        display: flex;
        width: 100%;
        justify-content: space-between;

        > th {
          font-weight: 700;
          min-width: 2.6875rem;
        }
      }
    }

    > tbody {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
      width: 100%;
      margin-top: 0.5rem;
      > tr {
        display: flex;
        width: 100%;
        border: 1px solid ${(props) => props.theme.colors.black};
        justify-content: space-between;

        > td {
          min-width: 2.6875rem;
        }
      }
    }

    th {
      font-weight: 400;
      padding: 1rem 1rem;
    }

    td {
      padding: 1rem 1rem;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 1rem 0rem;
  }
`;
