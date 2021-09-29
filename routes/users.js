const express = require('express')
const router = express.Router()

// log in user route api/users
router.post('/', (req, res) => {
    res.send('register user')
})

module.exports = router