import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from './contactsSlice';

import { Link, useNavigate } from 'react-router-dom';

export const AddContactForm = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onFirstNameChanged = e => setFirstName(e.target.value);
    const onLastNameChanged = e => setLastName(e.target.value);
    const onPhoneNumberChanged = e => setPhoneNumber(e.target.value);

    const onSubmit = e => {
        e.preventDefault();

        dispatch(createContact({
            firstname,
            lastname,
            phonenumber
        }))
        navigate("/");
    }

    return (
        <div className="form">
            <h2>Add New Contact</h2>
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
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-secondary mx-3" to="/">Cancel</Link>
            </form>
        </div>
    )
}