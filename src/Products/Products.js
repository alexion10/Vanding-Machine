import React from 'react';

//Redux =>
import { useSelector } from 'react-redux';

//Bootstrap =>
import { Card } from 'react-bootstrap';


function Products(){
    const item = useSelector(state => state.items.products);
    const productList = item.map((i) => 
    <Card.Body style={{textAlign: 'center', backgroundColor: i.color, color: "white"}}>
        <Card.Title style={{backgroundColor: "white", color: "black", padding: 10}}>{i.item}</Card.Title>
        <Card.Subtitle as="h4">Quantity: {i.quantity}</Card.Subtitle>
        <Card.Text as="h5">Price: {i.price} RON</Card.Text>
        <Card.Text>Code {i.id}</Card.Text>
    </Card.Body>
    );
    return (
        <div className="products">
            {productList}
        </div>
    )
    
}


export default Products;