const userModel = require('../../../models/userModel')

const create = (object) => {
    return userModel.create(object)
}

module.exports = {
    create
}
