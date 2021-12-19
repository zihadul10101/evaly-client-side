import React from 'react';

const UserOrderDetails = ({ data, index }) => {
    const {createdAt,customerEmail,productImage,productName,price } = data;
    return (
        <>
          <tr>
              <td> {new Date(createdAt).toDateString()}</td>
              <td>{customerEmail}</td>
              <td>{productImage}</td>
              <td>{productName}</td>
              <td>{price}</td>
              <td>Pandding</td>
              </tr>  
        </>
    );
};

export default UserOrderDetails;