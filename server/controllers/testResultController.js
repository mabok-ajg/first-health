const tr  = require('../models/testResult')
class TestResultController {
    static addTestResult(req, res, next) {
	    req.body.tanggal = new Date().toISOString().slice(0, 10)
        tr.addTestResult(req.body)
            .then(tr => {
                res.status(201).json(tr)
            })
            .catch(next)
    }
    
    static getAllResult(req, res, next) {
	    tr.findAll()
	    	.then( customers => {
			res.status(200).json(customers)
		})
	    	.catch(next)
    }

    static getTestResultId(req, res, next) {
        tr.findByCustId(req.params.id)
            .then(tr => {
                if (!tr) {
                    throw new Error("not found")
                }
		res.status(200).json(tr)
	    })
            .catch(next)
    }
}

module.exports = TestResultController
