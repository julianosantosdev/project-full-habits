import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
Chart.defaults.font.family = "Nunito";

interface iDoughnutChart {
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: string[];
      backgroundColor: string[];
      borderWidth: number;
      borderRadius: number;
      borderSkipped: boolean;
      cutout: string;
      radius: string;
    }[];
  };
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: "#6856F9",
        font: {
          size: 16,
        },
      },
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

export const DoughnutChart = ({ chartData }: iDoughnutChart) => {
  return <Doughnut data={chartData} options={options} />;
};
