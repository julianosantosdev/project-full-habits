import { useContext } from "react";
import { BarChart } from "../../../../components/Charts/Bar";
import {} from "chart.js/auto";
import { UserContext } from "../../../../contexts/UserContext";
import { DoughnutChart } from "../../../../components/Charts/Doughnut";
import { ModalContext } from "../../../../contexts/ModalContext";

const ExercisesHabbits = () => {
  const { handleShowModal } = useContext(ModalContext);

  const { training } = useContext(UserContext);

  // training.sort((a, b) => {
  //   if (new Date (a.date) < new Date(b.date)) {
  //     return -1;
  //   }
  // });

  const barChartTrainingData = {
    labels: training.map((habbit) => habbit.date),
    datasets: [
      {
        label: "Média de exercicio",
        data: training.map((habbit) => habbit.hours),
        backgroundColor: ["#AA66FF"],
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const doughnutData = training.reduce((acc, cur) => acc + cur.hours, 0);
  const value = doughnutData / training.length;
  const datatochart = [
    {
      label: "Média",
      value: value.toFixed(1),
    },
    {
      label: "Meta",
      value: (2 - value).toFixed(1),
    },
  ];

  const doughnutChartTrainigData = {
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
      <h4 className="heading-3">Exercícios</h4>
      <button
        onClick={() => {
          handleShowModal("exercise");
        }}
      >
        Adicionar
      </button>
      <p className="heading-4">Acompanhe sua média</p>
      <BarChart chartData={barChartTrainingData} />
      <p className="heading-4">Comparação com o recomendado</p>
      <span className="text-1">Média: {value.toFixed(1)}</span>
      <DoughnutChart chartData={doughnutChartTrainigData} />
    </div>
  );
};

export { ExercisesHabbits };

