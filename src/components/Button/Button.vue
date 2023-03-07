<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  outline: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  full: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const buttonClass = computed(() => {
  let className = props.variant;

  if (props.outline) {
    className = `${className}-outline`;
  }

  return [className, { loading: props.loading, full: props.full }];
});

const handleClick = (event) => {
  emit("click", event);
};
</script>

<template>
  <button :class="buttonClass" @click="handleClick">
    <span class="button-content">
      <slot />
    </span>
    <svg
      class="loading-animation"
      v-if="loading"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        fill="currentColor"
      ></path>
    </svg>
  </button>
</template>

<style lang="scss" src="./style.scss"></style>
