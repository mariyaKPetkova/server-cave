const router = require('express').Router()
const caveService = require('./services/caves.js')
router.get('/',async (req,res)=>{
    const data = await caveService.getAll()
    res.json(data)
})
router.get('/:id',async (req,res)=>{
    const data = await caveService.getOne()
    res.json(data)
})
module.exports = router