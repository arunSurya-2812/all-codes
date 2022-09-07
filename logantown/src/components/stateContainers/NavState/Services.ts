import { ProductServices } from "../../../utils/API";


export const getCategoriesAPI = async (item: any): Promise<any> => {
  return ProductServices.categories(item)
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export const getAllProductsAPI = async (item: any): Promise<any> => {
  return ProductServices.AllProducts(item)
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export const getSearchAPI = async (item: any): Promise<any> => {
  return ProductServices.Search(item)
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

// PreOrderServices

function formatDate() {
  let date = new Date();
  var day = ("0" + date.getDate()).slice(-2);
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var year = date.getFullYear();
  return [year, month, day].join("-");
}

export const getPreOrderAPI = async (): Promise<any> => {
  const currentDate = formatDate();
  return ProductServices.PreOrder({ curDate: currentDate,  })
    .then((res: any) => res.data)
    .catch((error: any) => error);
};
