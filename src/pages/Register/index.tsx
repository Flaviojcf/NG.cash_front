import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Link } from "react-router-dom";

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
  const newUserDataForm = useForm<NewUserFormData>({
    resolver: zodResolver(FormValidationSchema),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = newUserDataForm;

  function handleCreateNewUser(data: NewUserFormData) {
    console.log(data);
    reset();
  }

  return (
    <Container>
      <ImageContainer>
        <img src="cover_desktop.371772f30ede5f9afee74ba78de1a623.svg" alt="" />
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
            <Link to="/Login">
              <strong>Faça login!</strong>
            </Link>
          </p>

          <ImageFormContainer>
            <img src="footer.png" alt="" />
          </ImageFormContainer>
        </RegisterFormContainer>
      </RegisterContainer>
    </Container>
  );
}
