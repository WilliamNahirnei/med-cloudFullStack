import React from "react"
import { Link } from "react-router-dom"
import { AiFillEdit, AiFillEye, } from "react-icons/ai";

import DeletePatient from './DeletePatient'

export default function PatientLine(props) {
    const patient = props.patient
    const searchPatients = props.searchPatients

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
                        <DeletePatient idPatient={patient.idPatient} searchPatients={searchPatients} />
                    </div>
                </div>
            </td>
        </tr>
    )
}