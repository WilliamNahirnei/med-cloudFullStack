import React, { useState } from 'react';

export default function PatientForm() {

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
        console.log(id, value)
        setPatientData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    function submitForm(event) {
        event.preventDefault();
        console.log ("here")
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
                    <input type="text" className="form-control" id="cpf" placeholder="CPF" value={patientData.CPF} onChange={changePatientData} />
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
                    <input type="text" className="form-control" id="street" value={patientData.street} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Numero</label>
                    <input type="text" className="form-control" id="number" value={patientData.number} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Bairro</label>
                    <input type="text" className="form-control" id="street" value={patientData.neighborhood} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Observação</label>
                    <input type="text" className="form-control" id="observation" value={patientData.observation} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Cidade</label>
                    <input type="text" className="form-control" id="city" value={patientData.city} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Estado</label>
                    <input type="text" className="form-control" id="state" value={patientData.state} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <label className="form-label">Pais</label>
                    <input type="text" className="form-control" id="country" value={patientData.country} onChange={changePatientData} />
                </div>
                <div className="m-3">
                    <input type="submit" className="form-control" id="sendData"/>
                </div>
            </form>
        </div>
    )
}