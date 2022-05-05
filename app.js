require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes/index')
const db = require('./connection/db')

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static(__dirname + '/assets'))
app.use(express.urlencoded({ extended: true }))
app.use(router)

async function start() {
	try {
		db().connect((err)=> {
			err ? console.log(err) : console.log('БД подключена')
		})
		app.listen(PORT, () => {
			console.log(`====================================\nСервер запущен. Порт: ${PORT}\n====================================`)
		})
	} catch (e) {
		console.log(e)
	}
}

start()
