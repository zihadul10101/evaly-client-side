import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutAction } from '../../../redux/action/action';

const Navbar = () => {
    const dispatch = useDispatch();
    const logout = useSelector((state) => state?.auth?.authdetails?.email)

    return (
        <div  className="mt-5">
             <nav className="navbar navbar-expand-lg navbar-light  fixed-top " style={{backgroundColor:'#00FFFF'}}>
        <div className="container ">
            <div className="col-md-6">
                <span className="text-primary">Evaly </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-md-6">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                      
                            <Link to="/home" class="nav-link">Home</Link>
                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="/product">Product</Link>
                        
       
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        
       
                        </li>
                     
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                         
                        </li>

                      

                        {
                          logout && <>
                          
                          <li className="nav-item">
                            <Link onClick={() => dispatch(logOutAction())} to="/" className="nav-link" >LogOut</Link>
                         
                        </li>
                          
                          </>  
                        }
                    </ul>

                </div>
            </div>
        </div>
    </nav>
        </div>
    );
};

export default Navbar;