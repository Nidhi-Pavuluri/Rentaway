import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import HomeSearch from "../homeSearch";

const navbar = {
                backgroundColor: 'rgba(255, 255,255,0)',
                border:0,
};

var navitemStyle = {
    color: 'white',
};

  
 
class NavBar extends React.Component {
    render() {
        return (
            <Navbar style={navbar}>
                <Navbar.Header>
                    <Navbar.Brand>
                       <a style={navitemStyle}>Rent@way</a>
                    </Navbar.Brand> 
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse >
                    
                        {/* <NavItem eventKey={1} href="#">
                            Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                        </NavItem> */}
                        <Nav pullRight>
                            <NavDropdown  
                            eventKey={3} 
                            title={
                                <a style={navitemStyle}>
                                Services</a>
                             }
                            id="service">
                            <LinkContainer to='/homePreSigninPage'>
                                <MenuItem eventKey={3.1}>Homes</MenuItem>
                                </LinkContainer>
                                <MenuItem eventKey={3.2}>Office Spaces</MenuItem>
                                <MenuItem eventKey={3.3}>Applications</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={1} href="#">
                            <div style={navitemStyle}>Become a Host</div>
                            
                            </NavItem> 
                            <NavItem eventKey={1} href="#">
                            <div style={navitemStyle}>Login</div>
                            </NavItem> 
                            <LinkContainer to="/signUp">
                                <NavItem>
                                <div style={navitemStyle}>SignUp</div>
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default NavBar; 