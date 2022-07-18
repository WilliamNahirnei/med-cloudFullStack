const PatientSerivce = require('./PatientService')
const Validations = require('../validations/Validations')
const PatientRequest = require('./PatientRequest')

exports.index = async function (request, response) {
    try {
        const patientList = await PatientSerivce.index(request)
        response.send(patientList)
    } catch (error) {
        if (error?.codeForRequest)
            response.status(error.codeForRequest).send({error:error.type, messages:error.errorListMessage})
        else
            response.status(500).send({messages:['internal server error']})
    }
}

exports.show = async function (request, response) {
    try {
        const patient = await PatientSerivce.show(request, response)
        response.send(patient)
    } catch (error) {
        if (error?.codeForRequest)
            response.status(error.codeForRequest).send({error:error.type, messages:error.errorListMessage})
        else
            response.status(500).send({messages:['internal server error']})
    }
}

exports.store = async function (request, response) {
    try{
        await Validations.validateRequest(request, PatientRequest.validateToStore())
        const patient = await PatientSerivce.store(request)
        response.status(201).send(patient)
    } catch (error) {
        if (error?.codeForRequest)
            response.status(error.codeForRequest).send({error:error.type, messages:error.errorListMessage})
        else
            response.status(500).send({messages:['internal server error']})
    }
}

exports.update = async function (request, response) {
    try {
        await Validations.validateRequest(request, PatientRequest.validateToUpdate())
        const patient = await PatientSerivce.update(request, response)
        response.send(patient)
    } catch (error) {
        if (error?.codeForRequest)
            response.status(error.codeForRequest).send({error:error.type, messages:error.errorListMessage})
        else
            response.status(500).send({messages:['internal server error']})
    }
}

exports.deactive = async function (request, response) {
    try {
        const patient = await PatientSerivce.deactivePatient(request, response)
        response.send(patient)
    } catch (error) {
        if (error?.codeForRequest)
            response.status(error.codeForRequest).send({error:error.type, messages:error.errorListMessage})
        else
            response.status(500).send({messages:['internal server error']})
    }
}

exports.active = async function (request, response) {
    try {
        const patient = await PatientSerivce.activePatient(request, response)
        response.send(patient)
    } catch (error) {
        if (error?.codeForRequest)
            response.status(error.codeForRequest).send({error:error.type, messages:error.errorListMessage})
        else
            response.status(500).send({messages:['internal server error']})
    }
}

exports.delete = async function (request, response) {
    try {
        const patient = await PatientSerivce.delete(request, response)
        response.send(patient)
    } catch (error) {
        if (error?.codeForRequest)
            response.status(error.codeForRequest).send({error:error.type, messages:error.errorListMessage})
        else
            response.status(500).send({messages:['internal server error']})
    }
}