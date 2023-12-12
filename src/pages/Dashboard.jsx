import React, { useEffect } from "react";
import Layout from "./Layout";
import DashboardAdmin from "./admin/DashboardAdmin";
import DashboardDivision from "./division/DashboardDivision";
import DashboardTHL from "./thl/DashboardTHL";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
      {user && user.role === "admin" ? <DashboardAdmin /> : null}
      {user && user.role === "thl" ? <DashboardTHL /> : null}
      {user && user.role === "division" ? <DashboardDivision /> : null}
    </Layout>
  );
};

export default Dashboard;
