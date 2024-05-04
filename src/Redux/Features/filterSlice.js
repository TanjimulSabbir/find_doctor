import { createSlice } from "@reduxjs/toolkit";
import appointmentInfo from "../../Tools/Appointment.json"

const initialState = {
    doctors: appointmentInfo.doctors,
    hospitals: appointmentInfo.hospitals,
    slots: appointmentInfo.slots,
    filteredDoctors: [],
    filteredHospitals: [],
    showFilteredData: []
}

const filterSlice = createSlice({
    name: "filterSlice",
    initialState,
    reducers: {
        setFilteredDoctors: (state, action) => {
            state.filteredDoctors = action.payload
        },
        setFilteredHospitals: (state, action) => {
            state.filteredHospitals = action.payload
        },
        setShowFilteredData: (state, action) => {
            state.showFilteredData = action.payload;
        }
    }
})

export const { setFilteredDoctors, setFilteredHospitals, setShowFilteredData } = filterSlice.actions;
export default filterSlice.reducer;