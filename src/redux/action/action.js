import { authSlice } from "../slice/authSlice";

const { actions: slice } = authSlice;



    export const customAuthAction = (authdetails) => (dispatch) => {
        dispatch(slice.customAuth(authdetails))
    }
   
    export const addToCart = (cartItem) => (dispatch) => {
        dispatch(slice.addtocart(cartItem))
    }

    export const logOutAction = () => (dispatch) => {
        dispatch(slice.logOut())
    }
