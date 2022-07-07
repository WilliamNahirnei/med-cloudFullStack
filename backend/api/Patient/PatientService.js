const PatientRepository = require('./PatientRepository')
const RequestUtils = require('../utils/RequestUtils')
const Formater = require('../utils/Formaters')
const Preparer = require('./PatientPrepare')

exports.index = async function (request) {
    const requestParams = RequestUtils.getRequestParams(request)
    return Formater.index(await PatientRepository.index())
}

exports.show = async function (request, response) {
    const requestParams = RequestUtils.getRequestParams(request)
    const patient = await PatientRepository.show(requestParams.idPatient)

    if (!havePatient(patient)) {
        response.status(404).end()
        return
    }

    return Formater.show(patient)
}

exports.store = async function (request) {
    const requestParams = RequestUtils.getRequestParams(request)
    const preparedData = Preparer.prepareToStore(requestParams)

    const patient = await PatientRepository.store(preparedData)

    return patient
}

exports.update = async function (request, response) {
    const requestParams = RequestUtils.getRequestParams(request)
    
    const patient = await PatientRepository.show(requestParams.idPatient)

    if (!havePatient(patient)) {
        response.status(404).end()
        return
    }

    const preparedData = Preparer.prepareToUpdate(patient, requestParams)

    return await PatientRepository.update(patient, preparedData)
}

exports.deactivePatient = async function (request, response) {
    const requestParams = RequestUtils.getRequestParams(request)

    const patient = await PatientRepository.show(requestParams.idPatient)

    if (!havePatient(patient)) {
        response.status(404).end()
        return
    }

    const preparedData = Preparer.prepareToDeactivePatient()

    return await PatientRepository.update(patient, preparedData)
}

exports.activePatient = async function (request, response) {
    const requestParams = RequestUtils.getRequestParams(request)
    
    const patient = await PatientRepository.show(requestParams.idPatient)

    if (!havePatient(patient)) {
        response.status(404).end()
        return
    }

    const preparedData = Preparer.prepareToActivePatient()

    return await PatientRepository.update(patient, preparedData)
}

exports.delete = async function (request, response) {
    const requestParams = RequestUtils.getRequestParams(request)
    const patient = await PatientRepository.show(requestParams.idPatient)

    if (!havePatient(patient)) {
        response.status(404).end()
        return
    }

    return await PatientRepository.delete(patient)
}

function havePatient(patient) {
    return !!patient
}