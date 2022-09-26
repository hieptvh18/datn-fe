import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getService, getServiceById } from "../api/service";

export const listService = createAsyncThunk(
    'service/listService',
    async () => {
        const { data } = await getService()
        return data
    }
)
export const listServiceOne = createAsyncThunk(
    'service/listServiceOne',
    async (id) => {
        const { data } = await getServiceById(id)
        return data
    }
)

const ServiceSlice = createSlice({
    name: 'service',
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(listService.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(listServiceOne.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default ServiceSlice.reducer