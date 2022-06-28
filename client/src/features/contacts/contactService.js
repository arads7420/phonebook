import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contacts';

// Create new contact
const createContact = async (contactData) => {
    const response = await axios.post(API_URL, contactData);

    return response.data;
}

// Get all contacts
const getContacts = async () => {
    const response = await axios.get(API_URL);

    return response.data;
}

// Update a contact
const editContact = async (contactData) => {
    const data = {
        firstname: contactData.firstname,
        lastname: contactData.lastname,
        phonenumber: contactData.phonenumber
    }

    const response = await axios.put(API_URL + `/${contactData.id}`, data);

    return response.data;
}

// Delete a contact
const deleteContact = async (id) => {
    const response = await axios.delete(API_URL + `/${id}`);

    return response.data;
}

const contactService = {
    createContact,
    getContacts,
    editContact,
    deleteContact
}

export default contactService;