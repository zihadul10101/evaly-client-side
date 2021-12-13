import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userdetails: {
            
        }, 
        cartItem:{

        }   
    },
    reducers: {
        customAuth: (state, action) => {
            state.authdetails = action.payload

        },
      addtocart: (state, action) => {
          state.cartItem = action.payload
      },
      logOut: (state, action) => {
        state.authdetails = {}

    },
    },
})