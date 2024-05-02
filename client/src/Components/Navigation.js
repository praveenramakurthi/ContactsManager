import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import SignUp from './SignUp';
import Contacts from './Contacts';
export default function Navigation() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Signin />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/usercontacts" element={<Contacts/>}/>
                </Routes>
            </Router>
        </div>
    )
}

