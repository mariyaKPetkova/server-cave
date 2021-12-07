const router = require('express').Router()
const { isAuht } = require('./middlewares/guards.js')
const caveService = require('./services/caves.js')

router.get('/', async (req, res) => {
    
    const data = await caveService.getAll()
    res.json(data)
})
router.post('/', isAuht(), async (req, res) => {
    const data = {
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        owner: req.user._id
    }
    const result = await caveService.create(data)
    res.status(201).json(result)
})
router.get('/:id', async (req, res) => {
    
    const data = await caveService.getOne(req.params.id)
    res.json(data)
})
router.delete('/:id', async (req, res) => {
    
    const data = await caveService.del(req.params.id)
    res.json(data)
})
module.exports = router