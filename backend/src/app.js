import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/api/health', (_request, response) => {
  response.status(200).json({
    status: 'ok',
    message: 'FlowForge API is running',
  })
})

app.listen(port, () => {
  console.log(`FlowForge API listening on port ${port}`)
})
