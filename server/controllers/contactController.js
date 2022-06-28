const Contact = require('../models/contactModel');
const asyncHandler = require('express-async-handler');


// @desc     Get Contacts
// @route    GET /api/contacts
// @access   Public
const fetchContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

// @desc     Create Contact
// @route    POST /api/contacts
// @access   Public
const addContact = asyncHandler(async (req, res, next) => {
    await Contact.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phonenumber: req.body.phonenumber
    }, (err, contact) => {
        if(err) {
            res.status(400);
            next(err);
        } 
        else {
            res.status(200).json(contact);
        }
    });

});

// @desc     Update Contact
// @route    PUT /api/contacts/:id
// @access   Public
const updateContact = asyncHandler(async (req, res, next) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedContact);
});

// @desc     Delete Contact
// @route    DELETE /api/contacts/:id
// @access   Public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(400);
        throw new Error('Contact not found');
    }

    await contact.remove();
    res.status(200).json({ id: req.params.id });
});

module.exports = {
    fetchContacts,
    addContact,
    updateContact,
    deleteContact
}