import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBannerHomePage } from "../api/homePage"

export const getBannerHome = createAsyncThunk(
    "bannerHome/getBannerHome",
    async () => {
        const {data} = await getBannerHomePage()
        return data
    }
)

const BannerHomeSlice = createSlice({
    name: "bannerHome",
    initialState : {
        value : []
    },
    extraReducers: (buider) =>{
        buider.addCase(getBannerHome.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
    }
})

export default BannerHomeSlice.reducer