import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addAdvisory } from "../api/advisory";
export const addAdvisories = createAsyncThunk(
    "advisory/addAdvisories",
    async (advisory) => {
        const { data } = await addAdvisory(advisory)
        return data
    }
)


const AdvisorySlice = createSlice({
    name: "advisory",
    initialState: {
        value: []
    },

    extraReducers: (builder) => {
        builder.addCase(addAdvisories.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }

})

export default AdvisorySlice.reducer