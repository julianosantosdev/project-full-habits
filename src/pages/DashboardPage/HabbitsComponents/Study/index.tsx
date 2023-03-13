import { BarChart } from "../../../../components/Charts/Bar";
import { chartData } from "../../../../components/Charts/data";
import {} from "chart.js/auto";
import { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { IObjectUser } from "../../../../contexts/UserContext/types";

const StudyHabbits = () => {
  const [userData, setUserData] = useState(chartData);

  const { study } = useContext(UserContext);

  const teste = {
    labels: study.map((habbit) => habbit.date),
    datasets: [
      {
        label: "Leitura",
        data: study.map((habbit) => habbit.hours),
        backgroundColor: ["#AA66FF"],
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };
  return (
    <div className="habbitInfo">
      <h4>Estudo</h4>
      <BarChart chartData={teste} />
    </div>
  );
};

export { StudyHabbits };
