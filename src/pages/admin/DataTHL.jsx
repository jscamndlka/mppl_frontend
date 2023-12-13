import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const DataTHL = () => {
  const [users, setUsers] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data.result);
      } catch (error) {}
    };
    fetchUsers();
  }, []);
  return (
    <Layout>
      <h2 className="text-xl font-semibold">Data THL</h2>
      <div className="p-4 overflow-x-auto bg-white">
        {user && user.role === "admin" ? (
          <>
            <div className="flex justify-end">
              <Link to="/thl/add" className="btn-primary">
                Tambah THL
              </Link>
            </div>
          </>
        ) : null}
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Nama</th>
              <th>Email</th>
              <th>Bidang</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <th></th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.division}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default DataTHL;
