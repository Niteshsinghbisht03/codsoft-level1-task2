import React from "react";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import SkillPage from "./skillPage";
import ProjectPage from "./ProjectPage";
import Menu from "./Menu";
import ConnectPage from "./ConnectPage";
function App() {
  return (
    <div className="px-16 py-8 bg-slate-800">
      <Menu />
      <Routes>
        <Route index element={<About />}></Route>
        <Route path="/Skills" element={<SkillPage />}></Route>
        <Route path="/Projects" element={<ProjectPage />}></Route>
        <Route path="/Connect" element={<ConnectPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
