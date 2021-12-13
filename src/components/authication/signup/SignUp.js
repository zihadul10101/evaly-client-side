import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './SignUp.css';
import { useHistory } from 'react-router-dom';
const SignUp = () => {
  const history = useHistory();
  const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
		const userData = {
			email: data.email,
			password: data.password,
      role:"user"
		}

		try {
			const res = await axios({
			  method: 'post',
			  url: 'http://localhost:5500/api/auth/register',
			  data: userData
			});
			console.log(res);
		}
		catch (err) {
			console.log(err);
		  }
      history.replace('/login')
    
	}
    return (
        <div>
            <section className="vh-100"  style={{backgroundColor: '#eee'}} >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRradius:'25px'}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form onSubmit={handleSubmit(onSubmit)} className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input {...register("email")} type="email"  required id="form3Example3c" className="form-control" placeholder="Your Email" />
                     
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input {...register("password")}  required type="password" id="form3Example4c" className="form-control"  placeholder="Your Password" />
                   
                    </div>
                  </div>

              
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  type="submit"  required value="Submit" className="btn btn-primary btn-lg">Register</button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default SignUp;