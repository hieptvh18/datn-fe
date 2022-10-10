import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEquipments } from "../api/equipments";


export const listEquipment = createAsyncThunk(
    'equipment/listEquipment',
    async () => {
        const { data } = await getEquipments()
        return data
    }
)

const EquipmentsSlice = createSlice({
    name: 'equipment',
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(listEquipment.fulfilled, (state, action) => {
            state.value = action.payload
        })

    }
})

export default EquipmentsSlice.reducer