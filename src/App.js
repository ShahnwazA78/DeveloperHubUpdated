import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import DashboardPage from "./Pages/DashboardPage";
import PendingApplicationPage from "./Pages/PendingApplicationPage";
import ReviewedApplicationPage from "./Pages/ReviewedApplicationPage";
import ServicesPage from "./Pages/ServicesPage";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ width: "80%", marginLeft: "300px" }}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="pending-requests" element={<PendingApplicationPage />} />
          <Route
            path="reviewed-requests"
            element={<ReviewedApplicationPage />}
          />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
