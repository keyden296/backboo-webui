const express = require('express'),
      router = express.Router(),
      { signup, login, rate } = require('./../controllers/usersCtrl')

router.post('/signup', signup)
router.post('/login/:id', login)
// router.post('/rate:id', rate)

module.exports = router