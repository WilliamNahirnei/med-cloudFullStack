const PatientRepository = require('./PatientRepository')
const RequestUtils = require('../utils/RequestUtils')
const Formater = require('../utils/Formaters')
const Preparer = require('./PatientPrepare')
const sequelize = require('../../database/database')
const AddressSerivce = require('../Address/AddressService')
const AcceptableExeption = require('../CustomExeptions/AccptableExeption')

exports.index = async function (request) {
    const requestParams = RequestUtils.getRequestParams(request)
    return Formater.index(await PatientRepository.index())
}

exports.show = async function (request, response) {
    const requestParams = RequestUtils.getRequestParams(request)
    const patient = await PatientRepository.show(requestParams.idPatient)

    if (!havePatient(patient)) {
        throw new AcceptableExeption(true,'NOT FOUND', errorListMessage = ['PatientNotFound'], codeForRequest = 404)
    }

    return Formater.show(patient)
}

exports.store = async function (request) {
    const requestParams = RequestUtils.getRequestParams(request)

    const patient = await sequelize.transaction(async (transaction) => {
        options = {transaction: transaction}

        const address = await AddressSerivce.store(request, options)

        requestParams.idAddress = address.idAddress

        const preparedData = Preparer.prepareToStore(requestParams)

        const patient = await PatientRepository.store(preparedData, {transaction})
        patient.address = address

        return patient
    })
    return patient
}

exports.update = async function (request, response) {
    const requestParams = RequestUtils.getRequestParams(request)
    
    const patient = await PatientRepository.show(requestParams.idPatient)

    if (!havePatient(patient)) {
        throw new AcceptableExeption(true,'NOT FOUND', errorListMessage = ['PatientNotFound'], codeForRequest = 404)
    }
    request.body.idAddress = patient.address_id
    return await sequelize.transaction(async (transaction) => {
        options = {transaction: transaction}

        const preparedData = Preparer.prepareToUpdate(patient, requestParams)

        const address = await AddressSerivce.update(request, options)
        patient.address = address

        return await PatientRepository.update(patient, preparedData)
    })
}

exports.deactivePatient = async function (request, response) {
    const requestParams = RequestUtils.getRequestParams(request)

    const patient = await PatientRepository.show(requestParams.idPatient)

    if (!havePatient(patient)) {
        throw new AcceptableExeption(true,'NOT FOUND', errorListMessage = ['PatientNotFound'], codeForRequest = 404)
    }
    
    const preparedData = Preparer.prepareToDeactivePatient()

    return await PatientRepository.update(patient, preparedData)
}

exports.activePatient = async function (request, response) {
    const requestParams = RequestUtils.getRequestParams(request)
    
    const patient = await PatientRepository.show(requestParams.idPatient)

    if (!havePatient(patient)) {
        throw new AcceptableExeption(true,'NOT FOUND', errorListMessage = ['PatientNotFound'], codeForRequest = 404)
    }

    const preparedData = Preparer.prepareToActivePatient()

    return await PatientRepository.update(patient, preparedData)
}

exports.delete = async function (request, response) {
    const requestParams = RequestUtils.getRequestParams(request)
    const patient = await PatientRepository.show(requestParams.idPatient)

    if (!havePatient(patient)) {
        throw new AcceptableExeption(true,'NOT FOUND', errorListMessage = ['PatientNotFound'], codeForRequest = 404)
    }

    request.body.idAddress = patient.address_id

    return await sequelize.transaction(async (transaction) => {
        options = {transaction: transaction}

        const patientDelete = await PatientRepository.delete(patient)
        await AddressSerivce.delete(request, options)

        return patientDelete
    })
}

function havePatient(patient) {
    return !!patient
}