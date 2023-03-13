import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { StyledButton } from "../../../styles/ButtonStyles";
import { Input } from "../../Input";
import { modalFormSchema } from "../Template/formSchema";
import { IHabbitsForm } from "../Template/type";

const StudyHours = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IHabbitsForm>({ resolver: yupResolver(modalFormSchema) });

  const submitHabbit: SubmitHandler<IHabbitsForm> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHabbit)}>
        <div>
          <label htmlFor="studyDate">Data</label>
          <Input
            id="studyDate"
            type="text"
            placeholder="Data"
            {...register("date")}
          />
          <p>{errors.date?.message}</p>
        </div>

        <div>
          <label htmlFor="">Horas</label>
          <Input
            id="exerciseHours"
            type="text"
            placeholder="Quantas horas?"
            {...register("hours")}
          />
          <p>{errors.hours?.message}</p>
        </div>
        <StyledButton>Adicionar</StyledButton>
      </form>
    </div>
  );
};

export { StudyHours };

