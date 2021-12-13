import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const ProductContainer = () => {

    const [product, setProduct] = useState([]);
    const history = useHistory();
    const singleCart = (id) => {
        const url = `product/${id}`;
        history.push(url);
    }

    const getProduct = async () => {
        try {
            const res = await axios.get('https://quiet-lowlands-25512.herokuapp.com/api/product/productAll');

            setProduct(res.data)

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getProduct()
    }, []);

    return (
        <div>
            <section id="shoes" className="mt-5">
                <h3>Canvas Low-top</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5" >

                    {
                        product.map(pd => (
                            <div className="col" style={{ height: '33%', width: '33%' }}>
                                <div className="">
                                    <img src={pd.photo} style={{ height: '50%', width: '100%' }} className="card-img-top " alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{pd.title}</h5>
                                        <h5 className="card-title">{pd.price}</h5>
                                        <p className="card-text">{pd.description}</p>
                                    </div>
                                    <div className="card-footer panda-card-footer">

                                        <button onClick={() => singleCart(pd._id)} className="btn btn-warning">
                                            Buy Now
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default ProductContainer;