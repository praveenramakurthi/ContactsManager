import React, { useEffect, useState } from 'react'
import './signin.css';
import { Link } from 'react-router-dom'
export default function Signin() {
    const [form, setForm] = useState({ email: "", password: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!response.ok) {
                //
            }
            else{
            const data = await response.json(); // Parse the JSON response
            // Handle the data as needed
            window.location.href = '/usercontacts';
            }
        }
        catch (err) {
            console.error("Error signing in:", err);
        }
    }
    // useEffect(() => {
    //     handleSubmit();
    // }, []);
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
                <form className="signin-form" action="#" method="POST" onSubmit={handleSubmit}>
                    <p>Enter your credentials to access your account</p>
                    <input type="email" name="email" placeholder="Email ID"
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <input type="password" name="password" placeholder="Password"
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    <button type="submit">Sign In</button>
                    <Link to="/signup" className="signup">Sign Up</Link>
                </form>
            </div>
        </div>
    )
}
