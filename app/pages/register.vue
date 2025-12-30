<script setup lang="ts">
import RegisterForm from "~/components/forms/register-form.vue";
import SignInForm from "~/components/forms/sign-in-form.vue";
import PrimaryBgContainer from "~/components/primary-bg-container.vue";

import { authClient } from "../../lib/auth-client";

const session = authClient.useSession();
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen w-full relative">
    <PrimaryBgContainer>
      <NuxtLink href="/">
        <NuxtImg
          src="/images/phase-10-logo.png"
          alt="Phase 10 logo"
          class="max-w-96 w-full h-full object-contain"
          :preload="true"
          loading="eager"
          fetchpriority="high"
        />
      </NuxtLink>
    </PrimaryBgContainer>
    <div class="flex justify-center w-full relative z-20">
      <SignInForm v-if="!session?.data" />
      <RegisterForm v-else class="mt-20" />
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
