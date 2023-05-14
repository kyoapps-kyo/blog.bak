<template>
    <div>
        <ul class="menu menu-horizontal px-1">
            <li v-for="item of list" :key="item.link"><NuxtLink :to="item.link">{{ item.title }}</NuxtLink></li>
            <li>
                <ColorSwitch></ColorSwitch>
            </li>
            <li><a href="javascript:void(0);">
                    <SvgGithub />
                </a></li>
        </ul>
    </div>
</template>

<script setup lang='ts'>

const list = [
    {
        link: '/list',
        title: '全部'
    },
    {
        link: '/archive',
        title: '归档'
    },
    {
        link: '/categories',
        title: '分类'
    },
    {
        link: '/tags',
        title: '标签'
    }
]
</script>

<style scoped></style>
