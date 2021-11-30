const express = require('express')
const mongoose = require('mongoose')

const cors = require('./cors.js')
const controllers = require('./controllers.js')

start()
async function start(){
    await new Promise((resolve,reject)=>{
        mongoose.connect('mongodb://localhost:27017/caves')
        const db = mongoose.connection
        db.once('open',()=>{
            console.log('Database connected');
            resolve()
        })
        db.on('error',(err)=>{
            console.log('Error');
            reject(err)
        })
    })
    
  
    const app = express()

    app.use(cors())
    app.use(express.json())
    app.use('/data/catalog', controllers)

    app.get('/', (req, res) => {
        res.send('hi')
    })

    app.listen(5000, () => console.log('Server is listening on port 5000'))
}
