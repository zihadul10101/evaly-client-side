import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SignIn from '../components/authication/SignIn';
import Dashboard from '../components/dashboard/Dashboard';
import Navbar from '../components/header/nav-bar/Navbar';
import Login from '../components/authication/login/Login';
import Product from '../components/product/Product';
import SignUp from '../components/authication/signup/SignUp';
import Home from '../pages/Home';
import ProductDetail from '../components/product/sub-component/ProductDetail';
import Order from '../components/product/sub-component/Order';
import PrivateRoute from '../components/authication/PrivateRoute';

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/home">
                    <Home />
                </Route>

                <Route exact path="/product">
                    <Product />
                </Route>

                <PrivateRoute exact path="/dashboard">
                    <Dashboard />
                </PrivateRoute>
                <Route exact path="/product/:_id">
                    <ProductDetail />
                </Route>

                <PrivateRoute exact path="/products/order">
                 <Order />

                </PrivateRoute>

                <Route exact path="/Signin">
                    <SignIn />
                </Route>

             
                <Route exact path="/login">
                    <Login />
                </Route>


                <Route exact path="/signup">
                    <SignUp />
                </Route>

            </Switch>
        </Router>
    );
};

export default Routes;