"use server";

const axios = require("axios");

const Encryption = require("../security/Encryption");

const encryption = new Encryption();

export const decryptBody = (body, key) => {
  try {
    const bodyM = JSON.parse(body);
    const resBody = encryption.decrypt256GCM(bodyM.data, key);
    return { success: true, data: JSON.parse(resBody), error: undefined };
  } catch (error) {
    console.log("error ::", error);
    return { success: false, data: { body }, error };
  }
};

export const callAxios = ({ requestParams }) => {
  return axios.request(requestParams).catch((error) => {
    return error.response
      ? error.response
      : { status: 408, statusText: error.message, data: error.message };
  });
};

export const callPartnerApi = async ({ requestParams, keySecret }) => {
  let responseBody = null;
  const { status, data } = await callAxios({ requestParams });
  console.log("🚀 ~ callPartnerApi ~ status:", status);

  if (status === 408) {
    responseBody = data;
  } else {
    try {
      responseBody = JSON.parse(decryptBody(data, keySecret));
    } catch (error) {
      responseBody = data;
    }
  }

  return { status, data: responseBody, original_data: data };
};
