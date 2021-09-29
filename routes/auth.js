const express = require('express')
const router = express.Router()

// get logged in user route api/auth
router.get('/', (req, res) => {
    res.send('Get logged in user')
})

// log in user route api/auth
router.post('/', (req, res) => {
    res.send('log in user')
})

module.exports = router