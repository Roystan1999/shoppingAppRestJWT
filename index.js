const express = require('express')
const mongoose = require('mongoose')
const cors= require('cors')
const port = 3001

const app = express()

//cors level middleware
app.use(cors())

const dbUrl = 'mongodb+srv://Roy:roy1234@cluster0.yuo7q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(
    dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    err => {
        if (!err) {
            console.log("DB Conneced Successfully")
        }
        else {
            console.log('DB not Connected')
            console.log(err);
        }
    })


const productRoutes = require('./routes/product')


const userRoutes = require('./routes/users')

//body parse middleware
app.use(express.urlencoded({ extended: true }))


//json middleware
app.use(express.json())


//router level middleware

app.use('/products', productRoutes)

app.use('/users', userRoutes)

app.get('/error', (req, res) => {
    res.status(500).send('something went wrong')
})

app.listen(port, () => {
    console.log(`server ${port}`)
})