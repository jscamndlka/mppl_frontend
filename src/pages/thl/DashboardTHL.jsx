import React, { useEffect, useState } from "react";
import CardSum from "../../components/card/CardSum";
import axios from "axios";

const DashboardTHL = () => {
  const [reportNotCompleted, setReportNotCompleted] = useState(0);
  const [reportReject, setReportReject] = useState(0);
  const [reportAccept, setReportAccept] = useState(0);

  const fetchReportNotCompleted = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/report/not-completed/count"
      );
      setReportNotCompleted(response.data.result);
    } catch (error) {}
  };
  const fetchReportReject = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/report/reject/count"
      );
      setReportReject(response.data.result);
    } catch (error) {}
  };

  const fetchReportAccept = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/report/accept/count"
      );
      setReportAccept(response.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    fetchReportNotCompleted();
    fetchReportReject();
    fetchReportAccept();
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 place-content-center ">
        <CardSum
          title="Jumlah Laporan Belum Selesai"
          count={reportNotCompleted}
        />
        <CardSum title="Jumlah Laporan Ditolak" count={reportReject} />
        <CardSum title="Jumlah Laporan Disetujui" count={reportAccept} />
      </div>
    </>
  );
};

export default DashboardTHL;
