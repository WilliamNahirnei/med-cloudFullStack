const AddressRepository = require('./AddressRepository')
const RequestUtils = require('../utils/RequestUtils')
const Formater = require('../utils/Formaters')
const Preparer = require('./AddressPrepare')

exports.index = async function (request) {
    const requestParams = RequestUtils.getRequestParams(request)
    return Formater.index(await AddressRepository.index())
}

exports.show = async function (request, response) {
    const requestParams = RequestUtils.getRequestParams(request)
    const address = await AddressRepository.show(requestParams.idAddress)

    if (!haveAddress(address)) {
        throw new AcceptableExeption(true,'NOT FOUND', errorListMessage = ['Address Not Found'], codeForRequest = 404)
    }

    return Formater.show(address)
}

exports.store = async function (request, options = null) {
    const requestParams = RequestUtils.getRequestParams(request)
    const preparedData = Preparer.prepareToStore(requestParams)

    const address = await AddressRepository.store(preparedData, options)

    return address
}

exports.update = async function (request, options = null) {
    const requestParams = RequestUtils.getRequestParams(request)
    
    const address = await AddressRepository.show(requestParams.idAddress)

    if (!haveAddress(address)) {
        throw new AcceptableExeption(true,'NOT FOUND', errorListMessage = ['Address Not Found'], codeForRequest = 404)
    }

    const preparedData = Preparer.prepareToUpdate(address, requestParams)

    return await AddressRepository.update(address, preparedData)
}

exports.delete = async function (request, options = null) {
    const requestParams = RequestUtils.getRequestParams(request)
    const Address = await AddressRepository.show(requestParams.idAddress)

    if (!haveAddress(Address)) {
        throw new AcceptableExeption(true,'NOT FOUND', errorListMessage = ['Address Not Found'], codeForRequest = 404)
    }

    return await AddressRepository.delete(Address, options)
}

function haveAddress(Address) {
    return !!Address
}