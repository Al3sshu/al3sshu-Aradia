const { hash } = require('simple-stateless-auth-library')
const { createUser } = require('../models/auth')
const errors = require('../misc/error')

module.exports = (db) => async (req, res, next) => {
    const { username, password, email, brithdate } = req.body

    console.info('>', username, password, email, brithdate)

    const encrypted = await hash.encrypt(password)

    const response = await createUser(await db)(username, encrypted)

    if (!response.ok) return next(errors[500])

    res.status(200).json({
        success: true,
    })
}