import { handleErrorResponse } from "../../common/Script";
import {getAllEventsService,addBookingService, IBooking} from "./Service";
import { getOurEevnts, addOurBooking} from "./Slice";
import { setSpinnerLoad } from "../Spinner/Slice";
import { addNotification } from "../Toast/Slice";

export const getEventList = () =>{
    return async(dispatch:any,getState:any)=>{
        dispatch(setSpinnerLoad(true));
        getAllEventsService()
        .then((res)=>{
            dispatch(getOurEevnts(res));
            dispatch(setSpinnerLoad(false));
        })
        .catch((error) => {
            console.log("Error", error);
            dispatch(setSpinnerLoad(false));
            handleErrorResponse(error);
          });
    };
};

export const AddBooking = (item:IBooking) =>{
    return async(dispatch: any, _getState: any) => {
        try {
            const response: any = await addBookingService(item);
            if (response===200){
                dispatch(addNotification({
                    isOpen:true,
                    text:"Events Added Successfully"
                }));
                setTimeout(() => {
                    dispatch(addNotification({ isOpen: false, text: "" }));
                  }, 1000);
                }
            } catch(error) {
                console.log(error);
              }
        }
}
