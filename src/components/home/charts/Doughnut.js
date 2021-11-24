import { Doughnut } from "react-chartjs-2";
// import { Chart } from "chart.js";

const chartData = [80, 20];
const showData = chartData[0] + "%";
const data1 = {
  labels: ["Completed", "Pending"],
  datasets: [
    {
      data: chartData,
      backgroundColor: ["#313131", "#707070"],
    },
  ],

  text: showData,
};
// var originalDoughnutDraw = Chart.controllers?.doughnut.prototype.draw;
// Chart.helpers?.extend(Chart.controllers?.doughnut.prototype, {
//   draw: function () {
//     originalDoughnutDraw.apply(this, arguments);
//     var chart = this.chart;
//     var width = chart.chart.width,
//       height = chart.chart.height,
//       ctx = chart.chart.ctx;
//     var fontSize = (height / 114).toFixed(2);
//     ctx.font = fontSize + "em sans-serif";
//     ctx.fillStyle = "#6D7278";
//     ctx.textBaseline = "middle";
//     var text = chart.config.data.text,
//       textX = Math.round((width - ctx.measureText(text).width) / 2),
//       textY = height / 2;
//     ctx.fillText(text, textX, textY);
//   },
// });
const options1 = {
  responsive: true,
  legend: {
    display: false,
    position: "bottom",
    labels: {
      fontSize: 18,
      fontColor: "#6D7278",
      fontFamily: "kanit light",
    },
  },
};

export default function DoughnutChart() {
  return (
    <div>
      <Doughnut data={data1} height={250} options={options1} />
    </div>
  );
}
