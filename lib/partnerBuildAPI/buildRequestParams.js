"use server";

const https = require("https");
const Encryption = require("../security/Encryption");
const { getHeader } = require("../utils/utils");

const encryption = new Encryption();

export const generateRequestParams = ({
  METHOD,
  DOMAIN,
  PATH,
  BODY,
  PARAMS,
  keySecret,
  isEncryptBody,
}) => {
  console.log(
    "🚀  METHOD, DOMAIN, PATH, BODY, PARAMS, keySecret:",
    METHOD,
    DOMAIN,
    PATH,
    BODY,
    PARAMS,
    keySecret
  );
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    requestCert: false,
  });

  const encryptBody = encryption.encrypt256GCM(JSON.stringify(BODY), keySecret);
  console.log("🚀  encryptBody:", encryptBody);

  return {
    method: METHOD,
    url: DOMAIN + PATH,
    headers: getHeader(),
    httpsAgent,
    timeout: 10000,
    responseType: "json",
    data: isEncryptBody === "Y" ? { data: encryptBody } : BODY,
    params: PARAMS,
  };
};
