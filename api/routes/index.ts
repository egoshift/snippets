import express from 'express'

import SnippetsRouter from './Snippets'

const Routes = express.Router()

Routes.use('/snippets', SnippetsRouter)

export default Routes