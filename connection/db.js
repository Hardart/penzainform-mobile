const mysql = require('mysql2')
function connect() {
	const connection = mysql.createConnection({
		host: 'server10.hosting.reg.ru',
		user: 'u1572118_hardart',
		password: 'lU0oT7nG5ibW4v',
		database: 'u1572118_penzainform_mobile',
	})
	return connection
}

module.exports = connect