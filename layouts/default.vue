<script setup lang="ts">
const headerEl = ref<HTMLElement>();
const isActive = ref<boolean>(false);

onMounted(() => {
    const handleScroll = debounce(() => {
        isActive.value = !!headerEl.value && window.pageYOffset > headerEl.value.offsetHeight;
        console.log(isActive.value);
    }, 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}); 
</script> 

<template>
    <div class='flex flex-col w-full min-h-screen'>
        <!-- 头部 -->
        <header class="bg-base-100 w-full mx-auto z-50" ref="headerEl">
            <NavBar class="container mx-auto"></NavBar>
        </header>
        <!-- 主体 -->
        <main class="bg-base-100 flex-grow mt-28">
            <slot></slot>
        </main>
        <!-- 尾部 -->
        <footer class="footer items-center p-4 bg-neutral text-neutral-content">

        </footer>
    </div>
</template>
<style scoped></style>