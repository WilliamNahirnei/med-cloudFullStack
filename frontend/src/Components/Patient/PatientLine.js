import React from "react"
import { AiFillEdit, AiFillEye, } from "react-icons/ai";
import { BsFillTrashFill } from 'react-icons/bs'

import { deletePatient } from '../../api/patient-api'

export default function PatientLine(props) {
    const patient = props.patient
    const searchPatients = props.searchPatients

    async function callDeletePatient() {
        await deletePatient(patient.idPatient)
        searchPatients()
    }

    return (
        <tr>
            <th scope="row">{patient.idPatient}</th>
            <td>{patient.PatientFullName}</td>
            <td>{patient.PatientCPF}</td>
            <td>
                <div className="row">
                    <div className="col-4">
                        <AiFillEye />
                    </div>
                    <div className="col-4">
                        <AiFillEdit />
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn btn-danger" onClick={callDeletePatient}>
                            <BsFillTrashFill />
                        </button>
                    </div>
                </div>
            </td>
        </tr>
    )
}