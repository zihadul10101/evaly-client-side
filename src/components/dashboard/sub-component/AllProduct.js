import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import EditProduct from './EditProduct';

const AllProduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [delet,setDelet] = useState(false);
    const [productModal, setProductModal] = useState(false);

    function openModal() {
        setProductModal(true);
    }
    function closeModal() {
        setProductModal(false);
    }

    const getAllProduct = async () => {
        try {
            const res = await axios.get('https://quiet-lowlands-25512.herokuapp.com/api/product/productAll');
            setAllProducts(res.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getAllProduct()
    }, []);

    const handleDelete = async (_id) => {
        try {
            const res = await axios.delete(`http://localhost:5500/api/product/${_id}`);
            if (res) {
                // console.log('data deleted successfully');
                swal('data deleted successfully',{ rightMode: true });
                setDelet(true);
            }
        } catch (err) {
            console.log('Not deleted!');
            swal("Failed!", "Not deleted!!", "error", { dangerMode: true });
        }
    };

    return (
        <div>
             <h3 className="mx-auto">All {allProducts.length} Product List </h3>
            <table>

            <thead>
                    <tr>
                        <th>Product Add Date</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Description</th>
                        <th>Control</th>
                        <th>Updated</th>
                    </tr>
                </thead>
                <tbody>
             {
                 allProducts.map(product =>(
                    <tr>
                    <td> {new Date(product.createdAt).toDateString()}</td>
                    <td>{product.photo}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td><span onClick={() => handleDelete(product._id)} className="pink">Delete</span></td>
                    <td><span onClick={openModal} className="blue">Edited</span></td>
                   
                    <EditProduct
                                    modalIsOpen={productModal}
                                    closeModal={closeModal}
                                    product={product}
                                />

                    </tr>
                 ))
             }

                </tbody>
            </table>
        </div>
    );
};

export default AllProduct;