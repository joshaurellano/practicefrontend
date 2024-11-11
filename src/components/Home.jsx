import React, { useState } from 'react';
import { Container, Row, Col, Offcanvas, Button, Navbar, Nav, Breadcrumb, Card } from 'react-bootstrap';
import './Style.css';
import { Link } from 'react-router-dom';
import { MdWavingHand } from "react-icons/md";

const NaviBar = ({ handleShow }) => {
  return (
  <div>
  <Navbar variant="dark" className="navibar">
    <div style={{marginLeft:"20px"}}>
    <Button variant="outline-light" onClick={handleShow} className="me-2">
        <span className="navbar-toggler-icon"></span>
    </Button>
    <Navbar.Text style={{color:"#ffffff"}}>Main Menu</Navbar.Text>
    </div>
  </Navbar>
  <Navbar className="bg-body-tertiary">
    <div style={{marginLeft:"20px"}}>
      <Breadcrumb>
      <Breadcrumb.Item active>Home</Breadcrumb.Item>
    </Breadcrumb>
    </div>
  </Navbar>
  </div>
  );
};

const SideBar = ({show, handleClose }) => {
  const username = sessionStorage.getItem('username');
  return (
    <Offcanvas show={show} onHide={handleClose} placement="start" className="bg-dark" style={{ width: "250px"}}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-light">
          <MdWavingHand className="wave-icon" /> Hi {username}!
        </Offcanvas.Title>
      </Offcanvas.Header>
      <hr className="hr" />
    <Nav justify variant="tabs" className="sidebar flex-column bg-dark p-3 vh-100 d-flex">
      <div>
        <Link to="/department" className="nav-link">Departments</Link>
        <hr className="hr" />
        <Link to="/course" className="nav-link">Courses</Link>
        <hr className="hr" />
        <Link to="/student" className="nav-link">Students</Link>
        <hr className="hr" />
      </div>
    </Nav> 
    </Offcanvas>
  );
};

const DownNaviBar = () => {
  return (
    <div className="downnavibar">
      <Navbar>
      </Navbar>
    </div>
  );
};

const Home = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  return(
    <div>
    <NaviBar handleShow={handleShow} />
    <SideBar show={show} handleClose={handleClose} />
      <div className="page-container">
        <Container>
        <Row className="g-4">
        <Col xl={8} >
          <Card style={{ width: '37rem', height: '10rem' }}>
          </Card>
        </Col>
        <Col xl={8}>
        <Card style={{ width: '37rem', height: '10rem' }}>
        </Card>
        </Col>
      </Row>
      <Row className="g-4">
        <Col xl={8}>
        <Card style={{ width: '37rem', height: '10rem' }}>
        </Card>
        </Col>
        <Col xl={8}>
        <Card style={{ width: '37rem', height: '10rem' }}>
        </Card>
        </Col>
      </Row>
        </Container>
      </div>
    <DownNaviBar></DownNaviBar>
    </div>
  );
};

export default Home;
