import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const setStorage = async ({ key, value }) => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, value);
      resolve("success");
    } catch (e) {
      reject(e);
      console.log(e);
    }
  });
};

export const getStorage = async (key) => {
  return new Promise((resolve) => {
    try {
      const value = localStorage.getItem(key);
      resolve(value !== null ? value : "");
    } catch (e) {
      resolve("");
    }
  });
};

export const clearStorage = async () => {
  return new Promise((resolve) => {
    try {
      localStorage.clear();
      resolve("success");
    } catch (e) {
      resolve("");
    }
  });
};

export const getUser = async () => {
  return new Promise((resolve) => {
    try {
      const user = getStorage("user");
      if (user) {
        const userObj = JSON.parse(user);
        resolve(userObj);
      } else {
        resolve("");
      }
    } catch (error) {
      resolve("");
    }
  });
};

export const getUserId = async () => {
  return new Promise((resolve) => {
    try {
      const user = getStorage("user");
      if (user) {
        const userObj = JSON.parse(user);
        resolve(userObj.id);
      } else {
        resolve("");
      }
    } catch (error) {
      resolve("");
    }
  });
};

export const getToken = async () => {
  return new Promise((resolve) => {
    try {
      const token = getStorage("token");
      resolve(token !== null ? token : "");
    } catch (error) {
      resolve("");
    }
  });
};

export const getHeader = async () => {
  const token = await getToken();
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "api-key": process.env.NEXT_PUBLIC_API_KEY,
    channel: process.env.NEXT_PUBLIC_CHANNEL_CODE,
  };
};

export const SetSha512 = async (key) => {
  return new Promise((resolve, reject) => {
    crypto.subtle
      .digest("SHA-512", new TextEncoder().encode(key))
      .then((buf) => {
        const hash = Array.prototype.map
          .call(new Uint8Array(buf), (x) => ("00" + x.toString(16)).slice(-2))
          .join("");
        resolve(hash);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
