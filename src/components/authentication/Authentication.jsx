import React, {useState} from 'react';
import { loginUser,registerUser } from '../api';
import { useNavigate } from 'react-router-dom';
import './Authentication.css'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import './Style.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[error, setError] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     
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
};

return(
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
            <div className="d-flex justify-content-center gap-3 mt-4">
                <Navbar.Text>Find me on Social Media </Navbar.Text>
                <a href="https://www.facebook.com/aurellanojoshuaanthony/" target="_blank" rel="noopener noreferrer" className="facebook-icon">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="https://x.com/joshaurellano" target="_blank" rel="nooepener noreferrer" className="text-dark">
                    <i className="fa-brands fa-square-x-twitter fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/im_ioshua/" target="_blank" rel="noopener noreferrer" className="instagram-icon">
                    <i className="fa-brands fa-instagram fa-2x"></i>
                </a>
            </div>
            <Button variant="primary" className="ms-auto"onClick={handleShow}>
                Register
                </Button>
        </Container>
        </Navbar>
    <div className='container'>
        <div className='form-box'>
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formGroupUsername">
                    <FloatingLabel label="Username" className="mb-3">
                    <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <FloatingLabel label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FloatingLabel>
                </Form.Group>
                <div className="d-flex align-items-center justify-content-between">
                <Button type="submit">Submit</Button>
                <a href="/forgot-password" className="ms-3 text-decoration-none">Forgot Password?</a>
                </div>
            </Form>
            {error && <p style={{color: 'red',marginTop: '10px'}}>{error}</p>}
  </div>
        </div>
        <Registration show={show} handleClose={handleClose} />
  </>
    );
};

const Registration = ({ show, handleClose }) => {
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
                
                setFullname('');
                setPhonenumber('');
                setEmail('');
                setUsername('');
                setPassword('');

                handleClose();
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
            <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={handleRegister}>
                    <Form.Group className="mb-3">
                        <Form.Label>Fullname</Form.Label>
                    <Form.Control
                        type="text" 
                        value={fullname}  
                        onChange={(e) => setFullname(e.target.value)}required
                    />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                        type="tel"
                        value={phone_number}
                        onChange={(e) => setPhonenumber(e.target.value)}required />
                   </Form.Group>
                   <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}required />
                   </Form.Group>
                   <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}required />
                   </Form.Group>
                   <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}required/>
                   </Form.Group> 
                   <Button variant="primary" className="w-100" type="submit">Register</Button>
                </form>
                {error && <p style={{color:'red'}}>{error}</p>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
            </Modal>
            </div>
        );
    };
export { Login, Registration };