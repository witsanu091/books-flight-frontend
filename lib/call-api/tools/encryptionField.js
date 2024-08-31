import Encryption from "@/lib/security/Encryption";
import dotenv from "dotenv";

const encryption = new Encryption();

dotenv.config();

const encryptTextKey = process.env.NEXT_PUBLIC_ENCRYPT_KEY;

export const encryptCBC256 = (txt) => {
  try {
    if (!txt) return txt;
    return encryption.encrypt256cbc(txt, encryptTextKey);
  } catch (error) {
    return txt;
  }
};

export const decryptCBC256 = (txt) => {
  try {
    if (!txt) return txt;
    return encryption.decrypt256cbc(txt, encryptTextKey);
  } catch (error) {
    return txt;
  }
};
