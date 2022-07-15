import React from "react"
import PatientDataForm from "../Components/Patient/PatientDataForm"

export default function PatientPage() {
    return (
        <div className="card">
            <h1>Dados do paciente</h1>
            <PatientDataForm />
        </div>
    )
}