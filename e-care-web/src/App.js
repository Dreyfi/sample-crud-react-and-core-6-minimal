import React from "react";
import { Nav, NavBar, Container, Row, Col, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CreatePatient from "./Components/create-patient.component";
import EditPatient from "./Components/edit-patient.component";
import PatientList from "./Components/patient-list.component";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-patient"} className="nav-link">
                  React E-care App
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-patient"} className="nav-link">
                    Create Patient
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/patient-list"} 
                    className="nav-link">
                    Patient List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/" element={<CreatePatient/>} />
                  <Route path="/create-patient" element={<CreatePatient/>} />
                  <Route path="/edit-patient/:id" element={<EditPatient/>} />
                  <Route path="/patient-list" element={<PatientList/>} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;