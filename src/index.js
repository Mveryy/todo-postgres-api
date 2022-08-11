const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')
require('dotenv').config()

const PORT = process.env.PORT || 3333

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
})

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tasks')
    res.status(200).send(rows)
  } catch (error) {
    return res.status(400).send(error)
  }
})

app.post('/task', async (req, res) => {
  const {description, done} = req.body
  try {
    const newTask = await pool.query('INSERT INTO tasks (description, done) VALUES ($1, $2) RETURNING *', [ description, done])
    return res.status(200).send(newTask.rows)
  } catch (error) {
    return res.status(400).send(error)
  }
})

app.patch('/task/:id'), async (req, res) => {
  const {id} = req.params
  const data = req.body
  try {
    const updatedTask = await pool.query('UPDATE tasks SET done = ($1) WHERE id = ($2) RETURNING *', [data.done, id])
    return res.status(200).send(updatedTask.rows)
  } catch (error) {
    return res.status(400).send(error)
  }
}

app.delete('/task/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deletedTask = await pool.query('DELETE FROM tasks WHERE id = ($1) RETURNING *', [id])
    return res.status(200).send(deletedTask.rows)
  } catch (error) {
    return res.status(400).send(error)
  }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))