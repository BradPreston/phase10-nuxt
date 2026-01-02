<script setup lang="ts">
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();

async function signout() {
  await authStore.signOut();
  navigateTo("/login");
}
</script>

<template>
  <UApp>
    <UContainer>
      <UButton v-if="authStore.user" class="fixed top-4 right-4 z-30 flex items-center justify-center gap-2 text-base" color="neutral" @click="signout">
        <Icon name="heroicons:arrow-left-end-on-rectangle-16-solid" class="font-bold size-5" />
        Signout
      </UButton>
      <NuxtPage />
    </UContainer>
  </UApp>
</template>
