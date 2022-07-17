import React from "react"
import { Link } from "react-router-dom"
import { AiFillEdit, AiFillEye, } from "react-icons/ai";
import { BsFillTrashFill } from 'react-icons/bs'

import DeletePatient from './DeletePatient'

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
                        <Link className="btin btn-primary" to={`/pacientes/${patient.idPatient}`}>
                            <button type="button" className="btn btn-success">
                                <AiFillEye />
                            </button>
                        </Link>
                    </div>
                    <div className="col-4">
                        <Link className="btin btn-primary" to={`/pacientes/editar/${patient.idPatient}`}>
                            <button type="button" className="btn btn-primary">
                                <AiFillEdit />
                            </button>
                        </Link>
                    </div>
                    <div className="col-4">
                        {/* <button type="button" className="btn btn-danger" onClick={callDeletePatient}>
                            <BsFillTrashFill />
                        </button> */}
                        <DeletePatient idPatient={patient.idPatient} searchPatients={searchPatients} />
                    </div>
                </div>
            </td>
        </tr>
    )
}