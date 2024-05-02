import React, { useState } from 'react';
import './contacts.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Contacts() {
  const [contacts, setContacts] = useState([
    // { name: "hxlwiuc", designation: "gehok", company: "wcigeiug", industry: "hwvieuc", email: "cwbei", phoneNumber: "6805478", country: "boiph;" },
  ]);

  
  console.log(contacts);
  const handleLogout = () => {
    alert("Logged Out Successfully")
  }
  const handleDelete = () => {

  }
  const handleImport = () => {
    
  }
  const handleExport = () => {

  }
  return (
    <div>
      <div className="container">
        <div className="left-container">
          <p className="logo">Logo</p>
          <i className="fa fa-sign-out" aria-hidden="true" onClick={handleLogout}>LogOut</i>
        </div>
        <div className="right-container">
          <input className="search" type="search" placeholder="Search by Email Id....." />
          <div className="top-buttons">
            <button className='delete' onClick={handleDelete}>Delete</button>
            <button className="import" onClick={handleImport}>Import</button>
            <button className='export' onClick={handleExport}>Export</button>
          </div>
          <div>
            <table className="table-container">
              <tr className="table-head">
                <th>Name</th>
                <th>Designation</th>
                <th>Company</th>
                <th>Industry</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Country</th>
                <th>Action</th>
              </tr>
              <tbody>
                {
                  contacts.map((contact, index) => (
                    <tr key={index} className='table-data'>
                      <td className="contact1">{contact.name}</td>
                      <td className="contact2">{contact.designation}</td>
                      <td className="contact3">{contact.company}</td>
                      <td className="contact4">{contact.industry}</td>
                      <td className="contact5">{contact.email}</td>
                      <td className="contact6">{contact.phoneNumber}</td>
                      <td className="contact7">{contact.country}</td>
                      <td>
                        <FontAwesomeIcon Icon="trash" />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
