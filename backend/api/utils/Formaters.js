exports.index = function(listOfData) {
    return {
        patients: listOfData,
        total: listOfData.length
    }
}

exports.show = function(listOfData) {
    return {
        patient: listOfData,
    }
}