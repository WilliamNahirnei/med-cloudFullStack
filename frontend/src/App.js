import {
  Routes,
  Route,
} from "react-router-dom";
import PatientsPage from "./Pages/PatientsPage";
import StorePatientPage from "./Pages/StorePatientPage"
import Home from "./Pages/Home";
import Nav from "./Components/BasicComponents/Nav"
import UpdatePatientPage from "./Pages/UpdatePatientPage";

export default function App() {
  return (
    <div>
      <div className='row m-3'>
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pacientes" element={<PatientsPage />} />
            <Route exact path="/pacientes/novo" element={<StorePatientPage />} />
            <Route exact path="/pacientes/editar/:idPatient" element={<UpdatePatientPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}