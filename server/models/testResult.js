const conn = require('../connection/connect').connection
class TestResult {
    static addTestResult(rdata) {
        const query = "insert into test_result set ?"
        return new Promise((resolve, reject) => {
            conn.query(query, rdata, function(err, res, field) {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    static findAll() {
	    const query = "select * from test_result"
	    return new Promise((resolve, reject) => {
		    conn.query(query, function(err, res, field) {
			    if (err) {
				    reject(err)
			    }
			    resolve(res)
		    })
	    })
    }

    static findByCustId(id) {
        const query = "select id, hasil, tanggal, nilai_rujukan, jenis_pemeriksaan, keterangan from test_result where id = ?"
        return new Promise((resolve, reject) => {
            conn.query(query, id, function (err, res, field) {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}
module.exports = TestResult
