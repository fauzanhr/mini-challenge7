const express = require('express')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(express.static(__dirname + '/public'))

var user_session = {
    id: undefined
}

var homeRouter = require('./routers/home')
homeRouter.params = user_session

app.use('/', homeRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})