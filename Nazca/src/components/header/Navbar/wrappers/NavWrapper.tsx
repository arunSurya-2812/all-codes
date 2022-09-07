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
          <NavItem
            mCategory="NEW THIS WEEK"
            onMenuClick={() => MenuItemHandleClick("NEW THIS WEEK")}
          />
          {/* <NavItem
            mCategory="SHOP"
            onMenuClick={() => {
              MenuItemHandleClick("SHOP");
            }}
          /> */}
          {categories &&
            categories?.map((item: ICategory) => {
              return (
                <NavItem
                  key={item.mainCatName}
                  mCategory={item.mainCatName}
                  sCategory={
                    item.categories.length
                      ? item.categories.map(({ cName }: ISubCategory) => cName)
                      : null
                  }
                  onMenuClick={() => {
                    MenuItemHandleClick(item.mainCatName);
                  }}
                />
              );
            })}
          <NavItem
            mCategory="HOT"
            onMenuClick={() => {
              MenuItemHandleClick("HOT");
            }}
          />
          <NavItem mCategory="SHOP BY" sCategory={shopBy} />
        </ul>
      </nav>
    </div>
  );
}
