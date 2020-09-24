import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { cartContext } from '../../App';
import Cart from '../Body/Cart/Cart';
import ShopItem from '../Body/Shop/ShopItem';

const ReviewCart = () => {
       
        const [cartItem,setCartItem] = useContext(cartContext);
       
        const handleClick=(item)=>{
            const newItem= cartItem.filter(c_item=>c_item.key !== item.key )
            setCartItem(newItem)
            
        }
        const handleQuantity=(item,event)=>{
           
            const index= cartItem.findIndex(c_item => c_item.key === item.key)
            
               if (event.currentTarget.id =="plus") {
                  cartItem[index].quantity=item.quantity + 1;
                   
               }
               else{
                   if(item.quantity >1){
                cartItem[index].quantity=item.quantity - 1;
            }
               }
               setCartItem([...cartItem])
        }
       
        return (
            <div>
               {
               cartItem.length ? (
               <Container>
                    <Row >  
                        <Col sm="9" > 
                        {
                            cartItem.map(product =>
                                <ShopItem product={product} counter={true} handleQuantity={handleQuantity}  handleClick= {handleClick}  key={product.key}></ShopItem>
                            )
                        }
                        </Col>
                        <Col sm="3" style={{ borderLeft: "1px solid #aaa " }}>
                            <Cart placeOrder= {true}></Cart>
                        </Col>
                    </Row>
                </Container>):(
                    <h1 style={{textAlign:"center"}}>No item in the Cart</h1>
                )
                }
            </div>
        );
    
};

export default ReviewCart;