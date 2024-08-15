import { IUserDataRegister } from "../auth/register/register.type";

export type ProductData = {
  _id?: string;
  name: string;
  price: number;
  brand?: string;
  quantity: number | string | undefined;
  category?: string;
  subcategory?: string;
  images?: string[];
  description?: string;
};

type ProductOrder = {
  product: string;
  count: number;
};

export type OrderData = {
  user: string;
  products?: ProductOrder[];
  deliveryStatus: boolean | string;
};

export type ProductDataInventory = {
  quantity: number;
  price: number;
};

export type Data = {
  createdAt: string;
  deliveryDate: string;
  deliveryStatus: boolean | string;
  products: { count: number; product: ProductData }[];
  totalPrice: number;
  updatedAt: string;
  user: IUserDataRegister;
  _id: string;
};
