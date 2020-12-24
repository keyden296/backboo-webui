//rutas del modulo experiences
const express = require('express'),
      router = express.Router(),
      //importar las funciones del controlador
      { all, ranking, detail, create, countExperiences } = require('./../controllers/experienceCtrl')

//funciones de controlador
router.get('/', all) //obtener todas las experiencias
router.get('/ranking', ranking )
router.get('/detail/:id', detail)
router.post('/', create)
router.get('/count', countExperiences)

module.exports = router