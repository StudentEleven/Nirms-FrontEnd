import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidemenu from "./components/Sidemenu";
import Dashboard from "./page/Dashboard";
import Readiness from "./page/readiness";
import "./App.css";
import Fas from "./page/Fas";
import Ppe from "./page/Ppe";
import NocMonitoring from "./page/NocMonitoring";
import SocAlerts from "./page/SocAlerts";
import ReportsAndAnalytics from "./page/ReportsAndAnalytics";
import UserManagement from "./page/UserManagement";
import Settings from "./page/Settings";
import Reference from "./page/References";
import Help from "./page/Help";
import ICTAssetsInventory from "./page/ICTAssetsInventory";
import CRAStatusReport from "./page/CRAStatusReport";
import AssetManagement from "./page/AssetManagement";
import RiskManagement from "./page/RiskManagement";

function App() {
  return (
    <Router>
      <div className=" bg-gray-100">
        <h1>hello</h1>
        <Navbar />
        <div className="flex h-screen w-screen">
          <Sidemenu />
          <div className="p-4 sm:ml-64 w-full pt-23">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/readiness" element={<Readiness />} />
              <Route path="/ict-assets-inventory" element={<ICTAssetsInventory />} />
              <Route path="/fas" element={<Fas />} /> 
              <Route path="/ppe" element={<Ppe />} />
              <Route path="/noc-monitoring" element={<NocMonitoring />} />
              <Route path="/soc-alerts" element={<SocAlerts />} />
              <Route path="/reports-and-analytics" element={<ReportsAndAnalytics />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/references" element={<Reference />} />
              <Route path="/help" element={<Help />} />
              <Route path="/cra-status-reports" element={<CRAStatusReport />} />
              <Route path="/cra-status-assets" element={<AssetManagement />} />
              <Route path="/cra-status-risk" element={<RiskManagement />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
