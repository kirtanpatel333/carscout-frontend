import axios from "axios";
import { readAuthSession } from "../utils/auth";
import { APP_CONFIG } from "../config/appConfig";

const OFFER_BASE_URL = `${APP_CONFIG.apiBaseUrl}/offer`;

const getAuthHeaders = () => {
  const token = readAuthSession()?.token;

  if (!token) {
    return {};
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const createOfferApi = async (payload) => {
  const response = await axios.post(`${OFFER_BASE_URL}/create`, payload, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const getMyOffersApi = async ({ type, status } = {}) => {
  const response = await axios.get(`${OFFER_BASE_URL}/my`, {
    params: {
      ...(type ? { type } : {}),
      ...(status ? { status } : {}),
    },
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const updateOfferApi = async (offerId, payload) => {
  const response = await axios.patch(`${OFFER_BASE_URL}/${offerId}`, payload, {
    headers: getAuthHeaders(),
  });

  return response.data;
};
