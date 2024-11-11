import React from 'react';
import '../Style.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

const NaviBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navibar">
    <Nav>
    <Breadcrumb>
        <Breadcrumb.Item>
        <Link to="/home">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>department</Breadcrumb.Item>
    </Breadcrumb>
    </Nav>
  </Navbar>
  );
};

const SideBar = () => {
  return (
    <Nav justify variant="tabs" className="sidebar flex-column bg-dark p-3 vh-100 d-flex">
      <div style={{ marginTop: '20vh' }}>
        <Nav.Link eventKey="disabled"disabled>Departments</Nav.Link>
        <Link to="/course" className="nav-link">Courses</Link>
        <Link to="/student" className="nav-link">Students</Link>
      </div>
    </Nav> 
  );
};

const Department= () => {
  return (
    <>
    <NaviBar />
    <Container fluid>
      <Row>
        <Col xs={2} className="p-0">
          <SideBar />
        </Col>
        <Col className="p-4">
          <h2>Main Content</h2>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Department;