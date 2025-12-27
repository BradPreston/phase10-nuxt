<template>
  <div class="flex flex-col justify-center items-center bg-primary fixed top-0 left-0 w-screen h-1/2 shadow-lg angled-border-bottom z-10">
    <slot />
  </div>
  <div class="fixed w-screen h-1/2 top-5 left-0 bg-primary opacity-40 angled-border-bottom" />
  <div class="fixed w-screen h-1/2 top-10 left-0 bg-primary opacity-20 angled-border-bottom" />
  <div class="fixed w-screen h-1/2 top-15 left-0 bg-primary opacity-10 angled-border-bottom" />
  <div class="fixed w-screen h-1/2 top-20 left-0 bg-primary opacity-5 angled-border-bottom" />
  <div class="fixed w-screen h-1/2 top-25 left-0 bg-primary opacity-2.5 angled-border-bottom" />
</template>
