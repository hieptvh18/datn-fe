import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../api/auth";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
export const Login = createAsyncThunk(
    "user/signin",
    async (user) => {
        try {
            const { data } = await signIn(user)
            localStorage.setItem('user', JSON.stringify(data))
            return data

        } catch (error) {
            const notify = () => toast("Sai mật khẩu hoặc số điện thoại!")
            notify()
        }

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
        value: user ?? []
    },

    extraReducers: (builder) => {
        builder.addCase(Login.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(Logout.fulfilled, (state, action) => {
            state.value = []
        })
    }

})

export default AuthSlice.reducer