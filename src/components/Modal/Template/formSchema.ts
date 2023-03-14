import * as yup from "yup";

export const modalFormSchema = yup
  .object({
    date: yup
      .string()
      .required("A data é obrigatória")
      .matches(
        /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/,
        "O formato deve ser DD/MM/AAAA"
      ),
    hours: yup
      .number()
      .required("Quantidade de horas é obrigatória")
      .test(
        "Is positive?",
        "Valor deve ser entre 0 e 24",
        (value) => value >= 0 && value <= 24
      ),
  })
  .required();

