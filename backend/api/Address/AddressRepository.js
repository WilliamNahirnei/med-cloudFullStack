const Address = require('./Address')

exports.index = async function () {
    return await Address.findAll()
}

exports.show = async function (idAddress) {
    return await Address.findByPk(idAddress)
}

exports.store = async function (addressData, options = null) {
    return await Address.create(addressData, options)
}

exports.update = async function (Address, addressData, options) {
    return await Address.update(addressData, options)
}

exports.delete = async function (Address, options) {
    return await Address.destroy()
}