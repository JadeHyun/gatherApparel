import { Route, Routes } from "react-router-dom";
import LogoPage from "./pages/LogoPage";
import ManPage from "./pages/ManPage";
import WomanPage from "./pages/WomanPage";
import CommonPage from "./pages/CommonPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<LogoPage />} />
          <Route path="/man" element={<ManPage />} />
          <Route path="/woman" element={<WomanPage />} />
          <Route path="/common" element={<CommonPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
