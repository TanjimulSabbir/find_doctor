import { createSlice } from "@reduxjs/toolkit";
import appointmentInfo from "../../Tools/Appointment.json"

const initialState = {
    doctors: appointmentInfo.doctors,
    hospitals: appointmentInfo.hospitals,
    slots: appointmentInfo.slots,
    filteredDoctors: [],
    filteredHospitals: []
}

const filterSlice = createSlice({
    name: "filterSlice",
    initialState,
    reducers: {
        setFilteredDoctors: (state, action) => {
            state.filteredDoctors = state.filteredDoctors.push(action.payload)
        },
        setFilteredHospitals: (state, action) => {
            state.filteredHospitals = state.filteredHospitals.push(action.payload)
        }
    }
})

export const { setFilteredDoctors, setFilteredHospitals } = filterSlice.actions;
export default filterSlice.reducer;