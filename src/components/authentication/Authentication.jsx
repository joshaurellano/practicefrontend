import React, {useState} from 'react';
import { loginUser,registerUser } from '../api';
import { useNavigate } from 'react-router-dom';
import './Authentication.css'
import './SocialMedia_Style.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Form,FloatingLabel,Button,Container,Navbar,Modal } from 'react-bootstrap';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[error, setError] = useState(null);

    /*For Password Visibility*/
    const [ showPassword, setShowPasword ] = useState(false);
    const handlePasswordToggle = () => {
        setShowPasword(!showPassword)
    };

    /*For Registration Modal*/
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
            if(response) {
                sessionStorage.setItem('username',username);
            }
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
        <Container style={{backgroundColor:"#DFF2EB"}}>
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
    <div className='container' style={{height:"100vh", paddingBottom:"200px"}}>
        <div className='form-box'>
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formGroupUsername">
                    <FloatingLabel label="Username" className="mb-3">
                    <Form.Control type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    required />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <div style={{ position: 'relative' }}>
                        <FloatingLabel label="Password" className="mb-3">
                        <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ paddingRight: '3rem' }}
                        required/>
                        </FloatingLabel>
                    <div onClick={handlePasswordToggle}
                    style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',}}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                        </div>
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
    const [repassword, setRePassword] = useState('');
    const [error,setError] = useState(null);

    const [ showPassword, setShowPassword ] = useState(false);
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword)
    };

    const [ showRePassword, setShowRePassword ] = useState(false);
    const handleRePasswordToggle = () => {
        setShowRePassword(!showRePassword)
    };

    const handleRePassword = async (e) => {
        setRePassword(e.target.value);
            if (password !== e.target.value) {
            setError('Passwords do not match');
        } else {
            setError(null);
        }
           
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        if(password!==repassword){
            setError('Passwords do not match');
            return;
        };

        setError(null);
        try {
            const response = await registerUser ({fullname,phone_number,email,username,password});
            if(response){
                console.log('Success');
                window.alert('Successfully registered');

                handleClose();
                
                setFullname('');
                setPhonenumber('');
                setEmail('');
                setUsername('');
                setPassword('');
                setRePassword('');
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
                <Modal.Body className="modal-scrollable-body">
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
                        <div style={{ position: 'relative' }}>
                        <Form.Control
                        type={showPassword ? "password":"text"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}required/>
                        <div 
                            onClick={handlePasswordToggle}
                            style={{
                            position: 'absolute',
                            right: '15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                            }}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                        </div>
                   </Form.Group>
                   <Form.Group>
                        <Form.Label>Re enter your Password</Form.Label>
                        <div style={{ position: 'relative' }}>
                        <Form.Control
                        type={showRePassword ? "password":"text"}
                        value={repassword}
                        onChange={handleRePassword}required/>
                        <div 
                            onClick={handleRePasswordToggle}
                            style={{
                            position: 'absolute',
                            right: '15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                            }}>
                            {showRePassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                        </div>
                   </Form.Group>
                   
                   <Button variant="primary" className="w-100" type="submit" disabled={!!error}>Register</Button>
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