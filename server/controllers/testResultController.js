const tr  = require('../models/testResult')
class TestResultController {
    static addTestResult(req, res, next) {
	const fields = ['hasil', 'tanggal', 'nilai_rujukan', 'jenis_pemeriksaan', 'keterangan', 'id_customer']
    const emptyField = {}
	
	for (const f of fields) {
	    if (req.body[f] == undefined || req.body[f] == "") {
		emptyField[f] = true
	    }
	}
	if (Object.keys(emptyField).length !== 0 && emptyField.constructor === Object) {
	    let err = {
		code: "MISSING_FIELD",
		field: emptyField
	    }
	    return next(err)
	}
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
