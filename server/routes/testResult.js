const router = require('express').Router()
const testResult = require('../controllers/testResultController')

router.get('/', testResult.getAllResult)
router.post('/', testResult.addTestResult)
router.get('/:id', testResult.getTestResultId)

module.exports = router
