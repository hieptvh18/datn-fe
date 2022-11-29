import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WebSetting } from "../api/account";


export const websettings = createAsyncThunk(
    'websetting/listWebsetting',
    async () => {
        const { data } = await WebSetting()
        return data
    }
)

const WebSettingSlice = createSlice({
    name: 'websetting',
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(websettings.fulfilled, (state, action) => {
            state.value = action.payload
        })

    }
})

export default WebSettingSlice.reducer