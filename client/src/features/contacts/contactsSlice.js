import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import contactService from './contactService';

const initialState = {
    contacts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// Create a new contact
export const createContact = createAsyncThunk('contacts/create',
    async (contactData, thunkAPI) => {
        try {
            return await contactService.createContact(contactData);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    })

// Get all contacts
export const getContacts = createAsyncThunk('contacts/getAll',
    async (_, thunkAPI) => {
        try {
            return await contactService.getContacts();
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    })

// Edit a contact
export const editContact = createAsyncThunk('contacts/edit',
    async (contactData, thunkAPI) => {
        try {
            return await contactService.editContact(contactData);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    })

// Delete a contact
export const deleteContact = createAsyncThunk('contacts/delete',
    async (id, thunkAPI) => {
        try {
            return await contactService.deleteContact(id);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    })

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.contacts.push(action.payload);
            })
            .addCase(createContact.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.contacts = action.payload;
            })
            .addCase(getContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(editContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.contacts = state.contacts.filter((contact) => {
                    if(contact._id === action.payload._id) {
                        contact.firstname = action.payload.firstname;
                        contact.lastname = action.payload.lastname;
                        contact.phonenumber = action.payload.phonenumber;
                    }

                    return contact;
                });
            })
            .addCase(editContact.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.contacts = state.contacts.filter((contact) => 
                    contact._id !== action.payload.id
                );
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
            })
    }
})

export const { reset } = contactsSlice.actions

export const selectContactById = (state, contactId) =>
    state.contacts.contacts.find(contact => contact._id === contactId);

export default contactsSlice.reducer
