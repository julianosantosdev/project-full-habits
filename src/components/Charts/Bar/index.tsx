import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
Chart.defaults.font.family = "Nunito";

interface iBarChart {
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderWidth: number;
      borderRadius: number;
      borderSkipped: boolean;
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

const BarChart = ({ chartData }: iBarChart) => {
  return <Bar data={chartData} options={options} />;
};
export { BarChart };
