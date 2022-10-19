import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addFeedBack } from "../api/pop-up-feedBack";

export const addPopupFeedBack = createAsyncThunk(
    'PopupFeedBack/addPopupFeedBack',
    async (db) =>{
        const {data} = await addFeedBack(db)
        return data
    } 
)

const PopupFeedBack = createSlice({
    name: "PopupFeedBack",
    initialState: {
        value: []
    },
    extraReducers: (builder) =>{
        builder.addCase(addPopupFeedBack.fulfilled, (state, action) =>{
            state.value = state.value.push(action.payload)
        })
    }
})

export default PopupFeedBack.reducer