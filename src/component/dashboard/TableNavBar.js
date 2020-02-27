import React from 'react'
import {Table, Button} from 'react-bootstrap'

class TableNavBar extends React.Component{
    render(){
        return(

            <div className="container-fluid">
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Item Name</th>
                    <th>QTY</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Beaf Burger</td>
                    <td>2</td>
                    <td>150</td>
                    <td>300</td>
                    <td>
                        <div className="row">
                            <Button>+</Button>
                            <Button variant="primary">-</Button>
                            <Button variant="dark">Remove</Button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Cold drink Regular</td>
                    <td>2</td>
                    <td>30</td>
                    <td>60</td>
                    <td>
                        <div className="row">
                            <Button>+</Button>
                            <Button variant="primary">-</Button>
                            <Button variant="dark">Remove</Button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td colSpan="3">Total</td>
                    <td>360</td>
                </tr>
            </tbody>
        </Table>
        <div class="row">
            <div class="col-sm-3">
                <Button variant="success">Confirm</Button>
            </div>
            <div class="col-sm-3">
                <Button variant="danger">Discart</Button>
            </div>
        </div>

</div>
        );
    }
}

export default TableNavBar