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
            <Link to="/dashboard/addproduct">Add Product</Link>
          </li>
          <li>
            <Link to="/dashboard/addaccount">Add Admin</Link>
          </li>
          <li>
            <Link to="/dashboard/vieworder">View Orders</Link>
          </li>
           
           </>
         }
          <li>
            <Link to="/dashboard/customerprofile">Customer Profile</Link>
          </li>

          <li>
            <Link to="/dashboard/orderlist">Order List</Link>
          </li>

        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;


