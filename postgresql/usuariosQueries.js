const Pool = require('pg').Pool

const pool = new Pool({
  user: 'admin',
  host: 'sl-us-wdc-1-portal.1.dblayer.com',
  database: 'devLab',
  password: 'YOYUAXLAKUUWNTBO',
  port: 16625,
})


const getUsuarios = (request, response) => {
  pool.query('SELECT * FROM usuarios ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUsuarioById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM usuarios WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUsuario = (request, response) => {
  const { nombre, email } = request.body

  pool.query('INSERT INTO usuarios ( nombre, email) VALUES ( $1, $2) RETURNING id', [nombre, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(results.rows)
  })
}

module.exports = {
  getUsuarios,
  getUsuarioById,
  createUsuario
}
