<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

import { ref } from "vue";

import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();

const route = useRoute();

const loggedInNavigationItems = ref<NavigationMenuItem[]>([
  {
    label: "Games",
    to: "/games",
    active: route.path.startsWith("/games"),
    children: [
      {
        label: "New Game",
        to: "/games/new",
        active: route.path.startsWith("/games/new"),
      },
      {
        label: "My Games",
        to: "/account/games",
        active: route.path.startsWith("/account/games"),
      },
    ],
  },
  {
    label: "Account",
    to: "/account",
    active: route.path.startsWith("/account"),
  },
]);
const loggedOutNavigationItems = ref<NavigationMenuItem[]>([
  {
    label: "Sign In",
    to: "/login",
    active: route.path.startsWith("/login"),
  },
  {
    label: "Sign Up",
    to: "/signup",
    active: route.path.startsWith("/signup"),
  },
]);

async function signout() {
  await authStore.signOut();
  navigateTo("/login");
}
</script>

<template>
  <UHeader title="Phase 10">
    <UNavigationMenu v-if="authStore.user" content-orientation="vertical" :items="loggedInNavigationItems" class="w-full justify-center" />
    <UNavigationMenu v-else content-orientation="vertical" :items="loggedOutNavigationItems" class="w-full justify-center" />

    <template #right>
      <UButton v-if="authStore.user" class="flex items-center justify-center gap-2 text-base h-fit" color="neutral" @click="signout">
        <Icon name="heroicons:arrow-left-end-on-rectangle-16-solid" class="font-bold size-5" />
        Signout
      </UButton>
    </template>
  </UHeader>
</template>
