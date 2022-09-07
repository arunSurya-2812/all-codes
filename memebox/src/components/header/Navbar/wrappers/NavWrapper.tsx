import { NavItem } from "./NavItem";
import { useNav } from "../../useNav.hook";
import { useNavInfoContext } from "../../../../react-context/NavContext";
import { MenuDesktop, MenuMobile } from "../../../../assets/icons/headerIcons";
import {
  ICategory,
  ISubCategory,
} from "../../../stateContainers/NavState/Types";

export default function NavWrapper() {
  const { MenuIconClick } = useNavInfoContext();
  const { categories, MenuItemHandleClick } = useNav();

  const shopBy = ["SHOP BY PRODUCTS", "SHOP BY COLLECTIONS"];

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
            <span>
              {" "}
              <NavItem
                mCategory="Subscribe"
                onMenuClick={() => MenuItemHandleClick("Subscribe")}
              />{" "}
            </span>
          </li>
          <li className="HorizontalList__Item subs">
            <span className="u-h6">shop</span>
            <div className="mainctegory-content">
              <span className="scroll">
                {categories &&
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
                  })}
              </span>
            </div>
          </li>
          {/* <NavItem
            mCategory="SHOP"
            onMenuClick={() => {
              MenuItemHandleClick("SHOP");
            }}
          /> */}
        </ul>
      </nav>
    </div>
  );
}
