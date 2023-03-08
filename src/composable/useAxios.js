import { reactive, toRaw } from "vue";
import axios from "@/plugins/axiosInstance.js";

export default function useAxios() {
  const state = reactive({
    data: undefined,
    error: null,
    loading: false,
    canceled: false,
  });

  const request = async (url, config) => {
    state.loading = true;

    try {
      const response = await axios(url, config);
      state.data = response.data.data;
    } catch (err) {
      state.error = err.response.data.error;
      console.error(err);
    } finally {
      state.loading = false;
    }
  };

  const refetch = async (url, config) => {
    await request(url, config);
  };

  const cancel = async (message, url, config) => {
    const cancelToken = axios.CancelToken.source();
    cancelToken.cancel(message);

    state.canceled = true;
    config = { ...config, cancelToken: cancelToken.token };

    await refetch(url, config);
  };

  return { state, request, refetch, cancel };
}
