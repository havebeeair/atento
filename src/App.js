import Landing from "./componentes/Landing/Landing";
import { Route, Routes, useLocation } from "react-router-dom";
import FullJobs from "./componentes/FullJobs/FullJobs.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Landing />} path="/"></Route>
        <Route element={<FullJobs />} exact path="/vacantes"></Route>
      </Routes>
    </>
  );
}

export default App;
