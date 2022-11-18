import { NewTransactionContainer } from "./styles";

export function Extract(){
    return(
        <NewTransactionContainer>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Valor</th>
              <th>Operação</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Flavio</td>
              <td>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(50)}
              </td>
              <td>Deposit</td>
              <td>18/11/22</td>
            </tr>
          </tbody>
        </table>
      </NewTransactionContainer>
    )
}