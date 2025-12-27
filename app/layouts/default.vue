<script setup lang="ts">
import { authClient } from "../../lib/auth-client";

const session = authClient.useSession();

async function signout() {
  await authClient.signOut();
}
</script>

<template>
  <UApp>
    <UContainer>
      <UButton v-if="session?.data" class="fixed top-4 right-4 z-30 flex items-center justify-center gap-2 text-base" color="neutral" @click="signout">
        <Icon name="heroicons:arrow-left-end-on-rectangle-16-solid" class="font-bold size-5" />
        Signout
      </UButton>
      <NuxtPage />
    </UContainer>
  </UApp>
</template>
