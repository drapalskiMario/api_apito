import express, { json } from 'express'
import cors from 'cors'
import postRouter from './routes/post-routes'
import donorRouter from './routes/donor-routes'
import 'dotenv/config'
import { connect } from 'mongoose'

const app = express()
const uriConnectionDB = process.env.URI_DB_CONNECT
const port = process.env.SERVER_PORT

app.use(json())
app.use(cors())
app.use('/api', postRouter)
app.use('/api', donorRouter)

async function main () {
  await connect(uriConnectionDB)
  console.log('Database connected')

  app.listen(Number(port) || 3000)
  console.log('Server Running')
}
main()
