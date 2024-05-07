import React, { useEffect, useState } from 'react'
import './signin.css';
import { Link } from 'react-router-dom'
export default function Signin() {
    const [form, setForm] = useState({ email: "", password: "" });
    // const [error,setError] = useState("");
    const handleSubmit = async (e) => {
        // console.log(email);
        e.preventDefault();
        try {
            // Send login request
            const loginResponse = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            console.log("Login response:", loginResponse);

            if (!loginResponse.ok) {
                throw new Error('Failed to login');
            }

            const { token, user } = await loginResponse.json();

            // Fetch contacts using user's email
            const contactsResponse = await fetch(`http://localhost:8080/api/user_contacts/${user.email}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!contactsResponse.ok) {
                throw new Error('Failed to fetch contacts');
            }

            // Extract contacts from response
            const contactsData = await contactsResponse.json();

            // Display contacts in the console
            console.log('User contacts:', contactsData);

            window.location.href = `/usercontacts?email=${encodeURIComponent(form.email)}`;
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    }
    return (
        <div>
            {/* <h1>Logo</h1> */}
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="main-container">
                <div className="group-100">
                    <div className="group-97">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                    <div className="group-96">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                    <div className="group-95">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                    <div className="group-94">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                    <div className="group-93">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                    <div className="group-92">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                    <div className="group-91">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                </div>
                <p className="logo">Logo</p>
                <div className="group-695">
                    <div className="group-97">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                    <div className="group-96">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                    <div className="group-95">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                    <div className="group-94">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                    <div className="group-93">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                    <div className="group-92">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                    <div className="group-91">
                        <div className="eclipse eclipse-1"></div>
                        <div className="eclipse eclipse-2"></div>
                        <div className="eclipse eclipse-3"></div>
                        <div className="eclipse eclipse-4"></div>
                        <div className="eclipse eclipse-5"></div>
                        <div className="eclipse eclipse-6"></div>
                        <div className="eclipse eclipse-7"></div>
                    </div>
                </div>
                <form className="signin-form" action="" method="POST" onSubmit={handleSubmit}>
                    <p>Enter your credentials to access your account</p>
                    <input type="email" name="email" placeholder="Email ID" value={Credential.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <input type="password" name="password" placeholder="Password" value={Credential.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    <button type="submit">Sign In</button>
                    <Link to="/signup" className="signup">Sign Up</Link>
                </form>
            </div>
        </div>
    )
}
