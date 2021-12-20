import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

const AddAccount = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
		const newAdminData = {
			email: data.Email,
            role: data.Role,
            password: data.Password
		}
        try {
			const res = await axios({
			  method: 'post',
			  url: 'https://quiet-lowlands-25512.herokuapp.com/api/auth/register',
			  data: newAdminData
			});
		
			swal('Admin Added Successfully');
			console.log(res);
		}
		catch (err) {
			console.log(err);
            swal("Failed!", "Admin not added!!", "error", { dangerMode: true });
		  }
    }

    return (
        <div className="container">
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