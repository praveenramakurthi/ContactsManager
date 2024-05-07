import React, { useEffect, useState } from 'react';
import './contacts.css';
import queryString from 'query-string';
import '@fortawesome/fontawesome-free/css/all.css';
import { parse } from 'papaparse';
import { faTrash, faEdit, faFileExport, faFileImport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import ReactFileReader from 'react-file-reader';
// Register the imported icons with the library
library.add(faTrash, faEdit, faFileExport, faFileImport);

export default function Contacts() {
  const { email } = queryString.parse(window.location.search);
  // console.log(email);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [contacts, setContacts] = useState([
    // { name: 'joicoe', designation: 'ioeh', company: 'c keui', industry: 'cwoecikw', email: 'pra@gmail.com', phoneNumber: '72893003', country: 'jboweiw' },
  ]);
  const [detailsAdded, setDetailsAdded] = useState(false);

  const handleLogout = () => {
    alert("Want to Logout?");
    window.location.href = "/";
  }

  // Function to fetch user data
  const fetchUserData = async (Id) => {
    try {
      debugger;
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8080/api/user/${Id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    // Fetch user data when component mounts
    fetchUserData();
  }, []);

  const handleDelete = async (contactId) => {
    try {
      // debugger;
      console.log('Deleting contact with ID:', contactId);
      const token = localStorage.getItem('token');
      for (const id of selectedContacts) {
        const response = await fetch(`http://localhost:8080/api/contacts/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          // Remove the deleted contact from the state
          setContacts(contacts.filter(contact => contact._id !== id));
          console.log(`Contact with ID ${id} deleted successfully.`);
        } else {
          console.error(`Failed to delete contact with ID ${id}.`);
        }
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  }

  const handleCheckboxChange = (contactId) => {
    if (selectedContacts.includes(contactId)) {
      setSelectedContacts(selectedContacts.filter(id => id !== contactId));
    } else {
      setSelectedContacts([...selectedContacts, contactId]);
    }
  };


  const handleImportFiles = (files) => {
    var reader = new FileReader();
    reader.onload = function (e) {
      const csvData = reader.result;
      const parsedData = parse(csvData, { header: true });
      console.log(parsedData.data);
      setContacts(parsedData.data); // This updates the UI, showing the imported data
      saveImportedData(parsedData.data); // This sends the imported data to the server for saving
    }
    reader.readAsText(files[0]);
  }

  const saveImportedData = async (data) => {
    try {
      console.log('Data to be saved:', data);
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/user', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const user = await response.json();
      if (!user || !user.email) {
        throw new Error('Invalid user data');
      }
      const response2 = await fetch('http://localhost:8080/api/import', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ data, userEmail: user.email }),
      });
      if (!response2.ok) {
        throw new Error('Failed to save imported data');
      }
      console.log('Imported data saved successfully');
      // Optionally, fetch updated contacts after import
      // fetchContacts();
    } catch (error) {
      console.error('Error saving imported data:', error);
    }
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
          <i className="fa-sharp fa-solid fa-magnifying-glass" style={{ position: 'relative' }}></i>
          <input className="search" type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Email Id....." />
          <div className="top-buttons">
            <FontAwesomeIcon icon={faTrash} style={{ left: '10px', position: 'absolute', top: '7px' }} />
            <button className='delete' onClick={(contactId) => handleDelete(contactId)}>Delete</button>

            <ReactFileReader handleFiles={handleImportFiles} fileTypes={'.csv'}>
              <div>
                <FontAwesomeIcon icon={faFileImport} style={{ transform: 'rotate(90deg)', top: '7px', position: 'absolute', left: '117px' }} />
                <button className="import" >Import</button>
              </div>
            </ReactFileReader>

            <FontAwesomeIcon icon={faFileExport} style={{ position: 'absolute', top: '7px', left: '229px' }} />
            <button className='export' >Export</button>
          </div>
          <div>
          <p>Welcome {user.email} </p>
          </div>
          <div>
            <table className="table-container">
              <thead>
                <tr className="table-head">
                  <th>Name</th>
                  <th className="separator1">|</th>
                  <th className="designation">Designation</th>
                  <th className="separator2">|</th>
                  <th>Company</th>
                  <th className="separator">|</th>
                  <th>Industry</th>
                  <th className="separator">|</th>
                  <th>Email</th>
                  <th className="separator">|</th>
                  <th>Phone Number</th>
                  <th className="separator">|</th>
                  <th>Country</th>
                  <th className="separator">|</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  contacts.filter((contact) => {
                    return search.toLowerCase() === '' ? contact : contact.name.toLowerCase().includes(search);
                  })
                    .map((contact, index) => (
                      <tr key={index} className='table-data' >
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedContacts.includes(contact._id)}
                            onChange={() => handleCheckboxChange(contact._id)}
                          />
                        </td>
                        <td className="contact1">{contact.name}</td>
                        <td className="contact2">{contact.designation}</td>
                        <td className="contact3">{contact.company}</td>
                        <td className="contact4">{contact.industry}</td>
                        <td className="contact5">{contact.email}</td>
                        <td className="contact6">{contact.phoneNumber}</td>
                        <td className="contact7">{contact.country}</td>
                        <td className="action">
                          <FontAwesomeIcon icon={faEdit} style={{ color: "#74C0FC", marginRight: "10px", position: "relative", cursor: "pointer" }} />
                          {!detailsAdded && <FontAwesomeIcon icon={faTrash} />}
                        </td>
                      </tr>
                    ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  )
}
