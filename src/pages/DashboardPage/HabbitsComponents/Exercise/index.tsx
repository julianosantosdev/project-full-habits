import { useState } from "react";
import { BarChart } from "../../../../components/Charts/Bar";
import { chartData } from "../../../../components/Charts/data";
import {} from "chart.js/auto";

const ExercisesHabbits = () => {
  const [userData, setUserData] = useState(chartData);

  const teste = {
    labels: userData.map((habbit) => habbit.date),
    datasets: [
      {
        label: "Leitura",
        data: userData.map((habbit) => habbit.hours),
        backgroundColor: ["#AA66FF"],
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  }
  return (
    <div className="habbitInfo">
      <h4>Exercícios</h4>
      <BarChart chartData={teste} />
    </div>
  );
};

export { ExercisesHabbits };

