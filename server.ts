import express, { Express } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const host = process.env.HOST
const port = process.env.PORT

app.listen(port, () => {
    console.log(`[Server]: Server is running on port http://${host}:${port}`)
})  