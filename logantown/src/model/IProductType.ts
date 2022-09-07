export interface IProductImage {
  imId: number;
  imageUrl: string;
  id: number;
  mcId: number;
}

export interface IProductSize {
  id: number;
  sid: number;
  psize: string;
  price: number;
  qty: number;
  dimentions: string;
  mcId: number;
}

export interface IProduct {
  date: string;
  deliveryTime: string;
  descpription: string;
  imageurl: string;
  maincategory: string;
  mcId: number;
  minqty: number;
  offer: number;
  phone: string;
  price: number;
  productImages: IProductImage[];
  productSize: IProductSize[];
  productcolor: string;
  productheight: string;
  productlength: string;
  productname: string;
  productradius: string;
  productwidth: string;
  quantity: string;
  sizechart: string;
  subcategory: string;
  tax: number;
  video: string;
  warrenty: string;
}

export interface ICartItemResponse {
  productInfo: {
    productCode: number;
    productName: string;
    price: number;
    offer: number;
    imageurl: string;
    sPhone: string;
    enddate: string;
    size: string;
    color: string | null;
    descpription: string;
    cartId: number;
    qty: number;
    minqty: number;
  };
  quantity: number;
  subTotal: number;
  deduction: number;
  tax: number;
}

export interface IViewCartResponse {
  orderNumber: number;
  cartItem: ICartItemResponse[];
  totalPrice: number;
  addId: number;
  tax: number;
}

export interface IAddress {
  city: string;
  flatNo: string;
  id: number;
  landMark: string;
  name: string;
  phone: string;
  pin: string;
  street: string;
}

export interface IProfile {
  userid: number;
  uPhone: string;
  fname: string;
  lname: string;
  iUmg: string;
  email: string;
  userReferral: string;
  affiliateCode: string;
  password: string;
  address: IAddress[] | any;
  enabled: boolean;
}
export interface IAddress {
  city: string;
  flatNo: string;
  id: number;
  landMark: string;
  name: string;
  phone: string;
  pin: string;
  street: string;
}
