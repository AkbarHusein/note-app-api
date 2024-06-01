import express, { Express } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import router from './routes'
import errorhandler from './middlewares/error-handler'

dotenv.config()

const app: Express = express()
const host = process.env.HOST
const port = process.env.PORT

app.use(morgan('tiny'))
app.use('/api', router)
app.use(errorhandler)

app.listen(port, () => {
    console.log(`[Server]: Server is running on port http://${host}:${port}`)
})  