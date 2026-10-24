import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`FlowForge API listening on port ${port}`)
})
