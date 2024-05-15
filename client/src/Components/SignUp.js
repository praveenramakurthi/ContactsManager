import React, { useState,useContext } from 'react'
import './signin.css';
// import 'AuthContext' from "../context/AuthContext";
export default function SignUp() {
    const [credentials, setCredentials] = useState({ email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!credentials.email || !credentials.password || !credentials.confirmPassword) {
            setError("Please fill in all fields");
            return;
        }
        if (credentials.password !== credentials.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            const response = await fetch("http://localhost:8080/api/register", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            });
            if (!response.ok) {
                const errorMessage = await response.json();
                setError(errorMessage.message)
            }
            else {
                const data = await response.json();
                alert("User created Successfully");
                window.location.href = "/";
            }
        }
        catch (err) {
            setError('An error occurred. Please try again.');
            console.error('Error during signup:', err);
        }
    }

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setCredentials({...credentials,[name]:value});
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
                <form className="signin-form" action="" method="POST" onSubmit={handleSignup}>
                    <p>Create New Account</p>
                    {error && <div className="error-message">{error}</div>}
                    <input type="email" name="email" placeholder="Mail ID"
                        value={credentials.email}
                        onChange={handleInputChange} />
                    <input type="password" name="password" placeholder="Password"
                        value={credentials.password}
                        onChange={handleInputChange} />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password"
                        value={credentials.confirmPassword}
                        onChange={handleInputChange} />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
