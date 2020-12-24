const express = require('express'),
      router = express.Router(),
      {create, erase, update, rate, get} = require('./../controllers/bookingCtrl'),
      authVerify = require('../middleware/authVerify')
    //   authVerify
// router.post('/:id', authVerify, create)
router.post('/:id',  create)
router.delete('/:id', authVerify, erase)
router.put('/:id', authVerify, update)
router.post('/rate/:id', rate)
// router.post('/rate/', authVerify, rate)
router.get('/getIdBooking/:id', authVerify, get)

module.exports = router