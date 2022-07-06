const Patient = require('./Patient')

exports.index = async function () {
    return await Patient.findAll()
}

exports.show = async function (idPatient) {
    return await Patient.findByPk(idPatient)
}

exports.store = async function (patientData) {
    return await Patient.create(patientData)
}

exports.update = async function (patient, patientData) {
    return await patient.update(patientData)
}

exports.delete = async function (patient) {
    return await patient.destroy()
}