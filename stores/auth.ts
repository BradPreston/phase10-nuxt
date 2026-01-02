import { defineStore } from "pinia";
import { computed } from "vue";

import { authClient } from "../lib/auth-client";

export const useAuthStore = defineStore("auth", () => {
  const session = authClient.useSession();
  const user = computed(() => session.value.data?.user);
  const loading = computed(() => session.value.isPending || session.value.isRefetching);

  async function signIn(email: string, password: string) {
    return await authClient.signIn.email({ email, password });
  }

  async function signOut() {
    await authClient.signOut();
  }

  return {
    loading,
    signIn,
    user,
    signOut,
  };
});
