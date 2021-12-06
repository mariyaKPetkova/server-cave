const { jwt } = require('jsonwebtoken')
const { SECRET } = require('../config.js')

module.exports = () => (req, res, next) => {
    const token = req.headers['x-authorization']
    //console.log(token)
    try {
        if (token) {
            const data = jwt.verify(token, SECRET)
            req.user = data
        }

        next()
    } catch (err) {
        res.status(401).json({ message: 'Invalid access token' })
    }
}