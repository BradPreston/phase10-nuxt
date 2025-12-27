<script setup lang="ts">
import { authClient } from "../../lib/auth-client";

const session = authClient.useSession();

async function signup(event: Event) {
  const formData = new FormData(event.target as HTMLFormElement);

  await authClient.signUp.email({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    name: formData.get("name") as string,
  });
}

async function signin(event: Event) {
  const formData = new FormData(event.target as HTMLFormElement);

  await authClient.signIn.email({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });
}

async function signout() {
  await authClient.signOut();
}
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <div v-if="!session?.data">
      <div>
        <h2>Signup</h2>
        <form @submit.prevent="signup">
          <input type="text" name="name" placeholder="Name">
          <input type="email" name="email" placeholder="Email">
          <input type="password" name="password" placeholder="Password">
          <button type="submit">
            Signup
          </button>
        </form>
      </div>
      <h2>Signin</h2>
      <form @submit.prevent="signin">
        <input type="email" name="email" placeholder="Email">
        <input type="password" name="password" placeholder="Password">
        <button type="submit">
          Signin
        </button>
      </form>
    </div>
    <div v-else>
      <button @click="signout">
        Signout
      </button>
    </div>
  </div>
</template>
