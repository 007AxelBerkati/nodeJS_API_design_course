import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

// Middleware
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// middleware
const log = (req, res, next) => {
  console.log('Logging')
  next()
}

// Routing and sub route
router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})

// cats
const routes = [
  'get /cat',
  'get /cat/:id',
  'post /cat',
  'put /cat/:id',
  'delete /cat/:id'
]

router
  .route('/cat')
  .get()
  .post()

router
  .route('/cat/:id')
  .get()
  .post()
  .put()
  .delete()

app.use('/api', router)

// CRUD
app.get('/', (req, res, next) => {
  // res.send({ data: 1 })
  next()
})

app.get('/', (req, res) => {
  res.send({ data: 2 })
})

app.put('/data', (req, res) => { })

app.delete('/data')

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'oke' })
})

app.get('/data', [log, log, log], (req, res) => {
  res.send({ message: 'hello' })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('Server is on 3000')
  })
}
