import React from "react";
import StatsCard from "./StatsCard";
import JobPipeline from "./JobPipeline";
import UpComingService from "./UpComingService";

export default function DashBoard() {
  return (
    <>
      <StatsCard />
      <JobPipeline />
      <UpComingService />
    </>
  );
}
