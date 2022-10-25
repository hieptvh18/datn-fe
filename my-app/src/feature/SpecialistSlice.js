import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getListTop4, getService, getServiceById } from "../api/service";

export const listTop4 = createAsyncThunk(
    'service/listTop4',
    async () => {
        const { data } = await getListTop4()
        return data
    }
)

const SpecialistSlice = createSlice({
    name: 'specialist',
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(listTop4.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default SpecialistSlice.reducer