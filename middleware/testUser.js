const { BadRequestError } = require("../errors")

const checkIfTestUser = (req, res, next) => {
    if (req.user.testUser) {
        throw new BadRequestError('Change the account to use CRUD operations')
    }
    next()
}
module.exports = checkIfTestUser