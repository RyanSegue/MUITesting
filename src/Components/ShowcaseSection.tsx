import { JSX, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import { Stack } from "@mui/system";
import { Collapse, Typography } from "@mui/material";

interface Props {
  sectionName: string;
  children: JSX.Element | JSX.Element[];
}

const ShowcaseSection = ({ children, sectionName }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Stack
      style={{
        marginBottom: 25,
        borderTop: 1,
        borderBottom: 1,
        borderColor: "white",
        borderStyle: "solid",
        padding: 10,
      }}
      direction={"column"}
      gap={2}
      justifyItems={"flex-start"}
    >
      <Stack
        style={{
          justifySelf: "start",
          justifyContent: "center",
          alignContent: "center",
        }}
        alignContent={"flex-start"}
        direction={"row"}
        spacing={2}
      >
        <ChevronRightIcon
          onClick={handleOpen}
          style={{
            width: "40px",
            height: "40px",
            transition: "transform 0.3s ease",
            transform: open ? "rotate(90deg)" : "",
            cursor: "pointer",
          }}
        />
        <Typography
          style={{
            textAlign: "left",
            justifySelf: "center",
            flex: 1,
          }}
        >
          {sectionName}
        </Typography>
      </Stack>
      <Collapse in={open}>{children}</Collapse>
    </Stack>
  );
};

export default ShowcaseSection;
