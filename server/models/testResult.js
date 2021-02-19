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

    static getTestResultByCustId(cust_id) {
        const query = "select id, hasil, tanggal, nilai_rujukan, jenis_pemeriksaan, keterangan from test_result where id_customer = ?"
        return new Promise((resolve, reject) => {
            conn.query(query, cust_id, function (err, res, field) {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}

module.exports = TestResult
