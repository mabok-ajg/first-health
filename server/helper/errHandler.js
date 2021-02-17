module.exports = function name(err, req, res, next) {
	console.log(err)

	if (err.message == 'not found') {
            res.status(404).json({
                msg: "pelanggan dengan id " + res.locals.id + " tidak ditemukan"
            })
	} else if (err.code == 'MISSING_FIELD') {
        res.status(400).json({
            code: err.code,
            data: err.field
        })
	} else {
		res.status(400).json({
			code: err.code,
			msg: err.sqlMessage
		})
	}

}
