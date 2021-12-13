import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const findAdmin = useSelector((state) => state.auth.authdetails.role === 'Admin');



  return (
    <div>
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <h2>Dashboard</h2>
        </div>
        <ul className="sidebar-nav">
         {
           findAdmin && <>
           
           <li className="active">
            <Link to="/dashboard/addproduct"><i className="fa fa-home"></i>Add Product</Link>
          </li>
          <li>
            <Link to="/dashboard/addaccount"><i className="fa fa-plug"></i>Add Admin</Link>
          </li>
          <li>
            <Link to="/dashboard/vieworder"><i className="fa fa-user"></i>View Orders</Link>
          </li>
           
           </>
         }
          <li>
            <Link to="/dashboard/customerprofile"><i className="fa fa-user"></i>Customer Profile</Link>
          </li>

          <li>
            <Link to="/dashboard/orderlist"><i className="fa fa-user"></i>Order List</Link>
          </li>

        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;


{/* <div id="navbar-wrapper">
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a href="#" className="navbar-brand" id="sidebar-toggle"><i className="fa fa-bars"></i></a>
    </div>
  </div>
</nav>
</div> */}