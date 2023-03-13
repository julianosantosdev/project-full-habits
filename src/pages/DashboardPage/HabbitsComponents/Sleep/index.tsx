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
        label: "Leitura",
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
      label: "media",
      value: value.toFixed(1),
    },
    {
      label: "Recomendadas",
      value: (8 - value).toFixed(1),
    },
  ];

  const teste2 = {
    labels: datatochart.map((item) => item.label),
    datasets: [
      {
        label: "",
        data: datatochart.map((item) => item.value),
        backgroundColor: ["#AA66FF", "#ffffff"],
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
        cutout: "75%",
        radius: "75%"
      },
    ],
  };


  return (
    <div className="habbitInfo">
      <h4>Sono</h4>
      <button>adicionar</button>
      <BarChart chartData={teste} />
      <DoughnutChart chartData={teste2} />
      <p>{value.toFixed(1)}</p>
    </div>
  );
};

export { SleepHabbits };
