import React from "react"
import PatientForm from "../Components/Patient/PatientForm"

export default function StorePatientPage() {
    return (
        <div className="card">
            <h1>Novo Paciente</h1>
            <PatientForm />
        </div>
    )
}