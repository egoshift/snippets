import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import logger from './logger'

dotenv.config()

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.listen(process.env.PORT, () => {
  logger.info(`listening on port ${process.env.PORT}`)
})

app.get('/', (request, response) => {
  response.send({ thats: 'right' })
})
