import React, { useContext } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { cartContext } from '../../../App';

const Cart = (props) => {
    const [cartItem, setCartItem] = useContext(cartContext);
    let shiping = 0
    let price = 0
    let tax = 0
    let total = 0

    cartItem.map(item => {
        shiping = parseFloat((shiping + Number(item.shipping)*Number(item.quantity)).toFixed(2));
        price = parseFloat((price + Number(item.price)*Number(item.quantity)).toFixed(2));
        total = parseFloat((shiping + price).toFixed(2))
        tax = parseFloat(((total * 3) / 100).toFixed(2))

    })
    const finalPrice = parseFloat((total + tax).toFixed(2))


    return (
         
        <div style={{ textAlign: "center" }}>
            <h4>Order Review</h4>
            <h6>Item Ordered {cartItem.length}</h6>
            <div style={{ textAlign: "left" }}>
                <Row >
                    <Col>Item</Col>
                    <Col>$ {price}</Col>
                </Row>
                <Row>
                    <Col>Shipping </Col>
                    <Col>$ {shiping}</Col>
                </Row>
                <Row>
                    <Col>Tax</Col>
                    <Col>$ {tax} </Col>
                </Row>
                <Row style = {{color:"red",padding:"5px 0px "}}>
                    
                    <Col><h5> Total</h5></Col>
                    <Col><h5>$ {finalPrice} </h5></Col>
                   
                </Row>
                {
                props.placeOrder ?(
                    <Link to="/place-order">
                        <Button variant = "warning" style = {{width:"80%",borderRadius:"15px"}}>Place Order</Button>
                    </Link>
                ):(
                    <Link to="/review">
                        <Button variant = "warning" style = {{width:"80%",borderRadius:"15px"}}>Review Cart</Button>
                    </Link>
                )
                }
                    
                 
            </div>

        </div>
    );
};

export default Cart;