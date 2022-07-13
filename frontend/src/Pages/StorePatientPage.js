import React from "react"

export default function StorePatientPage() {
    return (
        <div className="card">
            <h1>Novo Paciente</h1>
            <div className="m-3">
                <form>
                    <div className="m-3">
                        <label className="form-label">Nome Completo</label>
                        <input type="text" className="form-control" id="fullName" placeholder="Nome completo" />
                    </div>
                    <div className="m-3">
                        <label className="form-label">CPF</label>
                        <input type="text" className="form-control" id="cpf" placeholder="CPF" />
                    </div>
                    <div className="m-3">
                        <label className="form-label">e-mail</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="m-3">
                        <label className="form-label">Data de nascimento</label>
                        <input type="date" className="form-control" id="email"/>
                    </div>
                </form>
            </div>
        </div>
    )
}