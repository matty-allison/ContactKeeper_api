const express = require('express')
const router = express.Router()

// get all user contacts route api/contacts
router.get('/', (req, res) => {
    res.send('get all user contacts')
})

// add new contact route api/contacts
router.post('/', (req, res) => {
    res.send('add new contact')
})

// update contact route api/contacts/:id
router.put('/:id', (req, res) => {
    res.send('Update contact')
})

// delete contact route api/contacts/:id
router.delete('/:id', (req, res) => {
    res.send('delete contact')
})

module.exports = router