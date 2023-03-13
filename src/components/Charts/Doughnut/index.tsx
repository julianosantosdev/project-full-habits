import { Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.defaults.font.family = "Nunito";

// interface iDataChart {
//   chartData: {
//     date: string;
//     hour: number;
//   };
// }

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

export const DoughnutChart = ({ chartData }) => {
  return <Doughnut data={chartData} options={options} />;
};

/* ----------------------- LOGICA DO GRÁFICO CIRCULAR ----------------------- */
// const doughnutData = userData.reduce((acc, cur) => acc + cur.hours, 0);
//   const value = doughnutData / userData.length;
//   const datatochart = [
//     {
//       label: "media",
//       value: value.toFixed(1),
//     },
//     {
//       label: "Recomendadas",
//       value: (8 - value).toFixed(1),
//     },
//   ];

//   const teste2 = {
//     labels: datatochart.map((item) => item.label),
//     datasets: [
//       {
//         label: "",
//         data: datatochart.map((item) => item.value),
//         backgroundColor: ["#AA66FF", "#ffffff"],
//         borderWidth: 2,
//         borderRadius: 5,
//         borderSkipped: false,
//         cutout: "75%",
//         radius: "75%"
//       },
//     ],
//   };
