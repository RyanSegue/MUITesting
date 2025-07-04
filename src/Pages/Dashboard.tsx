import React from "react";
import Buttons from "../Components/ButtonsShowcase";
import TextInputShowcase from "../Components/TextInputShowcase";
import ShowcaseSection from "../Components/ShowcaseSection";
import SelectShowcase from "../Components/AutoSelectShowcase";
import LoaderShowcase from "../Components/LoaderShowcase";
import CalendarShowcase from "../Components/CalendarShowcase";
import ModalShowcase from "src/Components/ModalShowcase";
import GraphShowcase from "src/Components/GraphShowcase";
import SnackbarShowcase from "src/Components/SnackbarShowcase";

const Dashboard = () => {
  return (
    <div style={{ width: "100%" }}>
      <ShowcaseSection sectionName="Button Showcase">
        <Buttons />
      </ShowcaseSection>
      <ShowcaseSection sectionName="Text Input Showcase">
        <TextInputShowcase />
      </ShowcaseSection>
      <ShowcaseSection sectionName="Select Showcase">
        <SelectShowcase />
      </ShowcaseSection>
      <ShowcaseSection sectionName="Loader Showcase">
        <LoaderShowcase />
      </ShowcaseSection>
      <ShowcaseSection sectionName="Calendar Showcase">
        <CalendarShowcase />
      </ShowcaseSection>
      <ShowcaseSection sectionName="Modal Showcase">
        <ModalShowcase />
      </ShowcaseSection>
      <ShowcaseSection sectionName="Snackbar Showcase">
        <SnackbarShowcase />
      </ShowcaseSection>
      <ShowcaseSection sectionName="Graph Showcase">
        <GraphShowcase />
      </ShowcaseSection>
    </div>
  );
};

export default Dashboard;
