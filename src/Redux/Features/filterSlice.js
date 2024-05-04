import { createSlice } from "@reduxjs/toolkit";
import appointmentInfo from "../../Tools/Appointment.json"

const initialState = {
    doctors: appointmentInfo.doctors,
    hospitals: appointmentInfo.hospitals,
    slots: appointmentInfo.slots,
    filteredDoctors: [],
    filteredHospitals: [],
    showFilteredData: [],
    searchedText: { category: "", location: "", inputText: "", innerCategory: "", showType: "all" },
    appointmentInfo: []
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
        },
        setCategory: (state, action) => {
            state.searchedText.category = action.payload
        },
        setLocation: (state, action) => {
            state.searchedText.location = action.payload;
        },
        setInputText: (state, action) => {
            state.searchedText.inputText = action.payload;
        },
        setInnerCategory: (state, action) => {
            state.searchedText.innerCategory = action.payload;
        },
        setShowType: (state, action) => {
            state.searchedText.showType = action.payload;
        },
        setAppointmentInfo: (state, action) => {
            state.appointmentInfo.push(action.payload);
        }
    }
})

export const { setFilteredDoctors, setFilteredHospitals, setShowFilteredData, setCategory, setLocation, setInputText, setInnerCategory, setShowType, setAppointmentInfo } = filterSlice.actions;
export default filterSlice.reducer;