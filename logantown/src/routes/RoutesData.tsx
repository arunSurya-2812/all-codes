import React from "react";
import { RouteComponentProps } from "react-router";
import { Page404 } from "../components/common/page/Page404";
import { Page500 } from "../components/common/page/Page500";
import BrandAmbassador from "../components/containers/Brand Ambassador/BrandAmbassador";
import { DonationForm } from "../components/containers/Home/DonationForm/DonationForm";
import { EventBooking } from "../components/containers/Home/Events/EventBookings/EventBooking";
import { EventForm } from "../components/containers/Home/Events/EventForm";
import HomeView from "../components/containers/Home/HomeView";
import OrderConfirmation from "../components/containers/OrderConfirmation/OrderConfirmation";
import OurTeam from "../components/containers/OurTeam/OurTeam";
import { Policies } from "../components/containers/Policies/Policies";
import Login from "../components/UserAccount/Login/Login";
import { Register } from "../components/UserAccount/Register/Register.logic";

export interface IRoutesData {
  /**
   * Should be displayed on the home page
   */
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  /**
   * Should be displayed on the home page
   */
  path: string;
}

const RoutesData: IRoutesData[] = [
  {
    component: HomeView,
    path: "/",
  },
  {
    component: Login,
    path: "/login",
  },
  {
    component: Register,
    path: "/register",
  },
  {
    component: Policies,
    path: "/Policy",
  },
  {
    component: Page404,
    path: "/error/404",
  },
  {
    component: Page500,
    path: "/error/500",
  },
  {
    component: OrderConfirmation,
    path: "/orderconfirm",
  },
  {
    component: OurTeam,
    path: "/ourteam",
  },
  {
    component: BrandAmbassador,
    path: "/brandAmbassador",
  },
  {
    component: DonationForm,
    path: "/donate",
  },
  {
    component: EventForm,
    path: "/eventform",
  },
  {
    component: EventBooking,
    path: "/booking/:bookingId",
  },
];

export default RoutesData;
