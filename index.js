import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import render from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';

import Image from 'react-bootstrap/Image'



class LogInSignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            signUp: false,
            logIn: true
        }
        this.signUpClick = this.signUpClick.bind(this)
    }

    signUpClick(){
        console.log("This has ran")
        console.log(this.state.logIn)
        this.setState(prevState => {
            return{
                signUp: true,
                logIn: false
            }
        })
    }
    render() {
        return (
            <>
            <div style={{display: this.state.logIn ? 'block' : 'none'} }>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <center><h1>Login</h1></center>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div class="text-center">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                    <hr></hr>
                    <Button variant="primary" class="text-center" onClick={this.signUpClick}>
                        Sign Up
                    </Button>
                    <hr>
                    </hr>
                </Form>
            </div>

            <div style={{display: this.state.signUp ? 'block' : 'none'} }>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <center><h1>SignUp</h1></center>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            This is the SignUp Page
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div class="text-center">
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </div>
                    <hr>
                    </hr>
                </Form>
            </div>
            </>
        );
    }
}

function LogInButton() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} id="Modal">
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>


                <Modal.Body><LogInSignUp /></Modal.Body>
            </Modal>

        </>
    );
}




function MyTab() {
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
                    <LogInButton />
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
        <Image
          src = "https://thehappypuppysite.com/wp-content/uploads/2018/05/shiba-inu-header.jpg"
          alt="Slide One"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/shiba-inu_04_lg.jpg"
          alt="Second slide"
          width="px"     
        />
  
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Why no Work</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src = "https://dogzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2018/06/Shiba-Inu-Price-2.jpg"
          alt="Third slide"
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

if (slideShow){
ReactDOM.render(<div><center><AutomaticSlide /></center></div>, document.getElementById("SlideShow"));
}





ReactDOM.render(<MyTab />, document.getElementById("NavBar"));
