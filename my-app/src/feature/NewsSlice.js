import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getNews, getNewsById } from "../api/news"

export const listNews = createAsyncThunk(
    "newsSlice/listNews",
    async () => {
        const { data } = await getNews();
        return data
    }
)
export const listNewsById = createAsyncThunk(
    "newsSlice/listNewsById",
    async (id) => {
        const { data } = await getNewsById(id);
        return data
    }
)

const NewsSlice = createSlice({
    name: "newsSlice",
    initialState: {
        value: []
    },
    extraReducers: (buider) => {
        buider.addCase(listNews.fulfilled, (state, actions) => {
            state.value = actions.payload
        })
        buider.addCase(listNewsById.fulfilled, (state, actions) => {
            state.value = actions.payload
        })
    }
})

export default NewsSlice.reducer