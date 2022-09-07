import { useNav } from "../../../header/useNav.hook";
import { ICategory } from "../../../stateContainers/NavState/Types";

export const ShopByCategories = () => {
  const { categories, MenuItemHandleClick } = useNav();

  return (
    <div
      className=" ProductList--grid ProductList--removeMargin Grid"
      data-mobile-count="1"
      data-desktop-count="3"
    >
      {categories?.map((item: ICategory) => {
        return (
          <div
            className="Grid__Cell 1/1--phone 1/2--tablet-and-up 1/3--desk"
            key={item.id}
          >
            <div
              className="ProductItem "
              onClick={() => {
                MenuItemHandleClick(item.mainCatName);
              }}
            >
              <div className="AspectRatio AspectRatio--square Product__Image">
                <img src={item.imageUrl} alt={item.mainCatName} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
