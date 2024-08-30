// "use server";
const { callPartnerApi } = require(".");
const {
  generateRequestParams,
} = require("../partnerBuildAPI/buildRequestParams");

const domain = process.env.NEXT_PUBLIC_BACKEND_URL;
const params = "";
const pathSignIn = "api/auth/sign-in";
const pathSignOn = "api/auth/sign-on";
const keySecret = process.env.NEXT_PUBLIC_KEY_SECRET;
const encryptKey = process.env.NEXT_PUBLIC_ENCRYPT_KEY;
const isEncrypt = process.env.NEXT_PUBLIC_IS_ENCRYPT;

export const callSignIn = async (body) => {
  try {
    const requestParams = generateRequestParams({
      METHOD: "post",
      DOMAIN: domain,
      PATH: pathSignIn,
      BODY: body,
      PARAMS: params,
      keySecret,
      isEncryptBody: isEncrypt,
    });
    console.log("🚀  Authentication  requestParams:", requestParams);

    const result = await callPartnerApi({
      requestParams,
      keySecret,
    });
    console.log("🚀  Authentication  result:", result);

    if (result.statusCode !== 200) return null;
    return result;
  } catch (error) {
    console.log("🚀  Authentication  error:", error);
  }
};

// module.exports = { CallSignIn };
