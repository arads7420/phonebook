import React from 'react';
import { deleteContact } from './contactsSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const Contact = ({ id, contact }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="contact" key={id}>
                <div className="details">
                    <div className="name">
                        {contact.firstname} {contact.lastname}
                    </div>
                    <div className="phone">
                        <i className="fa-solid fa-phone"></i> {contact.phonenumber}
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => { dispatch(deleteContact(contact._id)) }}
                    >
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <Link
                        to={`/editContact/${contact._id}`}
                        className="btn btn-secondary ms-3"
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </Link>

                </div>
            </div>
        </>
    )
}