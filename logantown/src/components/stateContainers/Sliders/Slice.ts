import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { IInitialState, ISlidersList } from "./Types";

const initialState: IInitialState = {
  Sliders: {} as ISlidersList,
};

export const Slice = createSlice({
  initialState,
  name: "slider-reducer",
  reducers: Reducer,
});

export { Slice as SliderSlice };

export const { setSlidersList } = Slice.actions;
