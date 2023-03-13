import { useContext, useState } from "react";
import { BarChart } from "../../../../components/Charts/Bar";
import { chartData } from "../../../../components/Charts/data";
import {} from "chart.js/auto";
import { UserContext } from "../../../../contexts/UserContext";
import { DoughnutChart } from "../../../../components/Charts/Doughnut";

const SleepHabbits = () => {
  const [userData, setUserData] = useState(chartData);

  const { sleep } = useContext(UserContext);

  const teste = {
    labels: sleep.map((habbit) => habbit.date),
    datasets: [
      {
        label: "Média de sono",
        data: sleep.map((habbit) => habbit.hours),
        backgroundColor: ["#AA66FF"],
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const doughnutData = sleep.reduce((acc, cur) => acc + cur.hours, 0);
  const value = doughnutData / userData.length;
  const datatochart = [
    {
      label: "Media",
      value: value.toFixed(1),
    },
    {
      label: "Meta",
      value: (8 - value).toFixed(1),
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
      <h4 className="heading-3">Sono</h4>
      <button>adicionar</button>
      <p className="heading-4">Acompanhe sua média</p>
      <BarChart chartData={teste} />
      <p className="heading-4">Comparação com o recomendado</p>
      <span className="text-1">Média: {value.toFixed(1)}</span>
      <DoughnutChart chartData={teste2} />
    </div>
  );
};

export { SleepHabbits };
