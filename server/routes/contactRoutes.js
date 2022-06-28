const express = require('express');
const router = express.Router();

const {
    fetchContacts,
    addContact,
    updateContact,
    deleteContact
} = require('../controllers/contactController');


router.route('/').get(fetchContacts).post(addContact);
router.route('/:id').put(updateContact).delete(deleteContact);


module.exports = router;
