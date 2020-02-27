import React from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

class index extends React.Component{


    constructor(){
        super()
        this.state = {
            productName:"",
            productPrice:"",
            productCategoryName:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        //alert('javed')
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }
    handleSubmit(){
        fetch('http://localhost:8000/product',{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productName:this.state.productName,
                productPrice:this.state.productPrice,
                productCategoryName:this.state.productCategoryName
            })
        }).then(() => {
            alert('Data Added')
        }).catch((err) => {
            Alert(err.message)
        })
    }
    render(){
        return(
            <div className="col-sm-6" >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Product Name" name="productName" value={this.state.productName} onChange={this.handleChange}/>
                       
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Price" name="productPrice" value={this.state.productPrice} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" name="productCategoryName" value={this.state.productCategoryName} onChange={this.handleChange}>
                        <option>Pizza</option>
                        <option>Burger</option>
                        <option>Coldrink</option>
                        </Form.Control>
                    </Form.Group>     

                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
                <p>Name = {this.state.productName}</p>
                <p>Price = {this.state.productPrice}</p>
                <p>Category = {this.state.productCategoryName}</p>
            </div>
        );
    }
}

export default index