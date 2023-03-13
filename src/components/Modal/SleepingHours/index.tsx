import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
import { api } from "../../../services/api";
import { StyledButton } from "../../../styles/ButtonStyles";
import { Input } from "../../Input";
import { modalFormSchema } from "../Template/formSchema";
import { IHabbitsForm } from "../Template/type";

const SleepingHours = () => {
  const { sleep, setSleep } = useContext(UserContext);
  const { setShowModal } = useContext(ModalContext);

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
      hours: parseFloat(hours),
      userId: userId,
    };

    try {
      const response = await api.post(`/sleepTimes`, formDataToSubmit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Hábito registrado!");
      setSleep([...sleep, response.data]);
      setShowModal(null);
    } catch (error) {
      toast.error("Erro ao registrar hábito");
      console.log(error);
    }
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

export { SleepingHours };

