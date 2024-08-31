// "use server";

import { callPartnerApi } from ".";
import { generateRequestParams } from "../partnerBuildAPI/buildRequestParams";

const domain = process.env.NEXT_PUBLIC_BACKEND_URL;
let params = "";
const pathSearchAirport = "api/flight/search-airport";

const keySecret = process.env.NEXT_PUBLIC_KEY_SECRET;
const encryptKey = process.env.NEXT_PUBLIC_ENCRYPT_KEY;
const isEncrypt = process.env.NEXT_PUBLIC_IS_ENCRYPT;

export const callSearchAirport = async (body) => {
  try {
    console.log("start call");
    params = { q: body.query };
    // console.log("🚀  params:", params);
    const requestParams = await generateRequestParams({
      METHOD: "get",
      DOMAIN: domain,
      PATH: pathSearchAirport,
      BODY: "",
      PARAMS: params,
      keySecret,
      isEncryptBody: "N",
    });

    const result = await callPartnerApi({
      requestParams,
      keySecret,
    });
    // console.log("🚀  Authentication  result:", result);

    if (result.status !== 200) return null;
    return result;
  } catch (error) {
    console.log("🚀  Authentication  error:", error);
    return null;
  }
};
