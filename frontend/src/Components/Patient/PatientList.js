import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"


import PatientLine from "./PatientLine"

import { getPatients } from '../../api/patient-api'

export default function PatientsList() {
    const [patientList, setPatientList] = useState([])
    
    useEffect(() => {
        searchPatients()
      }, []);
    
    async function searchPatients () {
        const patientsData = await getPatients()
        setPatientList(patientsData.patients)
    }

    return (
        <div>
            <Link className="btin btn-primary" to="/pacientes/novo">
                <button type="button" className="btn btn-primary">
                    Cadastrar
                </button>
            </Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Identificador</th>
                        <th scope="col">Nome Completo</th>
                        <th scope="col">CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {patientList.map((patient) => <PatientLine key={patient.idPatient} patient={patient} searchPatients={searchPatients} />)}
                </tbody>
            </table>
        </div>
    )
}