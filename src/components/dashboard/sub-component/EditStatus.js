import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import axios from 'axios';
import swal from 'sweetalert';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const EditStatus = ({ modalIsOpen, closeModal, order }) => {
    const { status, _id } = order;
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        const orderUpdateStatus = {
            status: data.status,
        };
        try {
            const res = await axios({
                method: 'put',
                url: `https://quiet-lowlands-25512.herokuapp.com/api/order/updated/${_id}`,
                data: orderUpdateStatus
            });
            swal("Successfully updated", "Your Products been successfully updated!", "success");

        }
        catch (err) {
            swal("Failed!", "error", { dangerMode: true });
        }
    };

    return (
        <div className="modal-form">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className='modal-form' onSubmit={handleSubmit(onSubmit)}>
                    <select class="form-select" defaultValue={status} {...register("status")} required aria-label="Default select example">
                        <option selected>Open this select status</option>
                        <option value="1">Pending</option>
                        <option value="2">On Going</option>
                        <option value="3">Done</option>
                    </select>
                    <br />
                    <input className='custom-btn' type="submit" />
                </form>
            </Modal>
        </div>
    );
};

export default EditStatus;