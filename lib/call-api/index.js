// "use server";

import axios from "axios";
import { Encryption } from "../security/Encryption";
// import Encryption from "../security/Encryption";

const encryption = new Encryption();

export const decryptBody = (body, key) => {
  try {
    const bodyM = body;
    const resBody = encryption.decrypt256GCM(bodyM.data, key);
    return { success: true, data: JSON.parse(resBody), error: undefined };
  } catch (error) {
    console.log("error ::", error);
    return { success: false, data: { body }, error };
  }
};

export const callPartnerApi = async ({ requestParams, keySecret }) => {
  let responseBody = null;
  const { status, data } = await axios.request(requestParams).catch((error) => {
    return error.response
      ? error.response
      : { status: 408, statusText: error.message, data: error.message };
  });

  // console.log("🚀  data:", data);
  // console.log("🚀 ~ callPartnerApi ~ status:", status);

  if (status === 408) {
    responseBody = data;
  } else {
    try {
      const decryptedBody = decryptBody(data.body, keySecret);
      // console.log("🚀  decryptedBody:", decryptedBody);
      responseBody = decryptedBody.success ? decryptedBody.data : data;
    } catch (error) {
      responseBody = data;
    }
  }

  return { status, data: responseBody, original_data: data };
};
