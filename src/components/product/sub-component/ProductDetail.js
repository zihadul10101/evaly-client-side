import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/action/action';

const ProductDetail = () => {

    const dispatch = useDispatch();
    const { _id } = useParams();

    const [singleProduct, setSingleProduct] = useState([]);
    // console.log(singleProduct);
    useEffect(() => {
        fetch('https://quiet-lowlands-25512.herokuapp.com/api/product/productAll')
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [])
    const singleProductDetails = singleProduct.find(pd => pd?._id === _id)
    // console.log(singleProductDetails);



    return (
        <section>
            <div className="collection-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="product-right-slick">
                                <div><img src={singleProductDetails?.photo} alt=""
                                    className="img-fluid blur-up lazyload image_zoom_cls-0" /></div>
                            </div>
                        </div>

                        <div className="col-md-6 pt-10 pb-50 mx-auto">
                            <div className="product-right">
                                <h2>{singleProductDetails?.title}</h2>
                                <h4><del>$459.00</del><span>55% off</span></h4>
                                <h3>{singleProductDetails?.price}</h3>
                                <div className="border-product">
                                    <h6 className="product-title">product details</h6>
                                    <p>{singleProductDetails?.description}</p>
                                </div>

                                <Link to="/products/order">

                                    <button className="btn btn-warning" onClick={() => dispatch(addToCart(singleProductDetails))} to="/product/checkout">
                                        Check Out
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ProductDetail;