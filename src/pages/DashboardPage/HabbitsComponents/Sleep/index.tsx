import { useContext, useState } from "react";
import { BarChart } from "../../../../components/Charts/Bar";
import { chartData } from "../../../../components/Charts/data";
import {} from "chart.js/auto";
import { UserContext } from "../../../../contexts/UserContext";

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

  return (
    <div className="habbitInfo">
      <h4>Sono</h4>
      <BarChart chartData={teste} />
    </div>
  );
};

export { SleepHabbits };
