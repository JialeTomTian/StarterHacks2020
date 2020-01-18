import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import render from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import MyTab from './LoginandButtons'
import LoginButton from './LoginandButtons'
import LoginSignUp from './LoginandButtons'




ReactDOM.render(<MyTab />, document.getElementById("NavBar"));
