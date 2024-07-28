import { api } from "../config/config";

export async function getCategoryBySlug(categorySlug: string | undefined) {
  try {
    const response = await api.get(
      `/categories?sort=createdAt&slugname=${categorySlug}`
    );
    return response.data.data.categories[0];
  } catch (error) {
    throw error;
  }
}

export async function getSubCategoryBySlug(subCategorySlug: string) {
  try {
    const response = await api.get(
      `/subcategories?sort=createdAt&slugname=${subCategorySlug}`
    );
    return response.data.data.subcategories[0];
  } catch (error) {
    throw error;
  }
}

export async function getProductsByCategory(categoryID: string) {
  try {
    const response = await api.get(
      `/products?sort=createdAt&limit=all&category=${categoryID}`
    );
    return response.data.data.products;
  } catch (error) {
    throw error;
  }
}

export async function getProductsBySubCategory({ categoryID, subCategoryID }) {
  try {
    const response = await api.get(
      `/products?sort=createdAt&limit=all&category=${categoryID}&subcategory=${subCategoryID}`
    );
    return response.data.data.products;
  } catch (error) {
    throw error;
  }
}
