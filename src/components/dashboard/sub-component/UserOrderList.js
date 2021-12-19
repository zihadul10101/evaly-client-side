import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const UserOrderList = () => {

    const user = useSelector((state) => state?.auth?.authdetails)
    console.log(user);
    const userId = user._id;
    const [userOrder, setUserOrder] = useState([]);
    console.log(userOrder);
    const getAllOrders = async () => {
        try {
            const res = await axios.get(`http://localhost:5500/api/order/single/${userId}`);
            setUserOrder(res.data)
            console.log(res);

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getAllOrders()
    }, [userId]);

    return (
        <div>
            <h3>Order List Comming Soon</h3>
          

        </div>
    );
};

export default UserOrderList;