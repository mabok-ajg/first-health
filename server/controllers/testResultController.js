const tr  = require('../models/testResult')
const Customer = require('../models/customer')
class TestResultController {
    static addTestResult(req, res, next) {
	    req.body.tanggal = new Date().toISOString().slice(0, 10)
        tr.addTestResult(req.body)
            .then(tr => {
                res.status(201).json(tr)
            })
            .catch(next)
    }

    static getTestResultByCustId(req, res, next) {
        tr.getTestResultByCustId(req.params.id)
            .then(tr => {
                if (!tr) {
                    throw new Error("not found")
                }
		const cust = Customer.findById(req.params.id)
		return Promise.all([cust, tr])
            })
	    .then(([cust, tr]) => {
		    cust.results = tr
		    res.status(200).json(cust)
	    })
            .catch(next)
    }
}

module.exports = TestResultController
