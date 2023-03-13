import { Input } from "../../Input";
import { StyledButton } from "../../../styles/ButtonStyles";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IHabbitsForm } from "../Template/type";
import { modalFormSchema } from "../Template/formSchema";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

const ExerciseHours = () => {
  const { training, setTraining } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IHabbitsForm>({ resolver: yupResolver(modalFormSchema) });

  const userId = Number(localStorage.getItem("@ID-HABBITS"));
  const token = localStorage.getItem("@TOKEN-HABBITS");

  const submitHabbit: SubmitHandler<IHabbitsForm> = async (formData) => {
    const { date, hours } = formData;

    const formDataToSubmit = {
      date: date,
      hours: parseInt(hours),
      userId: userId,
    };
    console.log(formDataToSubmit);

    try {
      const response = await api.post(`/trainingTimes`, formDataToSubmit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Hábito registrado!");
      console.log(response.data);
      // setTraining()
    } catch (error) {
      toast.error("Erro ao registrar hábito");
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHabbit)}>
        <div>
          <label htmlFor="exerciseDate">Data</label>
          <Input
            id="exerciseDate"
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

export { ExerciseHours };

