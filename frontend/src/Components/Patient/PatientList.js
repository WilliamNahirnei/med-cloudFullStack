import React from "react"

import PatientLine from "../../Pages/PatientLine"

const patientList = [
    {id:1, name:"William n lopes",CPF:"11111111111"},
    {id:1, name:"William n lopes",CPF:"22222222222"}
]

export default function PatientsList() {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Identificador</th>
                        <th scope="col">Nome Completo</th>
                        <th scope="col">CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {patientList.map((patient) => <PatientLine key={patient.id} patient={patient} />)}
                </tbody>
            </table>
        </div>
    )
}