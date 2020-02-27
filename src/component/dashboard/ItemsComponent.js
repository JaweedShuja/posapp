import React, {Component} from 'react'
// import img from '../images/unnamed.jpg'
import {Card, Button} from 'react-bootstrap'
import Item from './Item.js'

class ItemsComponent extends Component{
    constructor()
    {
        super()
        this.state = {
            itemName : [
                {
                    name:"Checken Burger",
                    price:"120"
                },
                {
                    name:"Beaf Burger",
                    price:"150"
                },
                {
                    name:"Small Pizza",
                    price:"320"
                },
                {
                    name:"Chicken Roll",
                    price:"100"
                },
                {
                    name:"Coldrink",
                    price:"30"
                },
                {
                    name:"Chicken Sandwich",
                    price:"120"
                },
                {
                    name:"Raita",
                    price:"50"
                },
                
                
            ]
        }
    }
    render(){
        return(
            <div className="row">
               
                    {/* <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>Rs 500</Card.Text>
                            <Button variant="primary">Add</Button>
                        </Card.Body>
                    </Card> */}

                    {
                        this.state.itemName.map((data) => <Item data={data}/>)
                    }
                
                {/* <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            
                            <Button variant="primary">Add</Button>
                        </Card.Body>
                    </Card>
               
                <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            
                            <Button variant="primary">Add</Button>
                        </Card.Body>
                    </Card>
               
                <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            
                            <Button variant="primary">Add</Button>
                        </Card.Body>
                    </Card> */}
               
            </div>
        );
    }
}

export default ItemsComponent