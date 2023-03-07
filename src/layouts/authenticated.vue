<script setup>
import Logo from "@/assets/icon/privy-logo.vue";
</script>

<template>
  <div class="main-wrapper">
    <div class="form-section">
      <div class="login-logo">
        <Logo height="38" width="60" class="image-logo" />
        <p class="text-logo">PRISIGN</p>
      </div>

      <div class="form-wrapper">
        <router-view />
      </div>
    </div>
    <div class="information-section">
      <Logo />
      <h2 class="information-section-title">
        Welcome to <strong class="title">Prisign</strong>
      </h2>
      <div class="information-section-description">
        Is a personal data platform, you can update your information about
        yourself, customize your profile and change a lot of things
      </div>
    </div>
  </div>
</template>

<style src="../assets/styles/layout/Auth.styles.scss"></style>
