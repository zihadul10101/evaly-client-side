import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import ReactPaginate from "react-paginate";
import EditProduct from './EditProduct';
import './AllProduct.css';

const AllProduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [delet, setDelet] = useState(false);
    const [productModal, setProductModal] = useState(false);
    const [Product, setProduct] = useState({});
    const [pageCount, setPageCount] = useState(0);
    const [perPage] = useState(4);
    const [offset, setOffset] = useState(0);

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1);
    };

    function openModal(product) {
        setProductModal(true);
        setProduct(product);
    }
    function closeModal() {
        setProductModal(false);
    }

    const getAllProduct = async () => {
        try {
            const res = await axios.get('https://quiet-lowlands-25512.herokuapp.com/api/product/productAll');
            const slice = res.data.slice(offset, offset + perPage);
            setAllProducts(slice);
            setPageCount(Math.ceil(res.data.length / perPage));

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getAllProduct()
    }, [offset]);

    const handleDelete = async (_id) => {
        try {
            const res = await axios.delete(`https://quiet-lowlands-25512.herokuapp.com/api/product/${_id}`);
            if (res) {
                swal({
                    title: "deleted successfully!",
                    icon: "success",
                });
                setDelet(true);
            }
        } catch (err) {
            console.log('Not deleted!');
            swal("Failed!", "Not deleted!!", "error", { dangerMode: true });
        }
    };

    const [search, setSearch] = useState("");
    const [filteredProduct, setfilteredProduct] = useState([]);
    useEffect(() => {
        setfilteredProduct(
            allProducts.filter((pname) =>
                pname.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, allProducts]);

    return (
        <div>
            <h3 className="mx-auto">All {allProducts.length} Product List </h3>
            <table>
                <input
                    type="text"
                    placeholder="Search Product Name"
                    onChange={(e) => setSearch(e.target.value)}
                />
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
                        filteredProduct.map(product => (
                            <tr>
                                <td> {new Date(product.createdAt).toDateString()}</td>
                                <td>
                                    <img src={product.photo}  style={{ 'height':'60%', 'width':'60%'}}/>
                                </td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td><span onClick={() => handleDelete(product._id)} className="pink">Delete</span></td>
                                <td><span onClick={() => openModal(product)} className="blue">Edited</span></td>

                                <EditProduct
                                    modalIsOpen={productModal}
                                    closeModal={closeModal}
                                    product={Product}

                                />

                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </div>
    );
};

export default AllProduct;