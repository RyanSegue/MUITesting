import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React, { useEffect } from "react";

const LoaderShowcase = () => {
  const [progress, setProgress] = React.useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack
      direction={"row"}
      spacing={5}
    >
      <CircularProgress />
      <CircularProgress
        value={progress}
        variant="determinate"
      />
      <LinearProgress style={{ width: "125px", alignSelf: "center" }} />
      <LinearProgress
        variant="determinate"
        style={{ width: "125px", alignSelf: "center" }}
        value={progress}
      />
    </Stack>
  );
};

export default LoaderShowcase;
