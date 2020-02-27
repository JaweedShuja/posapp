import React,{Component} from 'react'
import img from '../images/unnamed.jpg'
import {Card, Button} from 'react-bootstrap'

class Item extends Component{
    render(){
        return(
            <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title className="text-responsive">{this.props.data.name}</Card.Title>
                            <Card.Text>Rs {this.props.data.price}</Card.Text>
                            <Button variant="primary">Add</Button>
                        </Card.Body>
                    </Card>
        );
    }
}

export default Item