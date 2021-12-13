import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
// import { CgSpinner, CgFacebook, CgGoogle } from 'react-icons/cg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { useDispatch } from 'react-redux';
import { customAuthAction } from '../../../redux/action/action';

const Login = () => {

	const history = useHistory();

	const dispatch = useDispatch();

	const [error, setError] = useState(false);
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = async (data) => {
		console.log(data.Email);
		const userData = {
			email: data.Email,
			password: data.password
		}

		// console.log(userData);

		toast('please wait for lodding...', {
			position: "top-right",
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
				url: 'https://quiet-lowlands-25512.herokuapp.com/api/auth/login',
				data: userData
			});
			dispatch(customAuthAction(res.data.others));

			// console.log(res);
		}
		catch (err) {
			setError(true);
			toast("error!");
			console.log(err);
		}

		history.replace('/')
	}




	return (
		<div>

			<div className="container-fluid">
				<ToastContainer />
				<div className="row main-content bg-success text-center">
					<div className="col-md-4 text-center company__info">
						<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
						<h4 className="company_title">Evaly</h4>
					</div>
					<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
						<div className="container-fluid">
							<div className="row">
								<h2>Log In</h2>
							</div>
							<div className="row">
								<form onSubmit={handleSubmit(onSubmit)} control="" className="form-group">
									<div className="row">
										<input {...register("Email")} type="text" className="form__input" required placeholder="Your Email" />
									</div>
									<div className="row">
										<span className="fa fa-lock"></span>
										<input {...register("password")} type="password" name="password" required id="password" className="form__input" placeholder="Your Password" />
									</div>
									<div className="row">
										<input type="submit" value="Submit" className="btn btn-primary" required />

									</div>
								</form>
								{error && <span style={{ color: 'red', marginTop: '10px' }}>Something went wrong!</span>}
							</div>
							<div className="row">
								<p>Don't have an account? <Link to="/signup">Register Here</Link></p>
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>
	);
};

export default Login;