import { api } from "../config/config";

type Props = {
  page: number;
  limit: number;
};

export async function getAllProducts({ page, limit }: Props) {
  try {
    const response = await api.get(`/products?page=${page}&limit=${limit}`);
    return {
      products: response.data.data.products,
      totalProducts: response.data.total,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getAllOrders({ page, limit }: Props) {
  try {
    const response = await api.get(`/orders?page=${page}&limit=${limit}`);
    return {
      orders: response.data.data.orders,
      user: response.data.data.orders.user,
      products: response.data.data.orders.products,
      totalOrders: response.data.total,
    };
  } catch (error) {
    console.log(error);
  }
}
