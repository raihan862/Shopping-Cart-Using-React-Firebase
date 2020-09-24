import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {FaCartPlus,FaMinus,FaPlus} from 'react-icons/fa'
import { cartContext } from '../../../App';
import Cart from '../Cart/Cart';
 
const ShopItem = (props) => {
    const { catagoty, name, features, img, price, seller, shipping, star, stock,quantity } = props.product;
    const [cartItem,setCartItem] = useContext(cartContext); 
    return (
    <Row style={{padding:"10px",borderBottom: "1px solid #aaa " }}>
        <Col sm="4">
            <img src={img} width="100%" />
        </Col>
        <Col sm="8">
            <h6>
                {name}
            </h6>
            <Row>
                <Col >
                    <p>BY {seller}</p>
                    <h6>Price ${price}</h6>
                    
                    {
                props.counter ? (
                    <>
                    <Row style = {{backgroundColor:"#DAF5ED ",padding:"10px 2px"}}>
                        <Col sm="4">
                <h5>Quantity</h5> 
                        </Col>
                    <Col sm="8" style={{display:"flex",justifyContent:"space-around"}}>
                       <button style={{border:"none",color:"Highlight"}} id="minus" onClick={(e)=> props.handleQuantity(props.product,e)}>
                            <FaMinus />
                       </button>
                       <h4 >{ quantity} </h4>
                       <button style={{ border:"none",color:"Highlight"}} id="plus" onClick={(e)=> props.handleQuantity(props.product,e)}>
                            <FaPlus />
                       </button>
                    </Col>
                    
                </Row>
                 <Button variant="warning" onClick= { e=>props.handleClick(props.product,e)} style= {{marginTop:"10px",padding:"5px 15px",fontSize:"14px",fontWeight:"bold"}}>Remove</Button>
                 </>
                ):(
                <>
                <p>Only left{stock} order Now</p>
                <Button variant="warning" onClick= { e=>props.handleClick(props.product,e)} style= {{marginTop:"10px",padding:"5px 15px",fontSize:"14px",fontWeight:"bold"}}><FaCartPlus /> Add To Card</Button>
                     <small style ={{color:"red",padding:"3px",display:"block"}}></small>
                </>
                )
                }
                    
                </Col>
                <Col>
                    <p>Rating  : {star}</p>
                    <h5>Features</h5>

                    <ul style = {{opacity:".8"}}>
                        {
                            features.map(feature => <li key={feature.description}><small>{feature.description} : {feature.value}</small></li>)
                        }
                    </ul>

                </Col>
            </Row>
        </Col>
    </Row>

               
    );
};

export default ShopItem;