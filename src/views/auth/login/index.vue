<script setup>
import { Form } from "vee-validate";
import TextInput from "@/components/Input";
import Button from "@/components/Button";
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import { useToast } from "vue-toastification";
import { useStore } from "@/store/auth";
import { formatPhoneNumber, useIdGenerator } from "@/helpers";
import schema from "@/helpers/schema/form";
import { storeToRefs } from "pinia";

const form = ref();
const route = useRouter;
const toast = useToast();
const { login, checkCredentials, setToken } = useStore();

const authStore = useStore();
const { error_notification, error_message } = storeToRefs(authStore);

const onSubmit = async (value) => {
  const phone = formatPhoneNumber(value.phone_number);
  const data = {
    phone: phone,
    password: value.password,
    device_token: useIdGenerator({ secure: false }),
    latlong: "0,0",
    device_type: 2,
  };

  await login(data);
};

watch(error_notification, (val) => {
  if (val) {
    toast.error(error_message.value);
  }

  error_notification.value = false;
});
</script>

<template>
  <div class="login">
    <p class="login-title">Login</p>
    <Form
      ref="form"
      @submit="onSubmit"
      :validation-schema="schema"
      v-slot="{ isSubmitting }"
    >
      <div>
        <TextInput
          type="tel"
          label="Phone Number"
          name="phone_number"
          placeholder="Phone Number"
        />
        <TextInput
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div class="mt-14">
        <Button type="reset" variant="gray" outline>Reset</Button>
        <Button type="submit" variant="primary" :loading="isSubmitting"
          >Login</Button
        >
      </div>
    </Form>
  </div>
</template>

<style lang="scss" src="./Login.styles.scss"></style>
