const PatientSerivce = require('./PatientService')

module.exports.index = function (request, response) {
    PatientSerivce.index(request)
}