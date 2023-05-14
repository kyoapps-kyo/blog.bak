<script setup lang="ts">

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation({
  where: [
    {
      _path: /^\/post/,
    }
  ]
}))
</script>


<template>
  <div>
    <h2 class="text-2xl text-primary">Article List</h2>
    <div class="my-14">
      <ul v-for="items in navigation">
        <li v-for="( item, index ) in items.children">
          <NuxtLink :to="item._path" class="btn w-full btn-outline btn-sm">
            <div class="w-full flex items-center px-20">
              <div class="grow-0 mr-10 text-secondary">{{ item.date.replace(/\//g, '.') }}</div>
              <div v-for="index in 10" :class="index === 1 ? 'grow-0 w-12' : 'grow'" class="text-neutral-content">·</div>
              <div class="grow-0">{{ (item.icon || '') + item.title }}</div>
            </div>
          </NuxtLink>
          <div class="divider my-2" v-if="index !== ((items.children?.length || 0) - 1)"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
