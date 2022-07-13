import {
  Routes,
  Route,
} from "react-router-dom";
import PatientsPage from "./Pages/PatientsPage";
import StorePatientPage from "./Pages/StorePatientPage"
import Home from "./Pages/Home";
import Nav from "./Components/BasicComponents/Nav"

export default function App() {
  return (
    <react-fragment>
      <body>
        <div className='row m-3'>
          <div className="col-2">
            <Nav />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pacientes" element={<PatientsPage />} />
              <Route path="/pacientes/novo" element={<StorePatientPage />} />
            </Routes>
          </div>
        </div>
      </body>
    </react-fragment>
  );
}