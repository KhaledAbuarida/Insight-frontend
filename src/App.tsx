import "./App.css";
import VisualizePage from "./pages/VisualizePage";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import DataSourcePage from "./pages/DataSourcePage";
import AppHeader from "./components/AppHeader";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UploadPage from "./pages/UploadPage";
import DataProvider from "./contexts/DataContext/DataProvider";
import ModelPage from "./pages/ModelPage";
import GraphProvider from "./contexts/DataContext/GraphContext/GraphProvider";

const App = () => {
  const AppHeaderWrapper = () => {
    const location = useLocation();

    const path = location.pathname;

    // Check if the current route is not the landing page, login, or register
    if (path !== "/" && path !== "/login" && path !== "/register") {
      return <AppHeader />;
    }

    return null; // Return null to not render anything
  };

  return (
    <BrowserRouter>
      <DataProvider>
        <GraphProvider>
          <AppHeaderWrapper />
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/home" element={<VisualizePage />} />
            <Route path="/dataset" element={<DataSourcePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/model" element={<ModelPage />} />
          </Routes>
        </GraphProvider>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
