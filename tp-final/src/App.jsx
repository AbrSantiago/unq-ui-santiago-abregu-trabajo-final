import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import PVP from "./components/pve";
import PVE from "./components/pvp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pvp" element={<PVP/>} />
        <Route path="/pve" element={<PVE/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
