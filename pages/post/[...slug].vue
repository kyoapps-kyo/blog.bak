<template>
    <div class="container mx-auto flex justify-center mb-32">
        <div class="flex-none mr-10">
        <Breadcrumbs class="mb-8 pl-2"></Breadcrumbs>
            <ContentDoc class="prose lg:prose-xl" />
            <div class="w-full flex justify-between mt-20">
            <NuxtLink v-if="prev" :to="prev._path" class="btn btn-outline btn-primary">&larr; {{ prev.title }}</NuxtLink>
            <NuxtLink v-if="next" :to="next._path" class="btn btn-outline btn-secondary">{{ next.title }} &rarr;</NuxtLink>
        </div>
        </div>
        <PageToc class="sticky top-28 right-0 w-[220px] h-min text-sm preview p-4 rounded-xl shadow-lg bg-opacity-30"
            style="background-size: 5px 5px" :index="currIndex"></PageToc>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware:['route']
})
const { page, prev, next } = useContent();
const head = useContentHead(page);
useHead({
    htmlAttrs: {
        class: 'scroll-smooth',
    }
});

const currIndex = ref(-1);
let pageScrollListener: (() => void) | null = null;

const tocEffectHandle = () => {
    if (window !== undefined && window) {
        const h2Els = Array.from(document.getElementsByTagName('h2'));
        const h2Offsets: number[] = h2Els.map((item) => item.offsetTop);
        if (h2Offsets.length >= 1) {
            h2Offsets.push(Number.MAX_SAFE_INTEGER);
        }
        pageScrollListener = debounce(() => {
            const scrollTop = document.documentElement.scrollTop;
            let index = -1;
            for (let i = 0; i < h2Offsets.length; i++) {
                if (scrollTop >= h2Offsets[i] && scrollTop < h2Offsets[i + 1]) {
                    index = i;
                    break;
                }
            }
            currIndex.value = index;
        }, 20);
        window.addEventListener('scroll', pageScrollListener);
    }
};

onMounted(tocEffectHandle);
onUnmounted(() => {
    if (pageScrollListener) {
        window.removeEventListener('scroll', pageScrollListener);
        pageScrollListener = null;
    }
});
</script>