const router = require('express').Router()
const testResult = require('../controllers/testResultController')

router.get('/:id', testResult.getTestResultByCustId)
router.post('/', testResult.addTestResult)

module.exports = router