const router = require('express').Router()
const corgisCtrl = require('../controllers/corgis.js')

router.post('/', corgisCtrl.create)

module.exports = router  