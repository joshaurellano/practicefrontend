import React, {useState} from 'react';
import { loginUser } from './api';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[error, setError] = useState(null);
    const navigate = useNavigate ();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({username,password});
            if(response&&response.token){
            console.log('Login Successful');
            window.alert('Login Successful');

            sessionStorage.setItem('authToken',response.token);

            navigate('/home');
            }
            else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Login error',error);
            setError('Login error');
            window.alert(error.response?.data?.message||'Login error');
        }
    }
return (
    <div className='container'>
        <div className='form-box'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={ (e) => setUsername(e.target.value)}></input>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type="submit">Login</button>
            {error && <p style={{color: 'red',marginTop: '10px'}}>{error}</p>}
        </form>
    </div>
    </div>
);
};
export default Login;