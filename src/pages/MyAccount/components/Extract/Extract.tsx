import { useEffect, useState } from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { api } from "../../../../service/api";
import {
  FilterContainer,
  InputContainer,
  NewTransactionContainer,
  RadioContainer,
} from "./styles";

export function Extract() {
  const {idUser} = useAuthContext()
  

  const [operation, setOperation] = useState("all");
  const [creditTransaction, setCreditTransaction] = useState([]);
  const [debitTransaction, setDebitTransaction] = useState([]);
  const [allTransaction, setAllTransaction] = useState([]);

 

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get("/getUserTransactions");
      const credit = response.data[0].TransactionsCredted;
      const debit = response.data[0].TransactionsDebited;
      setCreditTransaction(credit);
      setDebitTransaction(debit);
      setAllTransaction(credit.concat(debit));
    }
    getTransactions();
  },[]);

  
  return (
    <NewTransactionContainer>
      <FilterContainer>
        <InputContainer>
          <h1>Filtro:</h1>
        </InputContainer>
        <RadioContainer>
          <label htmlFor="cash-in">Cash-in</label>
          <input
            type="radio"
            id="cash-in"
            name="option"
            onClick={() => setOperation("TransactionsCredted")}
          />
          <label htmlFor="cash-out">Cash-out</label>
          <input
            type="radio"
            id="cash-out"
            name="option"
            onClick={() => setOperation("TransactionsDebited")}
          />
          <label htmlFor="all">All</label>
          <input
            type="radio"
            id="all"
            defaultChecked
            name="option"
            onClick={() => setOperation("all")}
          />
        </RadioContainer>
      </FilterContainer>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Valor</th>
            <th>Operação</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {operation === "all"
            ? allTransaction.map((response: any) => (
                <tr key={response.id}>
                  <td>{response.id}</td>
                  <td>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(response.value)}
                  </td>
                  <td>{response.debitedAccountId === idUser ? 'out' : 'in'}</td>
                  <td>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(response.createdAt)
                    )}
                  </td>
                </tr>
              ))
            : operation === "TransactionsCredted"
            ? creditTransaction.map((response: any) => (
                <tr key={response.id}>
                  <td>{response.id}</td>
                  <td>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(response.value)}
                  </td>
                  <td>in</td>
                  <td>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(response.createdAt)
                    )}
                  </td>
                </tr>
              ))
            : debitTransaction.map((response: any) => (
                <tr key={response.id}>
                  <td>{response.id}</td>
                  <td>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(response.value)}
                  </td>
                  <td>out</td>
                  <td>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(response.createdAt)
                    )}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </NewTransactionContainer>
  );
}
