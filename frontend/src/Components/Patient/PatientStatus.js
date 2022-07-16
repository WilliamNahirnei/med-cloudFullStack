import { Chip, Grid } from "@mui/material"
import React from "react"

import { activePatient, deactivePatient } from '../../api/patient-api'

export default function PatientStatus(props) {
    const idPatient = props.idPatient
    const patientStatus = props.status
    const reloadParent = props.reloadParent
    
    function isActivePatient() {
        return patientStatus === "active"
    }

    async function callActivePatient() {
        await activePatient(idPatient)
        reloadParent(idPatient)
    }

    async function callDeactivePatient() {
        await deactivePatient(idPatient)
        reloadParent(idPatient)
    }

    if (isActivePatient()) {
        return (
            <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item sm={6}>
                    <Chip label="Ativo" color="success" />
                </Grid>
                <Grid item sm={6}>
                    <button type="button" className="btn btn-danger" onClick={callDeactivePatient}>
                        Desativar
                    </button>
                </Grid>
            </Grid>
        )
    } 
    else {
        return (
            <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item sm={6}>
                    <Chip label="Inativo" color="error" />
                </Grid>
                <Grid item md={6}>
                    <button type="button" className="btn btn-success" onClick={callActivePatient}>
                        Ativar
                    </button>
                </Grid>
            </Grid>
        )
    }
}