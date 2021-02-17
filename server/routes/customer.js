const router = require('express').Router()
const CustCtrl = require('../controllers/customerController')

router.post('/', CustCtrl.newCustomer)
router.get('/', CustCtrl.getCustomers)
router.get('/:id', CustCtrl.findCustById)
router.delete('/:id', CustCtrl.delCustomer)
router.put('/:id', CustCtrl.updateCustomer)

module.exports = router

