const router = require('express').Router()
const customerRouter = require('./customer')
const testResultRouter = require('./testResult')

router.use('/customers', customerRouter)
router.use('/test-result', testResultRouter)
module.exports = router