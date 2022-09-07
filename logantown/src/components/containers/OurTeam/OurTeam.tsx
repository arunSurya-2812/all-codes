import React from "react";
import "./OurTeam.scss";
import MessageIcon from "../../../assets/image/MessageIcon.png";
import Header from "../../header/Header.logic";
import Footer from "../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getTeamList } from "../../stateContainers/BrandUsers/ThunkAction";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import { IOurTeam } from "../../stateContainers/BrandUsers/Types";

export const OurTeam = () => {
  const dispatch = useDispatch();
  const { brandData } = useSelector((state: IRootState) => state);
  const ourTeam = brandData && brandData.ourTeam;

  React.useEffect(() => {
    if (ourTeam && ourTeam.length < 1) {
      dispatch(getTeamList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <h1>
        Dummy
      </h1>
      <Footer />
    </div>
  );
};

export default OurTeam;
