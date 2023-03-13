import * as yup from "yup";

export const modalFormSchema = yup
  .object({
    date: yup.string().required("A data é obrigatória"),
    hours: yup.string().required("Quantidade de horas é obrigatória"),
  })
  .required();

