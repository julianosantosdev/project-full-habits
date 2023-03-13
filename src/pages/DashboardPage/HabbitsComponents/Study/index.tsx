import { BarChart } from "../../../../components/Charts/Bar";
import { chartData } from "../../../../components/Charts/data";
import {} from "chart.js/auto";
import { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { IObjectUser } from "../../../../contexts/UserContext/types";
import { DoughnutChart } from "../../../../components/Charts/Doughnut";
import { StyledButton } from "../../../../styles/ButtonStyles";
import { ReadingHours } from "../../../../components/Modal/ReadingHours";

const StudyHabbits = () => {
  const [userData, setUserData] = useState(chartData);

  const { study } = useContext(UserContext);

  const teste = {
    labels: study.map((habbit) => habbit.date),
    datasets: [
      {
        label: "Média de estudo",
        data: study.map((habbit) => habbit.hours),
        backgroundColor: ["#AA66FF"],
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const doughnutData = study.reduce((acc, cur) => acc + cur.hours, 0);
  const value = doughnutData / userData.length;
  const datatochart = [
    {
      label: "Média",
      value: value.toFixed(1),
    },
    {
      label: "Meta",
      value: (6 - value).toFixed(1),
    },
  ];

  const teste2 = {
    labels: datatochart.map((item) => item.label),
    datasets: [
      {
        label: "",
        data: datatochart.map((item) => item.value),
        backgroundColor: ["#AA66FF", "#e7e7e7"],
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
        cutout: "75%",
        radius: "55%",
      },
    ],
  };

  return (
    <div className="habbitInfo">
      <h4 className="heading-3">Estudo</h4>
      <button>Adicionar</button>
      <p className="heading-4">Acompanhe sua média</p>
      <BarChart chartData={teste} />
      <p className="heading-4">Comparação com o recomendado</p>
      <span className="text-1">Média: {value.toFixed(1)}</span>
      <DoughnutChart chartData={teste2} />
    </div>
  );
};

export { StudyHabbits };
