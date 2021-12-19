import React from 'react';
import { useSelector } from 'react-redux';
import {useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Order = () => {
    const history = useHistory();
    const singleProductDetail = useSelector((state) => state.auth.cartItem);
    const customerEmail = useSelector((state) => state.auth.authdetails)
    //  console.log(customerEmail._id);

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const orderData = {
            userId: customerEmail._id,
            customerEmail: data.CustomerEmail,
            productName: data.ProductName,
            productImage: data.ProductImage,
            price: data.Price,
        }
        console.log(orderData.userId);
        try {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:5500/api/order/addneworder',
                data: orderData
            });
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }

        history.replace('/dashboard')

    }

    return (

        <div className="col-md-4 container bg-default">

            <h4 className="my-4">
                Checkout
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label for="email">Email</label>
                    <input {...register("CustomerEmail")} type="email" className="form-control" value={customerEmail.email} id="email" placeholder="you@example.com" required />
                </div>

                <div className="form-group">
                    <label for="email">Product Name</label>
                    <input {...register("ProductName")} type="name" className="form-control" value={singleProductDetail.title} required />
                </div>

                <div className="form-group">
                    <label for="price">Price</label>
                    <input {...register("Price")} type="price" className="form-control" value={singleProductDetail.price} required />
                </div>


                <div className="form-group">
                    <label for="price">Photo</label>
                    <input {...register("ProductImage")} type="photo" className="form-control" value={singleProductDetail.photo} required />
                </div>



                <h4 className="mb-4">Payment</h4>

                <div className="form-check">
                    <input type="radio" className="form-check-input" id="credit" name="payment-method" checked required />
                    <label for="credit" className="form-check-label">Credit Card</label>
                </div>

                <div className="form-check">
                    <input type="radio" className="form-check-input" id="debit" name="payment-method" required />
                    <label for="debit" className="form-check-label">Debit Card</label>
                </div>

                <div className="form-check">
                    <input type="radio" className="form-check-input" id="paypal" name="payment-method" required />
                    <label for="paypal" className="form-check-label">PayPal</label>
                </div>
                <div>
                    <button className="btn btn-primary bt-lg btn-block" type="submit"> Order Now! </button>
                </div>
            </form>
        </div>
    );
};

export default Order;