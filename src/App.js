import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import NotFound from "./pages/NotFound";
import Report from "./pages/Report";
import DataTHL from "./pages/admin/DataTHL";
import DataSubdivision from "./pages/admin/DataSubdivision";
import AddReport from "./pages/thl/AddReport";
import ReportReject from "./pages/ReportReject";
import ReportAccept from "./pages/ReportAccept";
import DetailReport from "./pages/DetailReport";
import AddTHL from "./pages/admin/AddTHL";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data/thl" element={<DataTHL />} />
          <Route path="/thl/add" element={<AddTHL />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/report/add" element={<AddReport />} />
          <Route path="/reports/reject" element={<ReportReject />} />
          <Route path="/reports/accept" element={<ReportAccept />} />
          <Route path="/report/detail/:id" element={<DetailReport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
