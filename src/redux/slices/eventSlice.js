import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";


let initialState = {
    events:[],
    selectedEvent:{},
    errors: ""
};

const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers:{
        addEvent: (state , action) => {
            // action
        },
        updateEvent: (state , action) => {
            //
        },
        deleteEvent: (state , action) => {
            //
        },
        setErrors: (state,action) => {

        }
    }
});


export const { addEvent , updateEvent , deleteEvent , setErrors } = eventSlice.actions;

export default eventSlice.reducer;