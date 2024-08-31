"use server";

import { Encryption } from "../security/Encryption";
import { getHeader } from "../utils/utils";

const encryption = new Encryption();

export const generateRequestParams = async ({
  METHOD,
  DOMAIN,
  PATH,
  BODY,
  PARAMS,
  keySecret,
  isEncryptBody,
}) => {
  try {
    console.log(
      "🚀  METHOD, DOMAIN, PATH, BODY, PARAMS, keySecret:",
      METHOD,
      DOMAIN,
      PATH,
      BODY,
      PARAMS,
      keySecret
    );

    let encryptBody;
    if (BODY) {
      encryptBody = encryption.encrypt256GCM(JSON.stringify(BODY), keySecret);
    }

    console.log("🚀  encryptBody:", encryptBody);
    const header = await getHeader();
    console.log("🚀  header:", header);
    return {
      method: METHOD,
      url: DOMAIN + PATH,
      headers: header || null,
      timeout: 10000,
      responseType: "json",
      data: isEncryptBody === "Y" ? { data: encryptBody } : BODY,
      params: PARAMS,
    };
  } catch (error) {
    console.log("🚀  error:", error);
    throw error;
  }
};
