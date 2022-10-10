import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDoctor, getTeam, getTeamById } from "../api/team";

export const listTeam = createAsyncThunk(
    'team/listTeam',
    async () => {
        const { data } = await getDoctor()
        return data
    }
)
export const listAllTeam = createAsyncThunk(
    'team/listAllTeam',
    async () => {
        const { data } = await getTeam();
        return data;
    }
)
export const listTeamOne = createAsyncThunk(
    'team/listTeamOne',
    async (id) => {
        const { data } = await getTeamById(id)
        return data
    }
)

const TeamSlice = createSlice({
    name: 'team',
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(listTeam.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(listTeamOne.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(listAllTeam.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default TeamSlice.reducer