import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";


let initialState = {
    events:[],
    selectedEvent:{},
    errors: ""
};

const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers:{
        listEvents(state ,action){
            state.events = action.payload;
        },
        addEvent: (state , action) => {
            const payload = action.payload;
            state.events.push(payload);
        },
        updateEvent: (state , action) => {
            //
        },
        deleteEvent: (state , action) => {
            //
        },
        setErrors(state,action){
            state.errors = action.payload;
        }
    }
});

export const fetchEvents = () => async (dispatch)  => {
    const [res, error] = await queryApi("event/getRecentEvents");

    if(error){
        dispatch(setErrors(error));
    } else{
        dispatch(listEvents(res));
        console.log("im here");
    }
}


export const { listEvents, addEvent , updateEvent , deleteEvent , setErrors } = eventSlice.actions;

export default eventSlice.reducer;