const moment = require("moment")

validations = {}

exports.validateRequest = function (request, validationList) {
    const errorList = await iterateAtributes(request,validationList)

    if (errorList.length > 0)
        throw new AcceptableExeption(true, 'Unprocessable Entity', errorList, codeForRequest = 422)
}

function iterateAtributes (request, atributeList) {
    const atributesWithErros = []
    atributeList.forEach(atribute => {
        const atributeName = atribute.name
        const validationList = extractValidationList(atribute.validations)
        const atributeValue = getValueOfRequest(request, atributeName)
        requiredIndex = required(validationList)
        nullableIndex = nullable(validationList)


        const AtributeErrors = {}
        AtributeErrors[atributeName] = []

        haveAtribute = haveAtributeInRequest(request, atributeName)
        if (requiredIndex >= 0) {
            if(!haveAtribute)
                AtributeErrors[atributeName].push('É obrigatorio')

            validationList.splice(requiredIndex, 1)
        }
        if (haveAtribute) {
            if (nullableIndex < 0 && !atributeValue) {
                AtributeErrors[atributeName].push('Não pode ser Nulo')
            }
            if (atributeValue) {
                if(nullableIndex >= 0)
                    validationList.splice(nullableIndex, 1)

                const errosofAtribute = iterateValidationList(validationList, atributeValue)
                AtributeErrors[atributeName] =  AtributeErrors[atributeName].concat(errosofAtribute)
            }
        }
        if (atributeHaveErrors(AtributeErrors[atributeName]))
        atributesWithErros.push(AtributeErrors)
    });
    return atributesWithErros
}

function iterateValidationList (validationList, atributeValue) {
    const errorsInAtribute = []
    validationList.forEach(atribute => {
        errorsInAtribute.push(executeValidation(atribute, atributeValue))
    })
    return errorsInAtribute
}

function extractValidationList (validationStringList) {
    const validationList = validationStringList.split('|')
    return validationList
}

function extractValidationInformation (validation) {
    const validationData = validation.split(':')
    return {
        validationName: validationData[0],
        validationParams: extractValidationParams(validationData[1])
    }
}

function executeValidation (atribute, atributeValue) {
    const validationData = extractValidationInformation(atribute)
    return validations[validationData.validationName](atributeValue, ...(validationData.validationParams))
}

function extractValidationParams (stringParams) {
    return stringParams.split(',')
}

function haveAtributeInRequest(request, paramName) {
    return haveAtributeInSpecificLocaleRequest(request, 'body', paramName) || haveAtributeInSpecificLocaleRequest(request, 'query', paramName) || haveAtributeInSpecificLocaleRequest(request, 'params', paramName)
}

function haveAtributeInSpecificLocaleRequest (request, localeInRequest, paramName) {
    return !!request[localeInRequest][paramName]
}

function getValueOfRequest (request, paramName) {
    return request['body'][paramName] || request['query'][paramName] || request['params'][paramName] || null
}

function atributeHaveErrors(AtributeErrors) {
    return AtributeErrors.length >0
}

function atributeListHaveErrors(ListAtributesWithErrors) {
    return ListAtributesWithErrors.length >0
}

validations.min = function min (value, minValue) {
    let validationMessage = ''
    if(isString(value))
        validationMessage = minString(value, minValue)
    else if(isNumber(value))
        validationMessage = minNumber(value, minValue)
    return validationMessage
}


validations.max = function max (value, maxValue) {

    if(isString(value))
        return maxString(value, maxValue)
    else if(isNumber(value))
        return maxNumber(value, maxValue)
}

function maxString (value, maxValueParam) {
    if (!maxValue(value.length, maxValueParam))
        return `deve ter no maximo ${maxValueParam} caracteres`
}

function minString (value, minValueParam) {
    if (!minValue(value.length, minValueParam))
        return `deve ter no minimo ${minValueParam} caracteres`
}

function minNumber (value, minValueParam) {
    if (!minValue(value, minValueParam))
        return `deve ser no minimo ${minValueParam}`
}

function maxNumber (value, maxValueParam) {
    if (!maxValue(value, maxValueParam))
        return `deve ser no maximo ${maxValueParam}`
}

function minValue (value, minValue) {
    return value >= minValue
}

function maxValue (value, maxValue) {
    return value <= maxValue
}

function equal (value, equalValue) {
    return value === equalValue
}

validations.size = function size (value, size) {
    if (value === size)
        return `deve ter tamanho ${size}`
}

function type (value, expectedType) {
    return typeof(value) == expectedType
}

validations.boolean = function boolean (value) {
    if (!isBoolean(value))
        return 'deve ser no do tipo booleano'
}

function isBoolean(value) {
    return type(value, "boolean")
}

validations.number = function number (value) {
    if (!isNumber)
        return 'deve ser no do tipo numerico'
}

function isNumber(value) {
    return type(value, "number")
}

validations.string = function string (value) {
    if (!isString(value))
        return 'deve ser no do tipo string'
}

function isString(value) {
    return type(value, "string")
}

validations.date = function date (value, format) {
    if (!isValidDate(value, format))
        return 'tem formato de data invalido'
}

function isValidDate(value, format) {
    return moment(value, format).isValid()
}

validations.email = function email (value) {
    if (!isValidEmail(value))
        return 'formato de email invalido'
}

function isValidEmail() {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    return emailRegex.test(value)
}

function required (validationList) {
    const requiredIndex = validationList.indexOf('required')
    return requiredIndex
}

function nullable (validationList) {
    const nullableIndex = validationList.indexOf('nullable')
    return nullableIndex
}