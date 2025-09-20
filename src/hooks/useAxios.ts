

import { toastError } from "@/components/kit/toast";
import BASE_URL from "@/config/apiConfig";
import axios from "axios";
const useAxios = axios.create({
  baseURL: BASE_URL,
});
useAxios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.code === "ERR_NETWORK") {
      toastError("خطای شبکه")
      /*  notify.Error(error.response?.data?.messageFa) */
    }
    else {
      /* notify.Error(NotifyMessage.GLOBAL_ERROR) */
    }

    return Promise.reject(error);
  },
);

export default useAxios;
