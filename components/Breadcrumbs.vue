<template>
    <div class="text-sm breadcrumbs">
        <ul>
            <li v-for="crumb, index in crumbs" :key="crumb.title">
                <NuxtLink :to="index === ( crumbs.length -1 ) ? '#' : crumb.path">{{ crumb.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang='ts'>
  const { page } = useContent() 
  const route = useRoute() 
  const router = useRouter() 
 
  const fullPath = route.fullPath 
  const params = fullPath.substring(1).split('/').map(item => { 
    let str = item.replace(/#(\S+)/, '') 
    str === 'post' ? str = 'list' : '' 
    return str 
  }) 
 
  const crumbs: { path: string; title: string }[] = [] 
  let path = '' 
  params.forEach(param => { 
    path =  `${path}/${param}`  
    const title = router.resolve(path).meta.title || page.value.title 
    crumbs.push({ path, title }) 
  }) 
 


</script>

<style scoped></style>
