import express from 'express'

const SnippetsRouter = express.Router()

SnippetsRouter.post('/new', (req, res) => {
  res.send(req.params)
})

SnippetsRouter.get('/', (req, res) => {
  res.send({ thats: "right" })
})
export default SnippetsRouter