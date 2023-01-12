const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT ?? 8000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/api')

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))