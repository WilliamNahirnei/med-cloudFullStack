import React, { useEffect, useState, } from 'react';
import PatientStatus from "./PatientStatus"
import { getPatient } from '../../api/patient-api'

export default function PatientDataForm(props) {
    const idPatient = props.idPatient


    const [patientData, setPatientData] = useState(
        {
            fullName: "",
            birthDate: "",
            CPF: "",
            email: "",
            status: "",

            number:"",
            observation: "",
            street: "",
            neighborhood: "",
            city: "",
            state: "",
            country: "Brasil"
        }
    );

    useEffect(() => {
        loadPatientData(idPatient)
      }, [idPatient]);

    async function loadPatientData (idPatient) {
        const response = await getPatient(idPatient)
        const patientData = {
            fullName: response.patient.PatientFullName,
            CPF: response.patient.PatientCPF,
            email: response.patient.PatientEmail,
            birthDate: response.patient.PatientBirthDate,
            status: response.patient.PatientStatus
        }
        setPatientData(patientData)
    }

    return (
        <div className="row m-3">
            <div className="card col-6 m-1">
                <div className="row">
                    <div className="col-6">
                        <div className="row"><h6>Nome Completo: </h6></div>
                        <div className="row"><span>{patientData.fullName}</span></div>
                    </div>
                    <div className="col-6">
                        <div className="row"><h6>Data de nascimento: </h6></div>
                        <div className="row"><span>{patientData.birthDate}</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row"><h6>CPF: </h6></div>
                        <div className="row"><span>{patientData.CPF}</span></div>
                    </div>
                    <div className="col-6">
                        <div className="row"><h6>E-MAIL: </h6></div>
                        <span>{patientData.email}</span>
                    </div>
                </div>
                <div className='m-2'>
                    <PatientStatus idPatient="1" status={patientData.status} reloadParent={loadPatientData} />
                </div>
            </div>
            <div className="card col-5 m-1">
                <div className="row">
                    <div className="col-6">
                        <div className="row"><h6>Rua: </h6></div>
                        <div className="row"><span>Alzemiro delgado</span></div>
                    </div>
                    <div className="col-6">
                        <div className="row"><h6>Numero:</h6></div>
                        <span>1314</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row"><h6>Observação: </h6></div>
                        <div className="row"><span>Perto de abcd</span></div>
                    </div>
                    <div className="col-6">
                        <div className="row"><h6>Bairro: </h6></div>
                        <span>Boqueirão</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row"><h6>Cidade: </h6></div>
                        <div className="row"><span>Guarapuava</span></div>
                    </div>
                    <div className="col-6">
                        <div className="row"><h6>Estado: </h6></div>
                        <span>Paraná</span>
                    </div>
                </div>
                <div className="row">
                    <div className="row"><h6>País</h6></div>
                    <span>Brasil</span>
                </div>
            </div>
        </div>
    )
}