import { AsyncData } from "../../../constant/Types";
import { IProduct } from "../../../model/IProductType";

export interface IFilter {
  id: number;
  filtypeId: number;
  filtertype: string;
  maincatId: number;
}

export interface ICategory {
  id: number;
  maincatId: number;
  mainCatName: string;
  categories: ISubCategory[];
  imageUrl: string;
  filteration: IFilter[];
}

export interface ISubCategory {
  id: number;
  curl: string;
  catId: number;
  cName: string;
  maincatId: number;
}

export interface ISelectedCategory {
  mc: string;
  sc: string;
}

export interface IPreOrderData {
  list: IProduct[];
  isPreorderLoading: boolean;
}

export interface IInitialState {
  searchValue: string;
  searchList: IProduct[];
  categories: ICategory[];
  allProducts: AsyncData<IProduct[]>;
  homeProducts: IProduct[];
  featureProduct: IProduct[];
  PreOrderList: IPreOrderData;
  selectedAccountView: string;
  selectedCategory: ISelectedCategory;
}
