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
  LoginContainer,
  LoginFormContainer,
  TitleRegisterFormContainer,
} from "./styles";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const FormValidationSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

type NewUserFormData = zod.infer<typeof FormValidationSchema>;

export function Login() {
  const { onSubmitLogin } = useAuthContext();

  const newUserDataForm = useForm<NewUserFormData>({
    resolver: zodResolver(FormValidationSchema),
  });

  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
  } = newUserDataForm;

  async function handleLogin(data: NewUserFormData) {
    if(data.password === '' || data.username === '') {
        return
    }
    try {
      await onSubmitLogin(data.username, data.password);

    } catch (err: any) {
      toast.error("Usuário ou senha incorretos.", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }
  }

  const isButtonDisabled = watch('password') === undefined || watch('username') === undefined 

  console.log(isButtonDisabled)


  return (
    <Container>
      <ToastContainer />
      <ImageContainer>
        <img src="ngcard.ced5acb.svg" />
      </ImageContainer>

      <LoginContainer>
        <LoginFormContainer onSubmit={handleSubmit(handleLogin)}>
          <TitleRegisterFormContainer>
            <p>LOGIN</p>
          </TitleRegisterFormContainer>

          <InputAndButtonContainer>
            <InputContainer>
              <label htmlFor="username">{errors.username?.message}</label>
              <input
                type="text"
                placeholder="Digite seu username"
                {...register("username")}
                className={errors.username?.message !== undefined ? "Red" : ""}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="password">{errors.password?.message}</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
                className={errors.password?.message !== undefined ? "Red" : ""}
              />
            </InputContainer>

            <button type="submit" disabled={isButtonDisabled}>
              <strong>ENTRAR</strong>
            </button>
          </InputAndButtonContainer>

          <p>
            Não possui conta?{" "}
            <Link to="/Register">
              <strong>Cadastre-se!</strong>
            </Link>
          </p>

          <ImageFormContainer>
            <img src="second_cover_desktop.3673a8137e5757dc195852d552b438a7.svg" alt="" />
          </ImageFormContainer>
        </LoginFormContainer>
      </LoginContainer>
    </Container>
  );
}
