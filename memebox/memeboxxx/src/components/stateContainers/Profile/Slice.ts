import { createSlice } from "@reduxjs/toolkit";
import { IProfile } from "../../../model/IProductType";
import { Reducer } from "./Reducer";
import { IInitialState, IProfileDetails, ISubcription,ISubcribe } from "./Types";

const initialState: IInitialState = {
  profileDetails: {
    Profile: {} as IProfile,
    isUpdatedProfile: false,
  } as IProfileDetails,
  subcription: {} as ISubcription,
  plans: [],
  isSubsUpdated: false,
  boxsubscribe:{} as ISubcribe
};

export const Slice = createSlice({
  initialState,
  name: "profile-reducer",
  reducers: Reducer,
});

export { Slice as profileSlice };

export const {
  setProfileDetails,
  setUpdateDetails,
  setReferral,
  setPlan,
  setUpdateSubscription,
  setSubcribe
} = Slice.actions;
