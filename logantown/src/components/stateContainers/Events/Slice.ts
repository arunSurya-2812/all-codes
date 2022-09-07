import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { IInitialState, IourEvents, IBooking } from "./Types";

const initialState: IInitialState = {
  ourEvents: [] as IourEvents[],
  booking: [] as IBooking[],
};

export const Slice = createSlice({
  initialState,
  name: "event-user-reducer",
  reducers: Reducer,
});

export { Slice as EventSlice };

export const { getOurEevnts, addOurBooking } = Slice.actions;
