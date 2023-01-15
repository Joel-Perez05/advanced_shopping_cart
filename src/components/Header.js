import React from 'react'
import {Link} from "react-router-dom"
import {Container, FormControl, Navbar, Nav, Dropdown, Badge} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa"

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl 
          style={{width: 500}}
          placeholder="Search"
          className='m-auto'/>
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant='info'>
              <FaShoppingCart color='white' fontSize="25px" />
              <Badge bg='info'>{10}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ midWidth: 350}}>
              <span style={{ padding: 10}}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header