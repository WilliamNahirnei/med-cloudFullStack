import React from "react"

import PatientsList from "../Components/Patient/PatientList"

export default function PatientsPage() {
    return (
        <div className="card">
            <h1>Pacientes</h1>
            <PatientsList />
        </div>
    )
}