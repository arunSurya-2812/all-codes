import { EventServices } from "../../../utils/API";

export const getAllEventsService = async (): Promise<any> => {
  return EventServices.AllEvents()
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export interface IBooking {
  name: string;
  mail: string;
  mobile: string
  tnxid: number,
}

export const addBookingService = async (item:IBooking): Promise<any> => {
    return EventServices.Booking(item)
    .then((res: any) => res.status)
    .catch((error: any) => error);
}
