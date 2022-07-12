import React from "react"

export default function PatientLine(props) {
    const patient = props.patient

    return (
        <tr>
            <th scope="row">{patient.id}</th>
            <td>{patient.name}</td>
            <td>{patient.CPF}</td>
        </tr>
    )
}