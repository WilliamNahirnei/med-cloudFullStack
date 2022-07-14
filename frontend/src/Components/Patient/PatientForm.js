import React, { useState, useEffect } from 'react';

import { getPatient, storePatient, updatePatient } from '../../api/patient-api'

export default function PatientForm(props) {

    const idPatient = props.idPatient
    const formType = props.type

    const [patientData, setPatientData] = useState(
        {
            fullName: "",
            birthDate: "",
            CPF: "",
            email: "",

            number:"",
            observation: "",
            street: "",
            neighborhood: "",
            city: "",
            state: "",
            country: "Brasil"
        }
    );

    function changePatientData (event) {
        const { id, value } = event.target;
        setPatientData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    useEffect(() => {
        if (isEditForm())
            functionLoadPatientData(idPatient)
      }, []);

    async function functionLoadPatientData (idPatient) {
        const response = await getPatient(idPatient)
        const patientData = {
            fullName: response.patient.PatientFullName,
            CPF: response.patient.PatientCPF,
            email: response.patient.PatientEmail,
            birthDate: response.patient.PatientBirthDate,
        }
        setPatientData(patientData)
    }

    function submitForm(event) {
        event.preventDefault();
        savePatient(patientData)
    }

    async function savePatient (patientData) {
        if (isEditForm())
            await updatePatient(idPatient, patientData)
        else
            await storePatient(patientData)
    }

    function isEditForm () {
        return formType == 'edition'
    }

    return (
        <div className="m-3">
            <form onSubmit={submitForm}>
                <div className="m-3">
                    <label className="form-label">Nome Completo</label>
                    <input id="fullName" type="text" className="form-control" placeholder="Nome completo" value={patientData.fullName} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">CPF</label>
                    <input type="text" className="form-control" id="CPF" placeholder="CPF" value={patientData.CPF} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">e-mail</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" value={patientData.email} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Data de nascimento</label>
                    <input type="date" className="form-control" id="birthDate" value={patientData.birthDate} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Rua</label>
                    <input type="text" className="form-control" id="street" placeholder="Rua central" value={patientData.street} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Numero</label>
                    <input type="text" className="form-control" id="number" placeholder="230" value={patientData.number} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Bairro</label>
                    <input type="text" className="form-control" id="neighborhood" placeholder="centro" value={patientData.neighborhood} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Observação</label>
                    <input type="text" className="form-control" id="observation" placeholder="predio 2" value={patientData.observation} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Cidade</label>
                    <input type="text" className="form-control" id="city" placeholder="São Paulo" value={patientData.city} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Estado</label>
                    <input type="text" className="form-control" id="state" placeholder="Minas Gerais" value={patientData.state} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Pais</label>
                    <input type="text" className="form-control" id="country" placeholder="Brasil" value={patientData.country} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <input type="submit" className="form-control" id="sendData"/>
                </div>
            </form>
        </div>
    )
}