import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import router from './resources/item/item.router'

export const app = express()

app.disable('x-powered-by')

// Middleware
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/item', router)

export const start = () => {
  app.listen(3000, () => {
    console.log('Server is on 3000')
  })
}
