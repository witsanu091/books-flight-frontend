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
  let authorization = "";
  if (token) {
    authorization = `Bearer ${token}`;
  }
  const header = {
    Authorization: authorization,
    "Content-Type": "application/json",
    "api-key": process.env.NEXT_PUBLIC_API_KEY,
    channel: process.env.NEXT_PUBLIC_CHANNEL_CODE,
  };

  return header;
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

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    // maximumFractionDigits: 0
  }).format(amount);
};

export const convertTime24to12 = (timeString) => {
  const [hours, minutes] = timeString.split(":");
  const hour = parseInt(hours, 10);
  const suffix = hour >= 12 ? "PM" : "AM";
  const formattedHour = ((hour + 11) % 12) + 1;

  return `${formattedHour}:${minutes} ${suffix}`;
};
