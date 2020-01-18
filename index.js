import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';

import Image from 'react-bootstrap/Image'

// pictures //

import rOne from './pics/RoomOne.jpg'
import rTwo from './pics/RoomTwo.jpg'
import rThree from './pics/RoomThree.jpg'

// pictures // 


function MyTab () {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Rental Name</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Replace with Search Bar</Nav.Link>
      <Nav.Link onClick="Example()" id="clicker">
        Jilao Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}



function Example() {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} id="Modal">
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


function AutomaticSlide() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  
  return (
    <div class="c-wrapper">
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src = {rOne}
          alt="Slide One"
          width="100%"
          height="60%"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rTwo}
          alt="Second slide"
          width="60%"
          height="60%"   
        />
  
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Why no Work</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src = {rThree}
          alt="Third slide"
          width="60%"
          height="60%%"   
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

ReactDOM.render(<AutomaticSlide />, document.getElementById("SlideShow"));
  


function ViewButton() {
  return (  
    <div class="box">
    <a href="#" class="btn btn-white btn-animation-1 bold">View Sublets</a> 
  </div>

)}


ReactDOM.render(<ViewButton />, document.getElementById("ViewButton"));
ReactDOM.render(<MyTab />, document.getElementById("NavBar"));
ReactDOM.render(<Example />, document.getElementById("Login"));