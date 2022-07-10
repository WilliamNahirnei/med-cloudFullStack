const Address = require('../Address/Address')
const Patient = require('./Patient')

exports.index = async function () {
    return await Patient.findAll()
}

exports.show = async function (idPatient) {
    return await Patient.findByPk(idPatient)
}

exports.store = async function (patientData, options = null) {
    return await Patient.create(patientData, options)
}

exports.update = async function (patient, patientData, options = null) {
    return await patient.update(patientData, options)
}

exports.delete = async function (patient, options = null) {
    return await patient.destroy()
}