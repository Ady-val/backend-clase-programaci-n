const express = require('express');

const app = express.Router();

module.exports = app;

app.get('/', (req, res) => {

  res.json(
    {
      message: 'Funciona',
      nombre: 'Adal',
      materia: 'programación',
      lista_de_estudiantes: [
        {
          nombre: 'carlos',
          edad: '17'
        },
        {
          nombre: 'Alexis',
          edad: '18'
        },
        {
          nombre: 'Karely',
          edad: '17'
        },
        {
          nombre: 'Alexia',
          edad: '17'
        }
      ]
    }
  )
})

app.get('/mensaje', (req, res) => {

  res.send("Ruta recibida")
})