<script setup>
import { Form } from "vee-validate";
import TextInput from "@/components/Input";
import Button from "@/components/Button";
import { useRouter } from "vue-router";
import { ref } from "vue";

const form = ref();
const route = useRouter;
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
