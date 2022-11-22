import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMenuServices } from "../api/Menu";


export const listMenuServices = createAsyncThunk(
    'menuServices/listMenuServices',
    async () => {
        const { data } = await getMenuServices()
        return data.data
    }
)

const MenuServices = createSlice({
    name: 'menuServices',
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(listMenuServices.fulfilled, (state, action) => {
            state.value = action.payload
        })

    }
})

export default MenuServices.reducer