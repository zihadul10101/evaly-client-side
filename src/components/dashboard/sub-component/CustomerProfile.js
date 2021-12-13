import React from 'react';
import { useSelector } from 'react-redux';

const CustomerProfile = () => {

    const profile = useSelector((state) => state.auth.authdetails.email);
    console.log(profile);


    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card">
                   
                    <div className="mt-5 text-center">
                        <h4 className="mb-0">Your Email</h4> <span className="text-muted d-block mb-2">{profile}</span>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default CustomerProfile;