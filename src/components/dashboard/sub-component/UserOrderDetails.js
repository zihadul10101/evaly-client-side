import React from 'react';

const UserOrderDetails = ({ data, index }) => {
    const {createdAt,customerEmail,productImage,productName,price,status } = data;
    return (
        <>
          <tr>
              <td> {new Date(createdAt).toDateString()}</td>
              <td>{customerEmail}</td>
              <td>
                  <img src={productImage} style={{ 'height':'20%', 'width':'20%'}} />
              </td>
              <td>{productName}</td>
              <td>{price}</td>
              <td>{status}</td>
              </tr>  
        </>
    );
};

export default UserOrderDetails;