import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { Header } from './components/Header';
import { ContactList } from './features/contacts/ContactList';
import { AddContactForm } from './features/contacts/AddContactForm';
import { EditContactForm } from './features/contacts/EditContactForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<ContactList />} />
          <Route exact path="/addContact" element={<AddContactForm />} />
          <Route exact path="/editContact/:contactId" element={<EditContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
