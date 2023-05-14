<template>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    // as a string,
    // where `%s` is replaced with the title
    titleTemplate: "%s - kyo'blog",
  })
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(.4rem);
  translate: 0px 20px;
}
</style>