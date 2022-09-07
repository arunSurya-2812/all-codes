import Marquee from "../Marquee/Marquee";
import NavWrapper from "./wrappers/NavWrapper";
import SearchBox from "../SearchBox/SearchBox";
import LogoWrapper from "./wrappers/LogoWrapper";
import LeftDrawer from "../LeftDrawer/LeftDrawer";
import IconsWrapper from "./wrappers/IconsWrapper";
import { useNavInfoContext } from "../../../react-context/NavContext";
import "./NavBar.scss";

export const NavBar = () => {
  const { isVisibleSearch, isVisibleMenu } = useNavInfoContext();

  return (
    <div className="Nazca__Header--Section">
      {isVisibleSearch && <SearchBox />}
      <Marquee />
      <header className="Header">
        <div className="Header__Wrapper">
          <NavWrapper />
          <LogoWrapper />
          <IconsWrapper />
        </div>
      </header>
      <section>{isVisibleMenu && <LeftDrawer />}</section>
    </div>
  );
};
