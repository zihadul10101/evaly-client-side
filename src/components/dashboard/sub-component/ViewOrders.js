import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ViewOrders.css';
import swal from 'sweetalert';
import EditStatus from './EditStatus';

const ViewOrders = () => {
    const [success, setSuccess] = useState(false)
    const [allOrders, setAllOrders] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);


    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }


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
    }, [success]);

    const handleDelete = async (_id) => {
        try {
            const res = await axios.delete(`http://localhost:5500/api/order/${_id}`);
            if (res) {
                swal({
                    title: "deleted successfully!",
                    icon: "success",
                  });
                setSuccess(true);
            }
        } catch (err) {
            console.log('Not deleted!');
            swal("Failed!", "Not deleted!!", "error", { dangerMode: true });
        }
    };


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
                        <th>Delete</th>
                        <th>Update</th>
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
                                <td><span onClick={() => handleDelete(order._id)} className="pink">Delete</span></td>
                                <td><span onClick={openModal} className="blue">{order.status}</span></td>
                                <EditStatus
                                    modalIsOpen={modalIsOpen}
                                    closeModal={closeModal}
                                    order={order}
                                />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ViewOrders;