import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLogInfo: {},
    doctorLogInfo: {}
}

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setUserLogInfo: (state, action) => {
            state.userLogInfo = action.payload;
        },
        setDoctorLogInfo: (state, action) => {
            state.doctorLogInfo = action.payload;
        }
    }
})

export const { setUserLogInfo, setDoctorLogInfo } = authSlice.actions;
export default authSlice.reducer;