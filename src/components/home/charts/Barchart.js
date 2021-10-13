import { Bar } from "react-chartjs-2";
export default function Barchart() {
  return (
    <div>
      <Bar
        data={{
          labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Revenue",
              data: [5.0, 7.0, 20.0, 4.0, 30.0, 20.0, 2.0],
              backgroundColor: "313131",
            },
          ],
        }}
        height={183.8}
        width={55.2}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
