import {
    Routes,
    Route,
  } from "react-router-dom";
  import PatientsPage from "./Pages/PatientsPage";
  import PatientPage from "./Pages/PatientPage";
  import StorePatientPage from "./Pages/StorePatientPage"
  import Home from "./Pages/Home";
  import UpdatePatientPage from "./Pages/UpdatePatientPage";
  
  export default function NavigationList() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pacientes" element={<PatientsPage />} />
            <Route exact path="/pacientes/:idPatient" element={<PatientPage />} />
            <Route exact path="/pacientes/novo" element={<StorePatientPage />} />
            <Route exact path="/pacientes/editar/:idPatient" element={<UpdatePatientPage />} />
        </Routes>
    );
  }