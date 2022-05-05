const express = require('express')
const router = express.Router()
const renderPage = require('./RenderPage')

router.get('/', renderPage.main)
router.get('/news/:id', renderPage.singlePost)

module.exports = router