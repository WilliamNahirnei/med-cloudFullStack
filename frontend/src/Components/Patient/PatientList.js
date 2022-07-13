import React, { useState, useEffect } from 'react';

import PatientLine from "./PatientLine"

import { getPatients } from '../../api/patient-api'

export default function PatientsList() {
    const [patientList, setPatientList] = useState([])
    
    useEffect(() => {
        searchPatients()
      }, []);
    
    async function searchPatients () {
        console.log("buscado")
        const patientsData = await getPatients()
        setPatientList(patientsData.patients)
    }

    return (
        <div>
            <button type="button" className="btn btn-primary">
                Cadastrar
            </button>
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