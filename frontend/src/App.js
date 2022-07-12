import {
  Routes,
  Route,
} from "react-router-dom";
import PatientsPage from "./Pages/PatientsPage";
import Home from "./Pages/Home";
import Nav from "./Components/BasicComponents/Nav"

export default function App() {
  return (
    <react-fragment>
      <div className='row'>
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pacientes" element={<PatientsPage />} />
          </Routes>
        </div>
      </div>
    </react-fragment>
  );
}