import { FC, ReactElement, useState } from "react";
import classnames from "classnames";
import { useNav } from "../../useNav.hook";
import useProductList from "../../../containers/ProductList/useProductList.hook";

interface IProps {
  mCategory: string;
  sCategory?: string[] | null;
  onMenuClick?: () => void;
}

export const NavItem: FC<IProps> = (props: IProps): ReactElement => {
  const { mCategory, sCategory, onMenuClick } = props;
  
  
  const [isShown, setValue] = useState<boolean>(false);

  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

  const { MenuItemHandleClick } = useNav();
  const { selectedCategory: category } = useProductList();

  return (<>
    
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classnames("HorizontalList__Item ", {
        "is-expanded": isShown,
        "is-active": category === mCategory,
      })}
    >
      <span className="Heading u-h5" onClick={onMenuClick}>
        {mCategory}
        {!sCategory && <span className="Header__LinkSpacer"> {mCategory}</span>}
      </span>

      {sCategory && (
        <div className="DropdownMenu" aria-hidden={!isShown}>
          <ul className="Linklist">
            {sCategory.map((submenu: string, index: number) => (
              <li
                className="Linklist__Item"
                key={index}
                onClick={() => MenuItemHandleClick(mCategory, submenu)}
              >
                <span className="Link Link--secondary">
                  {submenu.toLowerCase()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li> 
    </>
  );
};
