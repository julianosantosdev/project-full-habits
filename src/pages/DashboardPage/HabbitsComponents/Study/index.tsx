import { BarChart } from "../../../../components/Charts/Bar";
import {} from "chart.js/auto";
import { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { IObjectUser } from "../../../../contexts/UserContext/types";
import { DoughnutChart } from "../../../../components/Charts/Doughnut";
import { ModalContext } from "../../../../contexts/ModalContext";

const StudyHabbits = () => {
  const { study } = useContext(UserContext);

  // study.sort((a, b) => {
  //   if (a.date < b.date) {
  //     return -1;
  //   }
  // });

  const { handleShowModal } = useContext(ModalContext);

  const barChartStudyData = {
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
  const value = doughnutData / study.length;
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

  const doughnutChartStudyData = {
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
      <button
        onClick={() => {
          handleShowModal("study");
        }}
      >
        Adicionar
      </button>
      <p className="heading-4">Acompanhe sua média</p>
      <BarChart chartData={barChartStudyData} />
      <p className="heading-4">Comparação com o recomendado</p>
      <span className="text-1">Média: {value.toFixed(1)}</span>
      <DoughnutChart chartData={doughnutChartStudyData} />
    </div>
  );
};

export { StudyHabbits };
