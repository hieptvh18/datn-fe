import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFeedBack } from "../api/feedback";


export const listFeedback = createAsyncThunk(
    'feedback/listFeedback',
    async () => {
        const { data } = await getFeedBack()
        return data
    }
)

const FeedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(listFeedback.fulfilled, (state, action) => {
            state.value = action.payload
        })

    }
})

export default FeedbackSlice.reducer