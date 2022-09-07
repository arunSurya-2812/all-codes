import { createSlice } from "@reduxjs/toolkit";

const UserDetails = createSlice({
  name: "signUp",
  initialState: {},
  reducers: {
    user: (action, state) => {
    state.type = action.payload;
    },
  },
});

export const { user } = UserDetails.actions;
export default UserDetails.reducer;
