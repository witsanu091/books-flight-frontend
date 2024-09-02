// "use server";

import { callPartnerApi } from ".";
import { generateRequestParams } from "../partnerBuildAPI/buildRequestParams";
import { SetSha512 } from "../utils/utils";

const domain = process.env.NEXT_PUBLIC_BACKEND_URL;
const params = "";
const pathSignIn = "api/auth/sign-in";
const pathSignOn = "api/auth/sign-on";
const keySecret = process.env.NEXT_PUBLIC_KEY_SECRET;
const encryptKey = process.env.NEXT_PUBLIC_ENCRYPT_KEY;
const isEncrypt = process.env.NEXT_PUBLIC_IS_ENCRYPT;

export const callSignIn = async (body) => {
  try {
    body = { ...body, password: await SetSha512(body.password) };
    const requestParams = await generateRequestParams({
      METHOD: "post",
      DOMAIN: domain,
      PATH: pathSignIn,
      BODY: body,
      PARAMS: params,
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

export const callSignOn = async (body) => {
  try {
    body = { ...body, password: await SetSha512(body.password) };
    console.log("🚀  body:", body);
    const requestParams = await generateRequestParams({
      METHOD: "post",
      DOMAIN: domain,
      PATH: pathSignOn,
      BODY: body,
      PARAMS: params,
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
