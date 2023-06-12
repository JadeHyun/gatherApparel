import { Route, Routes } from "react-router-dom";
import LogoPage from "./pages/LogoPage";
import ManPage from "./pages/ManPage";
import WomanPage from "./pages/WomanPage";
import CommonPage from "./pages/CommonPage";
import AccessoriesPage from "./pages/AccessoriesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/man" element={<ManPage />} />
        <Route path="/woman" element={<WomanPage />} />
        <Route path="/common" element={<CommonPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
