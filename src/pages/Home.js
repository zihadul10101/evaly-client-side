import React from 'react';
import Navbar from '../components/header/nav-bar/Navbar';
import Slider from '../components/header/slider/Slider';
import Product from '../components/product/Product';

const Home = () => {
    return (
        <div>
             <Navbar />
             <Slider />
             <Product />
        </div>
    );
};

export default Home;