exports.validateToStore = function () {
    return [
        {name: 'fullName', validations:'required|string|min:4|max:50'},
        {name: 'birthDate', validations:'required|date:YYYY-MM-DD'},
        {name: 'CPF', validations:'required|string|size:11'},
        {name: 'email', validations:'required|string|max:50|email'},
        {name: "number", validations:'required|string|max:6'},
        {name: "observation", validations:'string|max:100'},
        {name: "street", validations:'required|string|min:4|max:100'},
        {name: "neighborhood", validations:'required|string|min:4|max:100'},
        {name: "city", validations:'required|string|min:4|max:150'},
        {name: "state", validations:'required|string|min:2|max:100'},
        {name: "country", validations:'required|string|min:4|max:100'},
    ]
}

exports.validateToUpdate = function () {
    return [
        {name: 'fullName', validations:'string|min:4|max:50'},
        {name: 'birthDate', validations:'date:YYYY-MM-DD'},
        {name: 'CPF', validations:'string|size:11'},
        {name: 'email', validations:'string|max:50|email'},
        {name: "number", validations:'string|max:6'},
        {name: "observation", validations:'string|max:100'},
        {name: "street", validations:'string|min:4|max:100'},
        {name: "neighborhood", validations:'string|min:4|max:100'},
        {name: "city", validations:'string|min:4|max:150'},
        {name: "state", validations:'string|min:2|max:100'},
        {name: "country", validations:'string|min:4|max:100'},
    ]
}