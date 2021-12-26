import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserOrderDetails from './UserOrderDetails';


const UserOrderList = () => {
    const user = useSelector((state) => state?.auth?.authdetails)
    const userId = user._id;
    const [userOrder, setUserOrder] = useState([]);
    console.log(userOrder);

    const getAllOrders = async () => {
        try {
            const res = await axios.get(`https://quiet-lowlands-25512.herokuapp.com/api/order/single/${userId}`);
            setUserOrder(res.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getAllOrders()
    }, [userId]);

    return (
        <div>
            <h3 className="mx-auto">My Order List </h3>
            <table>
                <thead>
                    <tr>
                        <th>Order Date</th>
                        <th>Email</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Control</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userOrder?.map((p, i) => (
                            <UserOrderDetails key={p._id} index={i} data={p} />
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default UserOrderList;