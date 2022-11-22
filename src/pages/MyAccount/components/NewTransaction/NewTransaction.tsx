import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { api } from "../../../../service/api";
import {
  MainContainer,
  ModalContent,
  ModalOverlay,
  ModalTitle,
} from "./styles";

const FormValidationSchema = zod.object({
  username: zod.string(),
  value: zod.string(),
});

type NewTransactionFormDate = zod.infer<typeof FormValidationSchema>;

export function NewTransaction() {
  const newTransactionForm = useForm<NewTransactionFormDate>({
    resolver: zodResolver(FormValidationSchema),
  });

  async function CreatTransaction(data: NewTransactionFormDate) {
    if (data.username === "" || data.value === "") {
      toast.error("É necessário preencher os campos!", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
      return;
    }
    try {
      await api.post("/createTransaction", {
        headers: {
          "Content-Type": "application/json",
        },
        creditedAccountUser: data.username.toUpperCase(),
        value: Number(data.value),
      });
      toast.success("Transação concluída!", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
      reset();
      setTimeout(() => {
        location.reload();
      }, 1100);
    } catch (err) {
      toast.error("Dinheiro insuficiente", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }
  }

  const { handleSubmit, reset, register } = newTransactionForm;

  return (
    <Dialog.Portal>
      <ToastContainer />
      <ModalOverlay>
        <ModalContent>
          <ModalTitle>Nova transação</ModalTitle>
          <MainContainer>
            <form onSubmit={handleSubmit(CreatTransaction)}>
              <input
                type="text"
                placeholder="Nome do usuário"
                {...register("username")}
              />
              <input
                type="number"
                placeholder="Valor de transferência"
                {...register("value")}
              />
              <button type="submit">Enviar</button>
            </form>
          </MainContainer>
        </ModalContent>
      </ModalOverlay>
    </Dialog.Portal>
  );
}
