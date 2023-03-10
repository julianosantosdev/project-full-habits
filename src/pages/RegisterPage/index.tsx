import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledMain } from "./style";
import { Link } from "react-router-dom";
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
          <input type="text" id="nome" {...register("name")} />
          <p className="text-error">{errors.name?.message}</p>

          <label className="text-1" htmlFor="email">
            E-mail
          </label>
          <input type="text" id="email" {...register("email")} />
          <p className="text-error">{errors.email?.message}</p>

          <label className="text-1" htmlFor="password">
            Senha
          </label>
          <input type="password" id="password" {...register("password")} />
          <p className="text-error">{errors.password?.message}</p>

          <label className="text-1" htmlFor="confirmPassword">
            Confirme a senha
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          <p className="text-error">{errors.confirmPassword?.message}</p>
        </div>
        <button type="submit">Criar conta</button>
        <Link className="link-login" to="/">
          Login
        </Link>
      </form>
    </StyledMain>
  );
};
