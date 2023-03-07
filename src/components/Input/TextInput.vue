<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { ref, computed } from "vue";
import { Field, ErrorMessage } from "vee-validate";
import { useIdGenerator } from "@/helpers";
import EyeIcon from "@/assets/icon/eye.vue";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: () => useIdGenerator({ secure: false }),
  },
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
});

const showPassword = ref(false);
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const inputType = computed(() => {
  if (props.type === "password" && showPassword.value) {
    return "text";
  }

  return props.type;
});
</script>

<template>
  <Field v-slot="{ field, errors }" :label="props.label" :name="props.name">
    <div class="input-wrapper">
      <label v-if="props.label" class="input-label" :for="props.id">{{
        props.label
      }}</label>
      <div :class="['input-group', { 'has-error': errors.length }]">
        <input
          v-bind="field"
          :id="props.id"
          class="input-component"
          :placeholder="props.placeholder"
          :type="inputType"
        />
        <EyeIcon
          v-if="props.type === 'password'"
          :class="[
            'eye-icon',
            {
              active: showPassword,
            },
          ]"
          @click="toggleShowPassword"
        />
      </div>
      <ErrorMessage v-slot="{ message }" :name="props.name">
        <div class="error">
          <div class="error-message">{{ message }}</div>
        </div>
      </ErrorMessage>
    </div>
  </Field>
</template>

<style lang="scss" src="./style.scss"></style>
