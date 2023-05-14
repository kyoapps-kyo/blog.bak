<template>
    <div>
        <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">{{ site.title }}</NuxtLink>
    </div>
</template>

<script setup lang='ts'>
const { site } = useAppConfig()
</script>

<style scoped></style>
