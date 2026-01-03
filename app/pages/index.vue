<script setup lang="ts">
import SignInForm from "~/components/forms/sign-in-form.vue";
import PrimaryBgContainer from "~/components/primary-bg-container.vue";

import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen w-full relative">
    <PrimaryBgContainer>
      <NuxtImg
        src="/images/phase-10-logo.png"
        alt="Phase 10 logo"
        class="max-w-96 w-full h-full object-contain max-h-1/2 mb-24"
        :preload="true"
        loading="eager"
        fetchpriority="high"
      />
    </PrimaryBgContainer>
    <div v-if="!authStore.user" class="flex justify-center w-full relative z-20">
      <SignInForm />
    </div>
    <div v-else class="flex justify-center w-full">
      <div class="w-full max-w-sm flex flex-col border border-gray-200 bg-gray-50 p-4 rounded-lg shadow-lg z-10">
        <h2 class="text-2xl font-bold mb-1">
          Welcome back, {{ authStore.user?.name }}!
        </h2>
        <p class="mb-4">
          We're glad to see you again! Would you like to continue your last game or start a new one?
        </p>
        <div class="flex flex-col gap-2 w-full">
          <UButton color="secondary" class="w-full h-full flex items-center justify-center gap-2 text-base" href="/" disabled>
            <Icon name="heroicons:arrow-path-rounded-square-16-solid" class="size-5" />
            Continue last game
          </UButton>
          <UButton class="w-full h-full flex items-center justify-center gap-2 text-base" href="/games/new">
            <Icon name="heroicons:plus-16-solid" class="size-5" />
            Create a new game
          </UButton>
        </div>
      </div>
    </div>
    <NuxtImg
      src="/images/phase-10-cards.png"
      alt="Phase 10 cards"
      class="w-screen h-auto fixed bottom-0 left-0 -z-10 opacity-10"
      :preload="true"
      loading="eager"
      fetchpriority="high"
      quality="80"
      format="webp"
    />
  </div>
</template>
