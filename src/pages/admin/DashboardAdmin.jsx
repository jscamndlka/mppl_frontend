import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import CardSum from "../../components/card/CardSum";
import axios from "axios";

const DashboardAdmin = () => {
  const [countTHL, setCountTHL] = useState(0);
  const [reportNotCompleted, setReportNotCompleted] = useState(0);
  const [reportReject, setReportReject] = useState(0);
  const [reportAccept, setReportAccept] = useState(0);

  const fetchCountTHL = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/thl/count");
      setCountTHL(response.data.result);
    } catch (error) {}
  };

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
    fetchCountTHL();
    fetchReportNotCompleted();
    fetchReportReject();
    fetchReportAccept();
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 place-content-center">
        <CardSum title="Jumlah THL" count={countTHL} />
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

export default DashboardAdmin;
