import { handleErrorResponse } from "../../common/Script";
import { setSpinnerLoad } from "../Spinner/Slice";
import { getSliders, metaService } from "./Service";
import { setMetaList, setSlidersList } from "./Slice";

const MapToSlidersViewModel = (sliders: any[]) => {
  console.log(sliders,"thunkAction")
  return {
    carousel: sliders[0].data,
    featuredSliders: sliders[1].data,
  };
};

export const fetchSlidersList = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    await getSliders()
      .then((resp) => {
        console.log(resp,"Thunck")
        const slidersView: any = MapToSlidersViewModel(resp);
        console.log(slidersView,"sliderview")
        dispatch(setSlidersList(slidersView));
        setTimeout(() => {
          dispatch(setSpinnerLoad(false));
        }, 1000);
      })
      .catch((error) => {
        console.log("Error", error);
        handleErrorResponse(error);
        dispatch(setSpinnerLoad(false));
      });
  };
};

export const fetMetaHome = (item: any) => {
  return async (dispatch: any, _getState: any) => {
    try {
      const response: any = await metaService(item);
      if (response) {
        dispatch(setMetaList(response));
      }
    } catch (error) {
      console.log("Error", error);
      handleErrorResponse(error);
    }
  };
};