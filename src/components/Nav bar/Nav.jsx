
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Langing from '../landing page/Langing_page'
import Products from '../landing page/products/Products'
function Naav() {
    return (<Router>

        <div style={{position:'fixed',zIndex:'1'}}>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Link to='/home'><img width='8%' src='img.PNG' /></Link> 
                
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                       <Nav.Link href="/products">Products</Nav.Link>
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
                       <Button variant="light" ><i class='fas fa-user-circle' ></i></Button>
                        <Nav.Link eventKey={2} href="#memes">
                           <Button variant="light" onClick={(e) => { e.target.classList.toggle('btn-dark') }}  ><i className="fa fa-lightbulb-o" ></i></Button>

      </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <Switch>
          <Route path="/home">
            <Langing />
            </Route>
            <Route to='/products'>
                <Products />
            </Route>
            </Switch>
        </Router>
    )
}

export default Naav

{/* 
                

<Navbar.Brand href="#home"></Navbar.Brand> */}
