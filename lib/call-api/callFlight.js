// "use server";

import { callPartnerApi } from ".";
import { generateRequestParams } from "../partnerBuildAPI/buildRequestParams";

const domain = process.env.NEXT_PUBLIC_BACKEND_URL;
const params = "";
const pathFlightAll = "api/flight/search-flight-all";
const pathSearchFlight = "api/flight/search-flight";
const keySecret = process.env.NEXT_PUBLIC_KEY_SECRET;
const encryptKey = process.env.NEXT_PUBLIC_ENCRYPT_KEY;
const isEncrypt = process.env.NEXT_PUBLIC_IS_ENCRYPT;

export const callGetFlightRecommend = async () => {
  try {
    console.log("start call");
    const requestParams = await generateRequestParams({
      METHOD: "get",
      DOMAIN: domain,
      PATH: pathFlightAll,
      keySecret,
      isEncryptBody: isEncrypt,
    });

    const result = await callPartnerApi({
      requestParams,
      keySecret,
    });

    if (result.status !== 200) return null;
    return result;
  } catch (error) {
    console.log("🚀  Authentication  error:", error);
    return null;
  }
};

export const callSearchFlight = async (body) => {
  try {
    console.log("start call");
    const requestParams = await generateRequestParams({
      METHOD: "POST",
      DOMAIN: domain,
      BODY: body,
      PATH: pathSearchFlight,
      keySecret,
      isEncryptBody: isEncrypt,
    });

    const result = await callPartnerApi({
      requestParams,
      keySecret,
    });

    if (result.status !== 200) return null;
    return result;
  } catch (error) {
    console.log("🚀  Authentication  error:", error);
    return null;
  }
};
