import { defineStore } from "pinia";
import useAxios from "@/composable/useAxios";
import { toRaw } from "vue";

export const useStore = defineStore("auth", {
  state: () => {
    return {
      token: localStorage.getItem("acess_token") ?? null,
      user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") || "{}")
        : null,
      loading: false,
      fetched: false,
      error_notification: false,
      error_message: "",
      valid: false,
    };
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    setUser(user) {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }

      this.user = user;
    },
    setToken(token) {
      console.log(token);
      localStorage.setItem("access_token", token);
      this.token = token;
    },
    async checkCredential() {
      this.loading = true;

      const { state, request } = useAxios();

      await request("/api/v1/oauth/credentials", {
        method: "GET",
        params: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      const raw = toRaw(state);
      if (raw.data) {
        this.valid = true;

        return true;
      } else {
        this.error_notification = true;
        this.error_message = "dont cheating bruh, you inspect storage :)";

        return false;
      }
    },
    async login(params) {
      this.loading = true;
      const { state, request } = useAxios();

      await request("/api/v1/oauth/sign_in", {
        method: "POST",
        data: params,
      });

      const raw = toRaw(state);

      if (raw.data) {
        this.setToken(raw.data.user.access_token);
        await this.checkCredential();
        this.loading = false;

        return true;
      } else {
        this.error_notification = true;
        this.error_message = raw.error.errors[0];
        this.loading = false;

        return false;
      }
    },
    async logout() {
      this.setUser(null);

      const { state, request } = useAxios();

      await request("/api/v1/oauth/revoke", {
        method: "POST",
        data: {
          access_token: localStorage.getItem("access_token"),
          confirm: 1,
        },
      });

      const raw = toRaw(state);
      console.log("logout -> ", raw);
    },
  },
});
