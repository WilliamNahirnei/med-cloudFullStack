import React from "react"
import { useParams } from "react-router-dom"
import PatientDataForm from "../Components/Patient/PatientDataForm"

export default function PatientPage() {
    const routeProps = useParams()
    const idPatient = routeProps.idPatient
    return (
        <div className="card">
            <h1>Dados do paciente</h1>
            <PatientDataForm idPatient={idPatient} />
        </div>
    )
}