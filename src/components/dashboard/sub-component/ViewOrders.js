import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ViewOrders.css';
const ViewOrders = () => {

    const [allOrders, setAllOrders] = useState([]);

    const getAllOrders = async () => {
        try {
            const res = await axios.get('https://quiet-lowlands-25512.herokuapp.com/api/order/orderAll');
            setAllOrders(res.data)

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getAllOrders()
    }, []);


    return (
        <div>
            <h1 className="mx-auto">View All  Orders</h1>

            <table>

                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Email</th>
                        <th>Product Price</th>
                        <th>Control</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        allOrders.map(order => (
                            <tr>
                                <td><img style={{ height: '50%', width: '50%' }} alt='productImage' src={order.productImage} /></td>
                                <td>{order.productName}</td>
                                <td>{order.customerEmail}</td>
                                <td>{order.price}</td>
                                <td><span className="blue">View</span><span className="pink">Delete</span></td>
                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>
    );
};

export default ViewOrders;