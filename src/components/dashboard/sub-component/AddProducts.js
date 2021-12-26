import React, { useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
const AddProducts = () => {
    const [photo, setPhoto] = useState('');
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const productData = {
            title: data.Title,
            description: data.Description,
            price: data.Price,
            photo: photo
        }
        try {
            const res = await axios({
                method: 'post',
                url: 'https://quiet-lowlands-25512.herokuapp.com/api/product/addnewproduct',
                data: productData
            });
            swal({
                title: "Product added successfully!",
                icon: "success",
            });
        }
        catch (err) {
            swal("Failed!", "Product Not Added !!", "error", { dangerMode: true });
        }
    }

    const handleImageUpload = (event) => {
        event.preventDefault();
        const imageData = new FormData();
        imageData.set('key', '169c06cd08fc190c1c2dee2a05effaf1');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then((response) => {

                setPhoto(response.data.data.display_url);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    return (

        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="mx-auto">Add Product</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="first">Title</label>
                            <input {...register("Title")} type="text" className="form-control" placeholder="title" id="first" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="last">Photo</label>
                            <input onChange={handleImageUpload} type="file" className="form-control" id="customFile" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="company"> description</label>

                            <textarea {...register("Description")} type="text" className="form-control" placeholder="description" id="company" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="phone">price</label>
                            <input {...register("Price")} type="text" className="form-control" id="phone" placeholder="price" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddProducts;