const PatientSerivce = require('./PatientService')

exports.index = async function (request, response) {
    const patientList = await PatientSerivce.index(request)
    response.send(patientList)
}

exports.show = async function (request, response) {
    const patient = await PatientSerivce.show(request, response)
    response.send(patient)
}

exports.store = async function (request, response) {
    const patient = await PatientSerivce.store(request)
    response.send(patient)
}

exports.update = async function (request, response) {
    const patient = await PatientSerivce.update(request, response)
    response.send(patient)
}

exports.deactive = async function (request, response) {
    const patient = await PatientSerivce.deactivePatient(request, response)
    response.send(patient)
}

exports.active = async function (request, response) {
    const patient = await PatientSerivce.activePatient(request, response)
    response.send(patient)
}

exports.delete = async function (request, response) {
    const patient = await PatientSerivce.delete(request, response)
    response.send(patient)
}