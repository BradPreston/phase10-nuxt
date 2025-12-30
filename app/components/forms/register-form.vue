<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";

import { z } from "zod";

import { authClient } from "../../../lib/auth-client";

const schema = z.object({
  name: z.string("Name is required"),
  email: z.email("Invalid email address"),
  password: z.string("Password is required").min(8, "Password must be at least 8 characters long"),
});

type Schema = z.infer<typeof schema>;

const state = reactive<Partial<Schema>>({
  name: undefined,
  email: undefined,
  password: undefined,
});

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await authClient.signUp.email({
    name: event.data.name,
    email: event.data.email,
    password: event.data.password,
  }, {
    onSuccess: () => {
      toast.add({ title: "Success", description: "You are now registered", color: "success" });
    },
    onError: ({ error }) => {
      toast.add({ title: "Error", description: error?.message ?? "Failed to register", color: "error" });
    },
  });
}
</script>

<template>
  <div class="w-full max-w-sm gap-4 flex flex-col border border-gray-200 bg-gray-50 p-4 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold">
      Register New User
    </h2>
    <UForm :schema="schema" :state="state" class="w-full max-w-sm gap-4 flex flex-col" method="POST" @submit.prevent="onSubmit">
      <UFormField name="name" label="Name">
        <UInput v-model="state.name" class="w-full" autocomplete="name" />
      </UFormField>
      <UFormField name="email" label="Email">
        <UInput v-model="state.email" class="w-full" autocomplete="email" />
      </UFormField>
      <UFormField name="password" label="Password">
        <UInput v-model="state.password" type="password" class="w-full" autocomplete="current-password" />
      </UFormField>
      <UButton type="submit" class="w-full block text-center">
        Register
      </UButton>
    </UForm>
  </div>
</template>
