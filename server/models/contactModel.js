const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please add a first name']
    },
    lastname: {
        type: String,
        required: [true, 'Please add a last name']
    },
    phonenumber: {
        type: String,
        required: [true, 'Please add a phone number']
    }
});

module.exports = mongoose.model('Contact', contactSchema);