exports.prepareToStore = function (data) {
    return {
        Number: data.number,
        Observation: data.observation,
        Street: data.street,
        Neighborhood: data.neighborhood,
        City: data.city,
        State: data.state,
        Country: data.country
    }
}

exports.prepareToUpdate = function (address, data) {
    return {

        Number: data.number ? data.number : address.number,
        Observation: data.observation ? data.observation : address.Observation,
        Street: data.street ? data.street : address.Street,
        Neighborhood: data.neighborhood ? data.neighborhood : address.Neighborhood,
        City: data.city ? data.city : address.City,
        State: data.state ? data.state : address.State,
        Country: data.country ? data.country : address.country,
    }
}