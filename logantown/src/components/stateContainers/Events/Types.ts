export interface IourEvents {
    date: string;
    details: string;
    eid: any;
    entry: string,
    status: boolean,
    title: string,
    url: string
  }

  export interface IBooking {
    id: number;
    ambassadorId: number;
    galleryId: number;
    imageurl: string;
  }

// InitialState
export interface IInitialState {
    ourEvents: IourEvents[];
    booking: IBooking[];
  }