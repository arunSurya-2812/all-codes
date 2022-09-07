import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useNavInfoContext } from "../../../react-context/NavContext";
import { LoggedInUser } from "../../common/Script";

import { ProfileIcon, SearchDeskptop, SearchIconMobile } from "./Icons";

function HeaderIconList() {
  const { searchToggleClick, useOutsideAlerter } = useNavInfoContext();

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const history = useHistory();

  const ProfileIconClick = () => {
    if (LoggedInUser !== null) {
      history.push("/myprofile");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="Header__FlexItem Header__FlexItem--fill">
      <span
        className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-phone"
        onClick={ProfileIconClick}
        ref={wrapperRef}
      >
        <ProfileIcon />
      </span>
      <span
        className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable"
        data-action="toggle-search"
        aria-label="Search"
        onClick={searchToggleClick}
      >
        <span className="hidden-tablet-and-up">
          <SearchIconMobile />
        </span>

        <span className="hidden-phone">
          <SearchDeskptop />
        </span>
      </span>
    </div>
  );
}

export default HeaderIconList;
