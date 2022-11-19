import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserById, signIn } from "../api/auth";
import { toast } from "react-toastify";
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
export const listUserById = createAsyncThunk(
    "user/listUserById",
    async (datas) => {
        const { data } = await getUserById(datas[0], datas[1])
        return data
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
        builder.addCase(listUserById.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }

})

export default AuthSlice.reducer