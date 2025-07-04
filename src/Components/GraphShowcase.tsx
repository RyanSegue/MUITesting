import { Button, Stack } from "@mui/material";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import { getRandomInt } from "src/Utils/Global";

const GraphShowcase = () => {
  const dataLabels = ["A", "B", "C", "D", "E"];
  const [dataBar, setDataBar] = useState<number[]>([]);
  const [dataLine, setDataLine] = useState<number[]>([]);
  const [dataPie, setDataPie] = useState<number[]>([]);

  const randomiseData = (random: "bar" | "line" | "pie") => {
    const data = dataLabels.map((_) => getRandomInt(100));
    switch (random) {
      case "bar":
        setDataBar(data);
        break;
      case "line":
        setDataLine(data);
        break;
      case "pie":
        setDataPie(data);
        break;
    }
  };

  useEffect(() => {
    randomiseData("bar");
    randomiseData("line");
    randomiseData("pie");
  }, []);

  return (
    <Stack
      direction={"row"}
      gap={2}
    >
      <div style={{ backgroundColor: "white" }}>
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: dataLabels,
            },
          ]}
          series={[
            {
              data: dataBar,
            },
          ]}
          height={300}
        />
        <Button
          variant="contained"
          onClick={() => randomiseData("bar")}
        >
          Randomise
        </Button>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <LineChart
          height={300}
          series={[{ data: dataLine, label: "uv" }]}
          xAxis={[{ scaleType: "point", data: dataLabels }]}
          yAxis={[{ width: 50 }]}
          margin={{ left: 5 }}
        />
        <Button
          variant="contained"
          onClick={() => randomiseData("line")}
        >
          Randomise
        </Button>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <PieChart
          series={[
            {
              data: dataPie.map((val, index) => ({
                value: val,
                label: dataLabels[index],
              })),
            },
          ]}
          width={200}
          height={200}
        />
        <Button
          variant="contained"
          onClick={() => randomiseData("pie")}
        >
          Randomise
        </Button>
      </div>
    </Stack>
  );
};

export default GraphShowcase;
