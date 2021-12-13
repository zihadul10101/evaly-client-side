import React from 'react';
import AddAccount from './sub-component/AddAccount';
import AddProducts from './sub-component/AddProducts';
import ViewOrders from './sub-component/ViewOrders';
const Admin = () => {
    return (
        <div>
            <AddProducts />
            <AddAccount />
            <ViewOrders />
        </div>
    );
};

export default Admin;