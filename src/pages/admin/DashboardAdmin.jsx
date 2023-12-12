import React, { useEffect } from "react";
import Card from "../../components/card/Card";

const DashboardAdmin = () => {
  useEffect(() => {}, []);
  return (
    <>
      <h1>Dashboard Admin</h1>
      <div className="grid grid-cols-3 gap-4">
        <Card />
        <Card />
      </div>
    </>
  );
};

export default DashboardAdmin;
