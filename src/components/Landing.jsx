import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Landing.css';

const UpNavBar = () => {
    return (
        <div className="upnavbarstyle">
        <Navbar style={{marginLeft:"5px",marginTop:"20px", width:"100vw"}}>
            <div className="d-flex justify-content-between align-items-center w-100"> 
            <div className="d-flex align-items-center">
                <img src={logo} alt="Logo" 
                className="logoStyle" />
            <Navbar.Text style={{fontWeight:"bold"}}>
                Simple Project</Navbar.Text>
            </div>
            <div>
            <Nav fill variant="tabs">
                <Nav.Item style={{marginRight:"7px"}} >
                    <Nav.Link eventKey="disabled" disabled>About</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navtab" style={{marginRight:"5px"}}>
                    <Nav.Link as={Link} to="/login"> Login </Nav.Link>
                </Nav.Item>
            </Nav>
            </div>
            </div>
        </Navbar>
        </div>
    );
};
const Page = () => {
    return (   
        <div className="page-style">
            <h1 className="page-font1" style={{marginTop:"10px"}}>
                Simple Project Title</h1>
                <br />
                <p className="page-font2"> Use this application to add, update, fetch and delete Department, Courses and Students record</p>
                <br />
                <Link to="/login">
                <Button size="lg" className="getstartedbuttonStyle">
                    Get Started</Button>
                </Link>
        </div> 
    );
}

const Landing = () => { 
    return (
        <div>
        <UpNavBar></UpNavBar>
        <Page></Page>

        </div>
    );
};

export default Landing;