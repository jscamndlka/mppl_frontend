import React from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";

const DetailReport = () => {
  const { id } = useParams();
  return <Layout>{id}</Layout>;
};

export default DetailReport;
