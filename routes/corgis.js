const router = require('express').Router()
const corgisCtrl = require('../controllers/corgis.js')

router.post('/', corgisCtrl.create)
router.get('/', corgisCtrl.index)

module.exports = router  