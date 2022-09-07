import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IRootState } from "../../redux/reducer/CombineReducer";
import { useNavInfoContext } from "../../react-context/NavContext";

export type productType = {
  mCategory: string;
  sCategory: string[];
  indexValue?: number;
  open?: boolean;
};

export const useNav = () => {
  const navigate = useNavigate();
  const { navData } = useSelector((state: IRootState) => state);
  const categories = navData && navData.categories;
  const homePdt = navData && navData.homeProducts;

  const { isVisibleMenu, MenuIconClick } = useNavInfoContext();

  const MenuItemHandleClick = (mCategory?: string, subCategory?: string) => {
    if (isVisibleMenu) {
      MenuIconClick();
    }

    let url = `/list/${mCategory}`;

    if (mCategory && mCategory === "SHOP BY") {
      url = `/shopby`;
    }

    if (subCategory) {
      url += `/${subCategory}`;
    }
    navigate(url);
  };

  const ShopbyHandler = (field: string) => {
    if (isVisibleMenu) {
      MenuIconClick();
    }
    let url = `/shopby/${field}`;
    navigate(url);
  };

  return {
    homePdt,
    categories,
    ShopbyHandler,
    MenuItemHandleClick,
  };
};
