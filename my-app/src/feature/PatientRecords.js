import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPatientRecord } from "../api/PatientRecords"

export const getPatientRecords= createAsyncThunk(
    "PatientRecords/getPatientRecords",
    async (datas) => {
        const {data} = await getPatientRecord(datas.token, datas.id)
        return data
    }
)

const PatientRecordsSlice = createSlice({
    name: "PatientRecords",
    initialState : {
        value : []
    },
    extraReducers: (buider) =>{
        buider.addCase(getPatientRecords.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
    }
})

export default PatientRecordsSlice.reducer