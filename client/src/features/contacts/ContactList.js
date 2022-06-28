import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './contactlist.css';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from './contactsSlice';

import { Contact } from './Contact';

export const ContactList = () => {
    const [search, setSearch] = useState('');
    const onSearchChanged = e => setSearch(e.target.value)

    const dispatch = useDispatch();
    const {contacts, isLoading, isSuccess} = useSelector(state => state.contacts);

    const displayContacts = contacts.filter((contact) => {
        let res;
        if(search === '') {
            res =  contact;
        }
        else if(contact.lastname.startsWith(search)) {
            res =  contact;
        }
        return res;
    })

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);
    

    let renderedContacts;
    if (isLoading) {
        renderedContacts =  <div>Loading...</div>;
    }
    else if (contacts.length === 0 && isSuccess) {
        renderedContacts = <div>No Contacts Found</div>;
    }
    else  {
        if(displayContacts.length === 0) {
            renderedContacts = <div>No Contacts Found</div>;
        }
        else {
            renderedContacts = displayContacts.map(contact => <Contact key={contact._id} contact={contact} />);
        }
    } 

    return (
        <>
            <div className="navbar">
                <h3>Contacts</h3>
                <Link className="btn btn-primary" to="/addContact">+ Add Contact</Link>
            </div>
            <div className="contact-container">
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder='Search for contact by last name...'
                        value={search}
                        onChange={onSearchChanged}
                    />
                </div>
                <div className="contact-list">
                   {renderedContacts}
                </div>
            </div>
        </>
    )
}