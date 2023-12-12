import React, { useState } from "react";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddReport = () => {
  const { user } = useSelector((state) => state.auth);
  let navigate = useNavigate();
  // State untuk mengelola data formulir
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState(null);
  const [customError, setCustomError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "startTime":
        setStartTime(value);
        break;
      case "endTime":
        setEndTime(value);
        break;
      default:
        break;
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (endTime < startTime) {
      setCustomError("Waktu Selesai tidak boleh kurang dari Waktu Mulai.");
      setDuration("");
      return;
    }

    setCustomError(null);

    const start = new Date(`2022-01-01T${startTime}`);
    const end = new Date(`2022-01-01T${endTime}`);
    const differenceInHours = (end - start) / (1000 * 60 * 60);

    setDuration(differenceInHours.toFixed(2));

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("title", title);
      formDataToSend.append("description", description);
      formDataToSend.append("startTime", startTime);
      formDataToSend.append("endTime", endTime);
      formDataToSend.append("duration", duration);
      formDataToSend.append("image", image);

      const response = await axios.post(
        "http://localhost:5000/report",
        formDataToSend,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );

      navigate("/reports");
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <Layout>
      <div>
        <h2 className="text-xl font-bold">Tambah Laporan</h2>
        <div className="mt-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <div>
                <label htmlFor="title">Judul:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                  className="w-full input input-bordered"
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Deskripsi:</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                  className="w-full input input-bordered"
                  required
                />
              </div>
              <div>
                <label htmlFor="startTime">Waktu Mulai:</label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={startTime}
                  onChange={handleInputChange}
                  className="w-full input input-bordered"
                  required
                />
              </div>
              <div>
                <label htmlFor="endTime">Waktu Selesai:</label>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  value={endTime}
                  onChange={handleInputChange}
                  className="w-full input input-bordered"
                  required
                />
                {customError && <p className="text-red-500">{customError}</p>}
              </div>
              <div>
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center w-full max-w-lg p-6 mx-auto text-center bg-white border-2 border-gray-400 border-dashed cursor-pointer rounded-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <h2 className="mt-4 text-xl font-medium tracking-wide text-gray-700">
                    Bukti Kegiatan
                  </h2>
                  <p className="mt-2 tracking-wide text-gray-500">
                    Upload or drag &amp; drop your file (SVG, PNG, JPG, or GIF).
                  </p>
                  <input
                    id="dropzone-file"
                    type="file"
                    onChange={loadImage}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <button type="submit" className="mt-4 btn btn-primary">
              SIMPAN
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddReport;
