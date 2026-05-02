import axios from "axios";
import { readAuthSession } from "../utils/auth";
import { APP_CONFIG } from "../config/appConfig";

const WISHLIST_BASE_URL = `${APP_CONFIG.apiBaseUrl}/wishlist`;

const getAuthHeaders = () => {
  const token = readAuthSession()?.token;

  if (!token) {
    return {};
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const addToWishlistApi = async (payload) => {
  const response = await axios.post(`${WISHLIST_BASE_URL}/add`, payload, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const getUserWishlistApi = async (userId) => {
  const response = await axios.get(`${WISHLIST_BASE_URL}/user/${userId}`, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const getAllWishlistItemsApi = async () => {
  const response = await axios.get(`${WISHLIST_BASE_URL}/all`, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const removeFromWishlistApi = async (payload) => {
  const response = await axios.delete(`${WISHLIST_BASE_URL}/remove`, {
    data: payload,
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const deleteWishlistItemByIdApi = async (id) => {
  const response = await axios.delete(`${WISHLIST_BASE_URL}/${id}`, {
    headers: getAuthHeaders(),
  });

  return response.data;
};
