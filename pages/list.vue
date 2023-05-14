<template>
    <div class="container mx-auto">
        <Hero>
            <PageNavigation></PageNavigation>
        </Hero>
    </div>
</template>

<script setup lang='ts'>
const data = { 
    title: '文章列表'
}
definePageMeta({ 
    title: '文章列表'
})
const head = useHead({ 
    title: '文章列表'
})
</script>

<style scoped>

</style>
