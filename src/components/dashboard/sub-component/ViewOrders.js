import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from "react-modal";
import './ViewOrders.css';
const ViewOrders = () => {
    const [success, setSuccess] = useState(false)
    const [allOrders, setAllOrders] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);

    const getAllOrders = async () => {
        try {
            const res = await axios.get('http://localhost:5500/api/order/orderAll');
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
                console.log('data deleted successfully');
                setSuccess(true);
            }

        } catch (err) {
            console.log('Not deleted!');

        }
    };

    function toggleModal() {
        setIsOpen(!isOpen);
      }

      const customStyles = {
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            height:100,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        },
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
                                <td><span onClick={toggleModal} className="blue">Pandding</span></td>
                            </tr>

                        ))
                    }

                    


                </tbody>

            </table>

            {
    isOpen && (
        <Modal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>My modal dialog.</div>
        <input placeholder="abc" />
      <span>  <button onClick={toggleModal}>Close modal</button></span>
      <span>  <button onClick={toggleModal}>Save Date</button></span>
      </Modal>
    )
}

        </div>
    );
};

export default ViewOrders;