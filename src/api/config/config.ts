import axios from "axios";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

export const api = {
  get: app.get,
  post: app.post,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
};

app.interceptors.request.use((config) => {
  if (config.url !== "/auth/token") {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      config.headers.Authorization = "Bearer " + accessToken;
    }
  }
  return config;
});

app.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const config = error.config;
    if (error.response && error.response.status === 401 && !config.sent) {
      config.sent = true;
      if (config.url !== "/auth/token" && config.url !== "/auth/login") {
        const refreshToken = getCookie("refreshToken");
        return app.post("/auth/token", { refreshToken }).then((res) => {
          const accessToken = res.data.token.accessToken;
          setCookie("accessToken", accessToken);
          config.headers.Authorization = "Bearer " + accessToken;
          return app(config);
        });
      } else if (config.url === "/auth/token") {
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        window.location.href = "/auth/login";
      }
    } else {
      return Promise.reject(error);
    }
  }
);
