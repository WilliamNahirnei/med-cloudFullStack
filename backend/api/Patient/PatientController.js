const PatientSerivce = require('./PatientService')

exports.index = async function (request, response) {
    const patientList = await PatientSerivce.index(request)
    response.send(patientList)
}

exports.show = async function (request, response) {
    try {
        const patient = await PatientSerivce.show(request, response)
        response.send(patient)
    } catch (error) {
        if (error?.codeForRequest)
            response.status(error.codeForRequest).send({error:error.type, messages:error.errorListMessage})
        else
            response.status(500).send({messagess:['internal server error']})
    }
}

exports.store = async function (request, response) {
    try{
        const patient = await PatientSerivce.store(request)
        response.send(patient)
    } catch (error) {
        if (error?.codeForRequest)
            response.status(error.codeForRequest).send({error:error.type, messages:error.errorListMessage})
        else
            response.status(500).send({messagess:['internal server error']})
    }
}

exports.update = async function (request, response) {
    try {
        const patient = await PatientSerivce.update(request, response)
        response.send(patient)
    } catch (error) {
        if (error?.codeForRequest)
            response.status(error.codeForRequest).send({error:error.type, messages:error.errorListMessage})
        else
            response.status(500).send({messagess:['internal server error']})
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
            response.status(500).send({messagess:['internal server error']})
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
            response.status(500).send({messagess:['internal server error']})
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
            response.status(500).send({messagess:['internal server error']})
    }
}