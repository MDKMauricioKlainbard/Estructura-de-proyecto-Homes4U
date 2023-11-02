import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authentification: (state, action) => {
            return { ...state, isAuth: true }
        }
    }
})

const auth = authSlice.reducer; //La constante debe tener el mismo nombre que la propiedad name

export const { authentification } = authSlice.actions;
export default auth;
