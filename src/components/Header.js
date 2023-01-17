import React from 'react'
import {Link} from "react-router-dom"
import {Container, FormControl, Navbar, Nav, Dropdown, Badge, Button} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa"
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import "./styles.css"

const Header = () => {

  const {
    state: {cart},
    dispatch
  } = CartState();

  return (
    <Navbar bg='dark' variant='dark' style={{height: 100}}>
      <Container>
        <Navbar.Brand>
          <Link style={{fontSize: "30px"}} to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl 
          style={{width: 500}}
          placeholder="Search"
          className='m-auto'/>
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant='info'>
              <FaShoppingCart color='white' fontSize="25px" />
              <Badge bg='info'>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 350}}>
              {
                cart.length > 0? (
                  <>{
                    cart.map((prod) => (
                      <span className='cartItem' key={prod.id}>
                        <img 
                        className="cartItemImg"
                        src={prod.image}
                        alt={prod.name}
                        />
                        <div className='cartItemDetail'>
                          <span>{prod.name}</span>
                          <span>$ {prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{cursor: "pointer"}}
                          onClick={() => 
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </span>
                    ))
                  }
                  <Link to="/cart">
                    <Button style={{width: "95%", margin: "0 10px"}}>
                      Go To Cart
                    </Button>
                  </Link>
                  </>
                ) : (
                  <span style={{ padding: 10}}>Cart is Empty!</span>
                )
              }
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header