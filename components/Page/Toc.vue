<script setup lang="ts">
const props = defineProps(
  {
    index: Number,
  }
)
const { toc } = useContent()
const baseClass = 'my-4 underline decoration-primary decoration-1 '
const activeClass = 'my-4 underline decoration-primary decoration-1 font-bold'
const el = ref<null | HTMLElement>(null);

const currIndex = computed(() => {
  return props.index
})



</script>

<template>
  <div class="px-8">
    <ul v-if="toc && toc.links" ref="el">
      <li v-for="(link, index) in toc.links" :key="link.text" class="my-2 underline decoration-primary decoration-1" :class="{'font-bold text-primary': currIndex==index}">
        <a :href="`#${link.id}`">
          <span v-if="currIndex==index">></span>
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>