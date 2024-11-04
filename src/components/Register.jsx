import React, {useState} from 'react';
import {registerUser} from './api';
import './Login.css';
const Registration = () => {
    const [fullname, setFullname] = useState('');
    const [phone_number, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser ({fullname,phone_number,email,username,password});
            if(response){
                console.log('Success');
                window.alert('Successfully registered');
            }
            else {
                throw new Error('Registration failed');
            }
        } catch (error) {
            console.error('Registration error', error);
            setError(error.response?.data?.message || 'Registration failed please try again');
        }
    };
        return (
            <div className="container">
                <div className="form-box">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div>
                        <label>Fullname</label>
                        <input 
                        type="text" 
                        value={fullname}  
                        onChange={(e) => setFullname(e.target.value)}required></input>
                    </div>
                   <div>
                        <label>Phone Number</label>
                        <input 
                        type="tel"
                        value={phone_number}
                        onChange={(e) => setPhonenumber(e.target.value)}required></input>
                   </div>
                   <div>
                        <label>Email</label>
                        <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}required></input>
                   </div>
                   <div>
                        <label>Username</label>
                        <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}required></input>
                   </div>
                   <div>
                        <label>Password</label>
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}required></input>
                   </div>
                   <button type="submit">Register</button>
                   {error && <p style={{color:'red'}}>{error}</p>}
                </form>
            </div>
            </div>
        );
    };
export default Registration;
