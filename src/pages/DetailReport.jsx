import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";

const DetailReport = () => {
  const { id } = useParams();
  const [report, setReport] = useState({});
  const fetchDetailReport = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/report/${id}`);
      setReport(response.data.result);
      console.log(response.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDetailReport();
  }, [id]);
  const duration = `${report.duration} Jam`;
  return (
    <Layout>
      <h2>Detail Laporan</h2>
      <div className="mt-4">
        <form>
          <div className="flex flex-col space-y-2">
            <div>
              <label htmlFor="title">Nama:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder={report.user?.name}
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label htmlFor="title">Bidang:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder={report.user?.division}
                className="w-full input input-bordered"
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="title">Judul:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder={report.title}
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label htmlFor="description">Deskripsi:</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder={report.description}
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label htmlFor="startTime">Waktu Mulai:</label>
              <input
                type="text"
                id="startTime"
                name="startTime"
                placeholder={report.startTime}
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label htmlFor="endTime">Waktu Selesai:</label>
              <input
                type="text"
                id="endTime"
                name="endTime"
                placeholder={report.endTime}
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label htmlFor="endTime">Durasi:</label>
              <input
                type="text"
                id="endTime"
                name="endTime"
                placeholder={duration}
                className="w-full input input-bordered"
              />
            </div>
          </div>
          <div className="p-4">
            <label htmlFor="endTime">Bukti Kegiatan:</label>
            <img src={report?.url} alt="" className="w-36 h-36" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default DetailReport;
