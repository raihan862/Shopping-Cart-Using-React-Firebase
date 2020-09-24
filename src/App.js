import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/Body/Shop/Shop';
import ReviewCart from './Components/ReviewItem/ReviewCart';
import PlaceOder from './Components/PlaceOrder/PlaceOder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Signin from './Components/Singin/Signin';
import ForgetPassword from './Components/Login/ForgetPassword';


export const cartContext = createContext();
export const LoginContext = createContext();

function App() {
  const [cartItem,setCartItem] = useState([]);
  const [loginUser,setLoginUser] = useState({
    email:"",
    name:""
  });
     
  return (
     <cartContext.Provider value= {[cartItem,setCartItem]}>
      <BrowserRouter>
      <LoginContext.Provider value={[loginUser,setLoginUser]}>
        <Header></Header>
        <Switch>
            <Route path="/shop">
                <Shop></Shop>
            </Route>
            <Route path="/review">
                 <ReviewCart></ReviewCart>
            </Route>
            <Route path="/signin">
                 <Signin></Signin>
            </Route>
            <Route path="/password-reset">
                 <ForgetPassword></ForgetPassword>
            </Route>
            <PrivateRoute path="/place-order">
                  <PlaceOder></PlaceOder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
           
            <Route exact path="/">
                <Shop></Shop>
            </Route>
             
        </Switch>
        </LoginContext.Provider>
        </BrowserRouter>
        </cartContext.Provider>
  );
}

export default App;
