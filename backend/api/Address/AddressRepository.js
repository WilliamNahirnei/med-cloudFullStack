const Address = require('./Address')

exports.index = async function () {
    return await Address.findAll()
}

exports.show = async function (idAddress) {
    return await Address.findByPk(idAddress)
}

exports.store = async function (addressData) {
    return await Address.create(addressData)
}

exports.update = async function (Address, addressData) {
    return await Address.update(addressData)
}

exports.delete = async function (Address) {
    return await Address.destroy()
}