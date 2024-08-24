import express from 'express'
import {port} from './config.js'
import {router as userRoutes} from './routes/users.routes.js'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(userRoutes)

app.listen(port, ()=>{
    console.log(`Server running in ${port}`)
})