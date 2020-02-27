import React, {Component} from 'react'
import {Navbar,Nav, Form , FormControl, Button} from 'react-bootstrap'

class MainNavBar extends Component{
    render(){
        return(
            <Navbar bg="primary" variant="dark">
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                <Nav className="mr-auto">
                    <Nav.Link href="#home" style={{color:"white"}}>Fast Food</Nav.Link>
                    <Nav.Link href="#features" style={{color:"white"}}>BBQ</Nav.Link>
                    <Nav.Link href="#pricing" style={{color:"white"}}>Karai</Nav.Link>
                    <Nav.Link href="#home" style={{color:"white"}}>Burger</Nav.Link>
                    <Nav.Link href="#features" style={{color:"white"}}>Drink</Nav.Link>
                    <Nav.Link href="#pricing"  style={{color:"white"}}>Extra</Nav.Link>
                </Nav>
                    <Button variant="outline-light">Add Category</Button>

                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form> */}
            </Navbar>
        );
    }
}

export default MainNavBar