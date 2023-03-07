<script setup>
import moment from "moment";
import Tabs from "@/components/Tabs";
import { useRoute, useRouter } from "vue-router";
import { computed, watch, ref, markRaw } from "vue";

const today = computed(() => {
  return moment().format("MMM DD, YYYY");
});

const router = useRouter();
const route = useRoute();
const activeTab = ref(route.name);

watch(activeTab, (value) => {
  router.push({
    name: value,
  });
});

const showTab = ref(true);
const tabOptions = markRaw([
  {
    key: "Login",
    label: "Login",
  },
  {
    key: "Register",
    label: "Registration",
  },
]);

watch(
  () => route.name,
  (value) => {
    showTab.value = value !== "otp";
  },
  { immediate: true }
);
</script>

<template>
  <div class="auth">
    <p class="auth-date">Today {{ today }}</p>
    <div class="auth-tab">
      <Tabs :options="tabOptions" v-model="activeTab" />
    </div>
    <div class="mt-12">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade">
          <div>
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style src="./style.scss"></style>
