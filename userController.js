const router = require('express').Router()
const { register } = require('./services/user.js')
router.post('/register', async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    
    //vadidations must be not in try/catch
    try {
        if (!email.trim()) {
            throw new Error('Email is required')
        }
        if (password.trim().length < 2) {
            throw new Error('Password must be at least 2 characters long')
        }
        const data = await register(email.toLocaleLowerCase().trim(), password.trim())
        //console.log(res.json(data))
        res.json(data)
    } catch (err) {
        res.status(err.status || 400).json({message:err.message})
    }

})
router.post('/login', (req, res) => {
    //console.log(req.body)
    res.end()
})
module.exports = router