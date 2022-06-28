import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editContact, selectContactById } from './contactsSlice';

import { Link, useNavigate, useParams } from 'react-router-dom';

export const EditContactForm = () => {
    const { contactId } = useParams();

    const contact = useSelector(state => selectContactById(state, contactId));

    const [firstname, setFirstName] = useState(contact.firstname);
    const [lastname, setLastName] = useState(contact.lastname);
    const [phonenumber, setPhoneNumber] = useState(contact.phonenumber);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onFirstNameChanged = e => setFirstName(e.target.value);
    const onLastNameChanged = e => setLastName(e.target.value);
    const onPhoneNumberChanged = e => setPhoneNumber(e.target.value);

    const onSubmit = e => {
        e.preventDefault();

        console.log(`Before sending`);
        console.log({
            id: contactId,
            firstname,
            lastname,
            phonenumber
        });
        

        dispatch(editContact({
            id: contactId,
            firstname,
            lastname,
            phonenumber
        }))

        navigate("/");
    }

    return (
        <div className="form">
            <h2>Edit a Contact</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstname}
                        onChange={onFirstNameChanged}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        onChange={onLastNameChanged}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group mt-3 mb-5">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phonenumber"
                        value={phonenumber}
                        onChange={onPhoneNumberChanged}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                <Link className="btn btn-secondary mx-3" to="/">Cancel</Link>
            </form>
        </div>
    )
}