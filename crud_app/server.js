// npm i express morgan nodemon ejs body-parser dotenv mongoose axios
// model view controller

const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const ejs = require('ejs')

const app = express()

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));

// parse request to body parser

app.use(bodyparser.urlencoded({extended:true}))

// set view engine (template engine)
app.set('view engine', 'ejs');
 // app.set('views', path.resolve(__dirname, "views/ejs" )  use this line if templates are in a different folder other than "views"
 
//load assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))



app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.listen(PORT, () => (console.log(`Server is running on http://localhost:${PORT}`)))


