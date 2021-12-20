import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import axios from 'axios';
import swal from 'sweetalert';



const customStyles = {
    content: {
        top: '25%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const EditProduct = ({ modalIsOpen, closeModal, product }) => {
    const [image, setImage] = useState([])
    const { _id, title,  description, price } = product;
    console.log(product._id);

    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        const productUpdateData = {
            title: data.title,
            photo: data.photo,
            description: data.description,
            price: data.price,
        };
        try {
            const res = await axios({
                method: 'put',
                url: `http://localhost:5500/api/product/updated/${_id}`,
                data: productUpdateData
            });
            console.log('server side response', res)
            swal("Successfully updated", "Your Prodct has been successfully updated!", "success");

        }
        catch (err) {
            swal("Failed!", "error", { dangerMode: true });
            console.log(err);
        }
    };


    // photo upload 
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '85444d10cf609e017623ead34516426d');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImage(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="modal-form">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className='modal-form' onSubmit={handleSubmit(onSubmit)}>
                    <input  className="image-input" type='file' onChange={handleImageUpload} />
                    <br />
                    <input type='text' defaultValue={title} placeholder="News Title" {...register("title")} />
                    <br />
                    <input type='text' defaultValue={price} placeholder="Author Name" {...register("price")} />
                    <br />
                    <textarea type='text' defaultValue={description} placeholder="News Description" {...register("description")} />

                    <br />
                    <input className='custom-btn' type="submit" />
                </form>
            </Modal>
        </div>
    );
};

export default EditProduct;