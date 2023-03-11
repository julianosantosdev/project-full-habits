import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledMain } from "./style";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/buttonStyles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Header } from "../../components/Header";

interface IUseForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    name: yup.string().required("Nome é um campo obrigatório"),
    email: yup
      .string()
      .email("E-mail deve ser um e-mail válido")
      .required("E-mail é um campo obrigatório"),
    password: yup.string().required("Senha é um campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      ),
  })
  .required();

export const RegisterPage = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUseForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IUseForm> = (data) => {
    registerUser(data);
  };

  return (
    <StyledMain>
      <Header showButtons={null} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="heading-2">Cadastre-se</h1>
        <div className="form-container">
          <label className="text-1" htmlFor="nome">
            Nome
          </label>
          <Input placeholder="Digite seu nome" type="text" id="nome" {...register("name")} />
          <p>{errors.name?.message}</p>

          <label className="text-1" htmlFor="email">
            E-mail
          </label>
          <Input placeholder="Digite seu email" type="text" id="email" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label className="text-1" htmlFor="password">
            Senha
          </label>
          <Input placeholder="Digite sua senha" type="password" id="password" {...register("password")} />
          <p>{errors.password?.message}</p>

          <label className="text-1" htmlFor="confirmPassword">
            Confirme a senha
          </label>
          <Input 
            placeholder="Confirme sua senha"
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
        <StyledButton type="submit">Criar conta</StyledButton>
        <StyledButton>
        <Link className="link-login" to="/">
          Login
        </Link>
        </StyledButton>
        </div>
      </form>
    </StyledMain>
  );
};
