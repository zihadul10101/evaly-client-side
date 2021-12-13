import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddProducts from './sub-component/AddProducts'
import AddAccount from './sub-component/AddAccount'
import ViewOrders from './sub-component/ViewOrders'
import './dashboard.css';
import Sidebar from './sub-component/Sidebar';
import CustomerProfile from './sub-component/CustomerProfile';
import { useSelector } from 'react-redux';

const Dashboard = () => {

  const findAdmin = useSelector((state) => state.auth.authdetails.role === 'Admin');
  console.log();

  return (

    <div id="wrapper">
      <Router>
        <Sidebar />
        <Switch>

          {
            findAdmin && <>

              <Route exact path="/dashboard/addproduct">
                <AddProducts />

              </Route>
              <Route exact path="/dashboard/addaccount">
                <AddAccount />
              </Route>

              <Route exact path="/dashboard/vieworder">
                <ViewOrders />
              </Route>




            </>
          }

          <Route exact path="/dashboard/customerprofile">
            <CustomerProfile />
          </Route>
        </Switch>
      </Router>


    </div>


  );
};

export default Dashboard;