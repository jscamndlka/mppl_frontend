import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalUpdateStatus from "../components/modal/ModalUpdateStatus";
import { STATUS } from "../utils/helper";
import { parseAndFormatDateString } from "../utils/helper";

const Report = () => {
  const dispatch = useDispatch();
  const [reports, setReports] = useState([]);
  const { isError, user } = useSelector((state) => state.auth);
  const [isCancel, setIsCancel] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  // Data dummy
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const fetchReports = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/reports?status=NOT COMPLETED`
      );
      console.log(response.data);
      setReports(response.data.result);
    } catch (error) {}
  };

  const [id, setId] = useState("");

  useEffect(() => {
    fetchReports();
  }, []);
  return (
    <Layout>
      {isCancel && (
        <ModalUpdateStatus
          onClose={setIsCancel}
          id={id}
          fetchData={fetchReports}
          status={STATUS.REJECT}
        />
      )}
      {isCompleted && (
        <ModalUpdateStatus
          onClose={setIsCompleted}
          id={id}
          fetchData={fetchReports}
          status={STATUS.ACCEPT}
        />
      )}
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
              <th>Nama</th>
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
                <td>{item.user?.name}</td>
                <td>{item.title}</td>
                <td>{item.startTime}</td>
                <td>{item.endTime}</td>
                <td>{item.duration} Jam</td>
                <td className="flex space-x-4">
                  {user && user.role === "division" && (
                    <button
                      onClick={() => {
                        setId(item.uuid);
                        setIsCompleted(true);
                      }}
                      className="btn btn-primary"
                    >
                      Terima
                    </button>
                  )}
                  <Link to={`/report/detail/${item.uuid}`} className="btn">
                    Detail
                  </Link>
                  {user && user.role === "division" && (
                    <button
                      onClick={() => {
                        setId(item.uuid);
                        setIsCancel(true);
                      }}
                      className="btn btn-error"
                    >
                      Tolak
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Report;
