import { defineStore } from "pinia";
import useAxios from "../composable/useAxios";
import { toRaw } from "vue";

export const usePokemonStore = defineStore("pokemon", {
  state: () => {
    return {
      pokemon_data: null,
      loading: false,
      error: null,
    };
  },
  getters: {},
  actions: {
    async pokemons(params) {
      const { state, request } = useAxios();

      await request("/api/v2/pokemon", {
        method: "GET",
      });

      const raw = toRaw(state);
      this.pokemon_data = raw.data.results;
    },
  },
});
