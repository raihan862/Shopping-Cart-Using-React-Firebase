import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { LoginContext } from '../../App';
import './navbar.css';
import Logo from '../../images/favicon.ico'
const Header_Nav = () => {
    const [loginUser,setLoginUser] = useContext(LoginContext)
    return (
        <div>
            <Navbar style={{backgroundColor:"black"}}    expand="lg">
                <Navbar.Brand href="#home" style = {{color:"white"}}>
                    <img src={Logo} alt="" width="60px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navItem" >
                        <Link to="/shop" className ="navItem">
                           Shop 
                        </Link>
                        <Link to="/review" className ="navItem">
                            Review
                        </Link>
                        <Link to="/inventory" className ="navItem"> 
                          Inventory
                        </Link>
                    </Nav>

                </Navbar.Collapse>
                {
                    loginUser.email ?(<>
                    <h6 style = {{color:"white",marginRight:"10px"}}> {loginUser.name}</h6>
                    <Button onClick = {()=>setLoginUser({})}>Logout</Button>
                        </>
                    ):(
                        <Link to="/login">
                        <Button>Login</Button>
                        </Link>
                    )
                }
               
            </Navbar>
            
        </div>
    );
};

export default Header_Nav;