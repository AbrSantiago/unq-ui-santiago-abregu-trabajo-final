import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import PVE from "./components/pve";
import PVP from "./components/pvp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pvp" element={<PVP />} />
        <Route path="/pve" element={<PVE />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
