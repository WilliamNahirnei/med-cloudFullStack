exports.prepareToStore = function (data) {
    return {
        PatientFullName: data.fullName,
        PatientBirthDate: data.birthDate,
        PatientCPF: data.CPF,
        PatientEmail: data.email,
    }
}

exports.prepareToUpdate = function (patient, data) {
    return {
        PatientFullName: data.fullName ? data.fullName : patient.PatientFullName,
        PatientBirthDate: data.birthDate ? data.birthDate : patient.PatientBirthDate,
        PatientCPF: data.CPF ? data.CPF : patient.PatientCPF,
        PatientEmail: data.email ? data.email : patient.PatientEmail,
    }
}

exports.prepareToDeactivePatient = function () {
    return {
        PatientStatus: 'inactive'
    }
}

exports.prepareToActivePatient = function () {
    return {
        PatientStatus: 'active'
    }
}