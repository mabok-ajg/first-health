function validateNoHp(no_hp) {
	if (no_hp.length < 9) {
		throw new Error("masukan minimal 9 digit nomor")
	}
}

module.exports = { validateNoHp }
