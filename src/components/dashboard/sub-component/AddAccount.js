import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAccount = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
		const newAdminData = {
			email: data.Email,
            role: data.Role,
            password: data.Password
		
		}


        toast('please wait for lodding...', {
			position: "center",
			autoClose: 9000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

        try {
			const res = await axios({
			  method: 'post',
			  url: 'http://localhost:5500/api/auth/register',
			  data: newAdminData
			});
		
			
			console.log(res);
		}
		catch (err) {
            toast("error!");
			console.log(err);
		  }

    }

    return (
        <div className="container">
            	<ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="mx-auto">Add New Admin</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="first">Email</label>
                            <input {...register("Email")} type="text" className="form-control" placeholder="email" id="first" />
                        </div>
                    </div>

                    <div className="col-md-6">

                        <div className="form-group">
                            <label for="phone">Role</label>
                            <input {...register("Role")} type="text" className="form-control" id="phone" placeholder="role" />
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="company">Password</label>
                            <input {...register("Password")} type="text" className="form-control" placeholder="password" id="company" />
                        </div>
                    </div>



                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    );
};

export default AddAccount;