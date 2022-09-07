import { NavItem } from "./NavItem";
import { useNav } from "../../useNav.hook";
import { useNavInfoContext } from "../../../../react-context/NavContext";
import { MenuDesktop, MenuMobile } from "../../../../assets/icons/headerIcons";
import {
  ICategory,
  ISubCategory,
} from "../../../stateContainers/NavState/Types";
import { useNavigate } from "react-router-dom";
import { useState,useRef } from "react";

export default function NavWrapper() {
  const { MenuIconClick } = useNavInfoContext();
  let navigate = useNavigate()
  const { categories, MenuItemHandleClick } = useNav();
  const [open, setOpen] = useState(false);
  const container = useRef(null);



  return (
    <div className="Header__FlexItem Header__FlexItem--fill">
      <button
        className="Header__Icon Icon-Wrapper--clickable hidden-desk"
        onClick={MenuIconClick}
      >
        <span className="hidden-tablet-and-up">
          <MenuMobile />
        </span>
        <span className="hidden-phone">
          <MenuDesktop />
        </span>
      </button>
      <nav className="Header__MainNav hidden-pocket hidden-lap">
        <ul className="HorizontalList HorizontalList--spacingExtraLoose">
          <li className="HorizontalList__Item subs">
         
            <span className="shops" onClick={() => navigate("Subscribebox")}>
              {" "}Subscribe
            </span>
          </li>
          <li className="HorizontalList__Item subs "  ref={container}>
            <span className="shops" onClick={() => setOpen(!open)} >shop</span>
            <div className="mainctegory-content" >
              <span className="scroll"> 
              {open && (
                categories &&
                  categories?.map((item: ICategory) => {
                    return (
                      <NavItem
                        key={item.mainCatName}
                        mCategory={item.mainCatName}
                        sCategory={
                          item.categories.length
                            ? item.categories.map(
                                ({ cName }: ISubCategory) => cName
                              )
                            : null
                        }
                        onMenuClick={() => {
                          MenuItemHandleClick(item.mainCatName);
                        }}
                      />
                    );
                  })
                  )}
              </span>
            </div>
          </li>
          {/* <NavItem
            mCategory="SHOP"
            onMenuClick={() => {
              MenuItemHandleClick("SHOP");
            }}
          /> */}
          {/* <NavItem mCategory="selectd"/> */}
        </ul>
      </nav>
    </div>
  );
}
