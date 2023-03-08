import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledMain } from "./style";
import { useUserContext } from "../../hooks/useUserContext";

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
  const { registerUser } = useUserContext();

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="">Cadastre-se</h1>
        <div className="form-container">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" {...register("name")} />
          <p>{errors.name?.message}</p>

          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />
          <p>{errors.password?.message}</p>

          <label htmlFor="confirmPassword">Confirme a senha</label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <button type="submit">Criar conta</button>
      </form>
    </StyledMain>
  );
};
