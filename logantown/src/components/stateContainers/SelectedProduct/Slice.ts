import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import {
  IInitialState,
  ISelectedProduct,
  IUpdatedProduct,
  ModalEnum,
} from "./Types";

const initialState: IInitialState = {
  selectedProduct: {} as ISelectedProduct,
  updatedProduct: {} as IUpdatedProduct,
  selectedModal: ModalEnum.Empty,
};

export const Slice = createSlice({
  initialState,
  name: "product-reducer",
  reducers: Reducer,
});

export { Slice as SelectedProductSlice };
