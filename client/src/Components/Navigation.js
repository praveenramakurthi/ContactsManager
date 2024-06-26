import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Contacts from './Contacts';
export default function Navigation() {
    const [email,setEmail]=useState("")
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<SignIn setEmail={setEmail}/>} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/usercontacts" element={<Contacts email={email}/>}/>
                </Routes>
            </Router>
        </div>
    )
}

