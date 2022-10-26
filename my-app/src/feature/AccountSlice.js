import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addAccounts } from "../api/account";

export const addAccount = createAsyncThunk(
    'account/addAccount',
    async (account) => {
        const { data } = await addAccounts(account)
        return data
    }
)

const AccountSlice = createSlice({
    name: 'accoount',
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(addAccount.fulfilled, (state, action) => {
            state.value.push(action.payload)
        })
    }
})

export default AccountSlice.reducer