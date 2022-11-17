import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  ImageContainer,
  ImageFormContainer,
  InputAndButtonContainer,
  InputContainer,
  RegisterContainer,
  RegisterFormContainer,
  TitleRegisterFormContainer,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect } from "react";

const FormValidationSchema = zod
  .object({
    username: zod.string().min(3, "É necessário no mínimo 3 caracteres"),
    password: zod
      .string()
      .min(8, "É necessário no mínimo 8 caracteres")
      .regex(
        new RegExp(".*[A-Z].*"),
        "É necessário no mínimo uma letra maiúscula"
      )
      .regex(new RegExp(".*[0-9].*"), "É necessário no mínimo  um número"),
    confirmPassword: zod.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas são diferentes.",
    path: ["confirmPassword"],
  });

type NewUserFormData = zod.infer<typeof FormValidationSchema>;

export function Register() {
  const { isAuthenticated } = useAuthContext();

  const navigate = useNavigate();

  const newUserDataForm = useForm<NewUserFormData>({
    resolver: zodResolver(FormValidationSchema),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = newUserDataForm;

  async function handleCreateNewUser(data: NewUserFormData) {
    try {
      await api.post("/createUserAccount", {
        headers: {
          "Content-Type": "application/json",
        },
        username: data.username,
        password: data.password,
      });
      toast.success("Conta cadastrada!", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
      reset();
    } catch (err: any) {
      toast.error("Username já cadastrado!", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!isAuthenticated ? (
        <Container>
          <ToastContainer />
          <ImageContainer>
            <img
              src="cover_desktop.371772f30ede5f9afee74ba78de1a623.svg"
              alt=""
            />
          </ImageContainer>

          <RegisterContainer>
            <RegisterFormContainer onSubmit={handleSubmit(handleCreateNewUser)}>
              <TitleRegisterFormContainer>
                <p>Cadastre-se agora!</p>
              </TitleRegisterFormContainer>

              <InputAndButtonContainer>
                <InputContainer>
                  <label htmlFor="username">{errors.username?.message}</label>
                  <input
                    type="text"
                    placeholder="Digite seu username"
                    {...register("username")}
                    className={
                      errors.username?.message !== undefined ? "Red" : ""
                    }
                  />
                </InputContainer>

                <InputContainer>
                  <label htmlFor="password">{errors.password?.message}</label>
                  <input
                    type="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                    className={
                      errors.password?.message !== undefined ? "Red" : ""
                    }
                  />
                </InputContainer>

                <InputContainer>
                  <label htmlFor="confirmPassword">
                    {errors.confirmPassword?.message}
                  </label>
                  <input
                    type="password"
                    placeholder="Confirme sua senha"
                    {...register("confirmPassword")}
                    className={
                      errors.confirmPassword?.message !== undefined ? "Red" : ""
                    }
                  />
                </InputContainer>

                <button type="submit">
                  <strong>CADASTRAR</strong>
                </button>
              </InputAndButtonContainer>

              <p>
                Já possui conta?{" "}
                <Link to="/">
                  <strong>Faça login!</strong>
                </Link>
              </p>

              <ImageFormContainer>
                <img src="footer.png" alt="" />
              </ImageFormContainer>
            </RegisterFormContainer>
          </RegisterContainer>
        </Container>
      ) : (
        navigate("/Home")
      )}
    </>
  );
}
