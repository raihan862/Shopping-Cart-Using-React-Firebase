import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, Form, FormControl } from 'react-bootstrap';
import { cartContext } from '../../../App';
import fakeData from '../../../fakeData/index'
import Header_Nav from '../../Header/Header_Nav';
import Cart from '../Cart/Cart';
import ShopItem from './ShopItem';
const Shop = () => {
    const data = fakeData.slice(0, 10)
    const [products, setProducts] = useState(data);
    const [cartItem,setCartItem] = useContext(cartContext);
     
    const handleClick=(item,event)=>{
       
          const index= cartItem.findIndex(c_item => c_item.key === item.key)
          if(index !==-1){
               event.currentTarget.nextElementSibling.innerHTML= "This item is already in cart <br\> For quantity go to cart" ;  
          }
          else{
            item.quantity=1;
            setCartItem([...cartItem,item]);
          }      
    }
   
    return (
        <div>
            <Form inline id="Search-field">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Container>
                <Row >  
                    <Col sm="9" > 
                    {
                        products.map(product =>
                            <ShopItem product={product} counter={false}  handleClick= {handleClick}  key={product.key}></ShopItem>
                        )
                    }
                    </Col>
                    <Col sm="3" style={{ borderLeft: "1px solid #aaa " }}>
                        <Cart></Cart>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Shop;