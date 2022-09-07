import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoggedInUser } from "../components/common/Script";
import { IgetProfile } from "../components/stateContainers/Profile/Services";
import { getProfileDetails } from "../components/stateContainers/Profile/ThunkAction";
import { fetchSlidersList } from "../components/stateContainers/Sliders/ThunkAction";
import { IRootState } from "../redux/reducer/CombineReducer";
import Toast from "../components/common/Toast/Toast";
import { Routes as RoutedComponent } from "../routes/Index";
import { fetchSupportTeam } from "../components/stateContainers/BrandUsers/ThunkAction";

/**
 * Responsible for rendering the component as per route path
 */

export const Layout: React.FC = () => {
  const dispatch = useDispatch();

  const { toastData } = useSelector((state: IRootState) => state);
  const openToast = toastData && toastData.notifications.isOpen;
  const text = toastData && toastData.notifications.text;

  const item: IgetProfile = {
    phone: LoggedInUser as string,
  };

  // useEffect(() => {
  //   dispatch(fetchCategories());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    dispatch(fetchSlidersList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchSupportTeam());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getProfileDetails(item));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RoutedComponent />
      {openToast && <Toast openToast={openToast} message={text} />}
    </>
  );
};
