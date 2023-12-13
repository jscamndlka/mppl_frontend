import React, { useState } from "react";
import { DIVISION } from "../../utils/helper";
import Layout from "../Layout";
import axios from "axios";
import ToastError from "../../components/toast/ToastError";
import { useNavigate } from "react-router-dom";

const AddTHL = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [division, setDivision] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/user", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: "thl",
        division: division,
      });
      navigate("/data/thl");
    } catch (error) {
      setMsg(error.response.data.msg);
      setTimeout(() => {
        setMsg("");
      }, 1500);
    }
  };

  return (
    <Layout>
      {msg && <ToastError title={msg} />}
      <h2 className="text-xl font-semibold">Tambah THL</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full input input-bordered"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full input input-bordered"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full input input-bordered"
            />
          </div>

          <div>
            <label htmlFor="confPassword">Konfirmasi Password</label>
            <input
              type="password"
              id="confPassword"
              value={confPassword}
              onChange={handleConfPasswordChange}
              className="w-full input input-bordered"
            />
          </div>

          <div>
            <label htmlFor="division">Divisi</label>
            <select
              id="division"
              value={division}
              onChange={handleDivisionChange}
              className="w-full input input-bordered"
            >
              {Object.values(DIVISION).map((div, index) => (
                <option key={index} value={div}>
                  {div}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="mt-4 btn-primary btn">
            Tambah THL
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddTHL;
