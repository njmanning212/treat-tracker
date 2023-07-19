const router = require('express').Router()
const corgisCtrl = require('../controllers/corgis.js')

router.post('/', corgisCtrl.create)
router.get('/', corgisCtrl.index)
router.get('/:id', corgisCtrl.show)
router.put('/:id', corgisCtrl.update)
router.delete('/:id', corgisCtrl.delete)

module.exports = router  