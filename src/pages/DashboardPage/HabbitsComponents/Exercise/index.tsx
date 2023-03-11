import { useContext, useState } from "react";
import { BarChart } from "../../../../components/Charts/Bar";
import { chartData } from "../../../../components/Charts/data";
import {} from "chart.js/auto";
import { UserContext } from "../../../../contexts/UserContext";

const ExercisesHabbits = () => {
  const [userData, setUserData] = useState(chartData);

  const { training } = useContext(UserContext);

  const teste = {
    labels: training.map((habbit) => habbit.date),
    datasets: [
      {
        label: "Leitura",
        data: training.map((habbit) => habbit.hours),
        backgroundColor: ["#AA66FF"],
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div className="habbitInfo">
      <h4>Exercícios</h4>
      <BarChart chartData={teste} />
    </div>
  );
};

export { ExercisesHabbits };
