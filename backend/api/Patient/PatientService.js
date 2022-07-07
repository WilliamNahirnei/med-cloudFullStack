const PatientRepository = require('./PatientRepository')
const RequestUtils = require('../utils/RequestUtils')
const Formater = require('../utils/Formaters')
const Preparer = require('./PatientPrepare')
const sequelize = require('../../database/database')
const AddressSerivce = require('../Address/AddressService')

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

    const patient = await sequelize.transaction(async (transaction) => {
        options = {transaction: transaction}

        const address = await AddressSerivce.store(request, options)

        requestParams.idAddress = address.idAddress

        const preparedData = Preparer.prepareToStore(requestParams)

        const patient = await PatientRepository.store(preparedData, {transaction})
        patient.address = address
        console.log(patient)

        return patient
    })
    return patient
}

exports.update = async function (request, response) {
    const requestParams = RequestUtils.getRequestParams(request)
    
    const patient = await PatientRepository.show(requestParams.idPatient)

    if (!havePatient(patient)) {
        response.status(404).end()
        return
    }
    request.body.idAddress = patient.address_id
    return await sequelize.transaction(async (transaction) => {
        options = {transaction: transaction}

        const preparedData = Preparer.prepareToUpdate(patient, requestParams)

        const addressUpdate = await AddressSerivce.update(request, options)

        if (!addressUpdate) {
            response.status(404).end()
            return
        }

        return await PatientRepository.update(patient, preparedData)
    })
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

    request.body.idAddress = patient.address_id

    return await sequelize.transaction(async (transaction) => {
        options = {transaction: transaction}

        const patientDelete = await PatientRepository.delete(patient)
        const addressDelete = await AddressSerivce.delete(request, options)

        if (!addressDelete) {
            response.status(404).end()
            return
        }

        return patientDelete
    })
}

function havePatient(patient) {
    return !!patient
}