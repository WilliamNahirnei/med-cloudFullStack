import React from "react"
import { useParams } from "react-router-dom"
import PatientForm from "../Components/Patient/PatientForm"

export default function UpdatePatientPage() {
    const routeProps = useParams()
    const idPatient = routeProps.idPatient
    return (
        <div className="card">
            <h1>Alterar Paciente</h1>
            <PatientForm idPatient={idPatient} type="edition"/>
        </div>
    )
}