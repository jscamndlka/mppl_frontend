import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { parseAndFormatDateString } from "../utils/helper";

const ReportAccept = () => {
  const dispatch = useDispatch();
  const [reports, setReports] = useState([]);
  const { isError, user } = useSelector((state) => state.auth);
  // Data dummy
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/reports?status=ACCEPT`
        );
        console.log(response.data);
        setReports(response.data.result);
      } catch (error) {}
    };
    fetchReports();
  }, []);
  return (
    <Layout>
      <div className="p-4 overflow-x-auto bg-white">
        {user && user.role === "thl" ? (
          <>
            <div className="flex justify-end">
              <Link to="/report/add" className="btn-primary">
                Buat Laporan
              </Link>
            </div>
          </>
        ) : null}
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Tanggal</th>
              <th>Kegiatan</th>
              <th>Waktu Mulai</th>
              <th>Waktu Berakhir</th>
              <th>Lama Pengerjaan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((item) => (
              <tr key={item.id}>
                <th></th>
                <td>{parseAndFormatDateString(item.createdAt)}</td>
                <td>{item.title}</td>
                <td>{item.startTime}</td>
                <td>{item.endTime}</td>
                <td>{item.duration} Jam</td>
                <td className="flex space-x-4">
                  <Link to={`/report/detail/${item.uuid}`} className="btn">
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ReportAccept;
