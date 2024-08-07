import { api } from "../config/config";

export type Props = {
  page: number;
  limit: number | string;
  category?: string;
  time?: string;
  deliveryStatus: boolean;
};

export async function getAllProducts({ page, limit }: Props) {
  try {
    const response = await api.get(
      `/products?sort=-createdAt&page=${page}&limit=${limit}`
    );
    return {
      products: response.data.data.products,
      totalProducts: response.data.total,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getAllOrders({
  page,
  limit,
  time,
  deliveryStatus,
}: Props) {
  try {
    const response = await api.get(
      `/orders?page=${page}&limit=${limit}&sort=${time}&deliveryStatus=${deliveryStatus}`
    );
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

export async function addOrdersApi(data: any) {
  try {
    return await api.post("/orders", data);
  } catch (error) {
    throw error;
  }
}

export async function getOrderByID(id: string) {
  try {
    const response = await api.get(`/orders/${id}`);
    return response.data.data.order;
  } catch (error) {
    throw error;
  }
}

export async function editOrderByID({ id, orderData }) {
  try {
    return await api.patch(`/orders/${id}`, orderData);
  } catch (error) {
    throw error;
  }
}

async function urlToFile(url, filename, mimeType) {
  const response = await fetch(`http://${url}`);
  const blob = await response.blob();
  return new File([blob], filename, { type: mimeType });
}

export async function convertImagesToFiles(imageUrls) {
  const files = await Promise.all(
    imageUrls.map((imageUrl, index) => {
      const mimeType = imageUrl.split(".").pop();
      return urlToFile(
        imageUrl,
        `image${index}.${mimeType}`,
        `image/${mimeType}`
      );
    })
  );
  return files;
}
