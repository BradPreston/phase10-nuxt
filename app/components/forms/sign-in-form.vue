<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";

import { z } from "zod";

import { authClient } from "../../../lib/auth-client";

const schema = z.object({
  email: z.email("Invalid email address"),
  password: z.string("Password is required").min(8, "Password must be at least 8 characters long"),
});

type Schema = z.infer<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
});

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await authClient.signIn.email({
    email: event.data.email,
    password: event.data.password,
  }, {
    onSuccess: () => {
      toast.add({ title: "Success", description: "You are now logged in", color: "success" });
    },
    onError: ({ error }) => {
      toast.add({ title: "Error", description: error?.message ?? "Failed to log in", color: "error" });
    },
  });
}
</script>

<template>
  <div class="w-full max-w-sm gap-4 flex flex-col border border-gray-200 bg-gray-50 p-4 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold">
      Sign in
    </h2>
    <UForm :schema="schema" :state="state" class="w-full max-w-sm gap-4 flex flex-col" @submit.prevent="onSubmit">
      <UFormField name="email" label="Email">
        <UInput v-model="state.email" class="w-full" autocomplete="email" />
      </UFormField>
      <UFormField name="password" label="Password">
        <UInput v-model="state.password" type="password" class="w-full" autocomplete="current-password" />
      </UFormField>
      <UButton type="submit" class="w-full block text-center">
        Sign in
      </UButton>
    </UForm>
  </div>
</template>
