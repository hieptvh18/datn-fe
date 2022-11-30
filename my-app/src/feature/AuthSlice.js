import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserById, signIn } from "../api/auth";
import { toast } from 'react-toastify';
import { Navigate } from "react-router-dom";
export const Login = createAsyncThunk(
    "user/signin",
    async (user) => {
        const { data } = await signIn(user)
        localStorage.setItem('user', JSON.stringify(data))
        return data
    }
)

export const Logout = createAsyncThunk(
    "user/logout",
    () => {
        localStorage.removeItem('user')
    }
)

const user = JSON.parse(localStorage.getItem('user'))
const AuthSlice = createSlice({
    name: "user",
    initialState: {
        value: user ?? false
    },

    extraReducers: (builder) => {
        builder.addCase(Login.fulfilled, (state, action) => {
            state.value = action.payload
            const toatMess = () => toast.success('Đăng nhập thành công !')
            toatMess()
        })
        builder.addCase(Login.rejected, (state, action) =>{
            state.value = false
            const toatMess = () => toast.error('Đăng nhập thất bại vui lòng thử lại !')
            toatMess()
        })
        builder.addCase(Logout.fulfilled, (state, action) => {
            state.value = false
        })
    }

})

export default AuthSlice.reducer