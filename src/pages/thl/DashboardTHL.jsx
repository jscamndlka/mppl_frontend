import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../Layout";
import Card from "../../components/card/Card";

const DashboardTHL = () => {
  // useEffect(() => {
  //   const get = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://dataku.sulutprov.go.id/api/dikda/pegawai/?nip=195903281990031002",
  //         {
  //           withCredentials: false,
  //         }
  //       );
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   get();
  // }, []);
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <Card title="Jam Kerja Efektif Hari ini" duration={10} />
        <Card title="Jam Kerja Efektif Kemarin" duration={10} />
        <Card title="Jam Kerja Minggu Ini" duration={10} />
        <Card title="Jam Kerja Bulan Ini" duration={10} />
      </div>
    </>
  );
};

export default DashboardTHL;
