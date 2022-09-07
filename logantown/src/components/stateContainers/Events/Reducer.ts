import { PayloadAction } from "@reduxjs/toolkit";
import {IInitialState,IourEvents,IBooking} from "./Types";


export const Reducer = {
    getOurEevnts: (
        state: IInitialState,
        action:PayloadAction<Array<IourEvents>>
    ):void=>{
        state.ourEvents = action.payload;
    },
    addOurBooking: (
        state: IInitialState,
        action:PayloadAction<Array<IBooking>>
    ):void=>{
        state.booking = action.payload;
    },
    
}