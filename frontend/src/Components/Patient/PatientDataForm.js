import React from "react"

export default function PatientDataForm() {
    return (
        <div className="row m-3">
            <div className="card col-6 m-1">
                <div className="row">
                    <div className="col-6">
                        <div className="row"><span>Nome Completo</span></div>
                        <div className="row"><span>"fullName"</span></div>
                    </div>
                    <div className="col-6">
                        <div className="row"><span>Data de nascimento</span></div>
                        <div className="row"><span>"birthDate": "1999-11-27",</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row"><span>CPF</span></div>
                        <div className="row"><span>11005074973</span></div>
                    </div>
                    <div className="col-6">
                        <div className="row"><span>E-MAIL</span></div>
                        <span>"email": "teste@teste.com",</span>
                    </div>
                </div>
            </div>
            <div className="card col-6 m-1">
                <div className="row">
                    <div className="col-6">
                        <div className="row"><span>Rua</span></div>
                        <div className="row"><span>Alzemiro delgado</span></div>
                    </div>
                    <div className="col-6">
                        <div className="row"><span>Numero:</span></div>
                        <span>1314</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row"><span>Observação</span></div>
                        <div className="row"><span>Perto de abcd</span></div>
                    </div>
                    <div className="col-6">
                        <div className="row"><span>Bairro:</span></div>
                        <span>Boqueirão</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row"><span>Cidade:</span></div>
                        <div className="row"><span>Guarapuava</span></div>
                    </div>
                    <div className="col-6">
                        <div className="row"><span>Estado:</span></div>
                        <span>Paraná</span>
                    </div>
                </div>
                <div className="row">
                    <span>"Brasil"</span>
                </div>
            </div>
        </div>
    )
}