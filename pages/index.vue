<script setup lang="ts">
const { social } = useAppConfig()
const data = { 
    title: 'Home'
}
definePageMeta({ 
    title: 'Home'
})
const head = useHead({ 
    title: 'Home'
})
</script>

<template>
    <div class="container mx-auto">
        <Hero>
            <div class="leading-loose [&amp;_a]:font-bold [&amp;_a]:underline">
                <p>I'm <strong>Wuyang</strong>, a freelance web developer, living in Shanghai.</p>
                <p>I previously worked as a full-stack web engineer in Japan.</p>
                <p>Here, I focus on the development of front-end technology and AI, summarize, and share my knowledge. </p>
                <p>You can find me on <a :href="social.gitUrl" class="font-bold underline">GitHub</a>, and also follow me on <a
                        href="" class="font-bold underline">YouTube</a>, where I share random ideas or summaries of my
                    experiences. </p>
                <p>Or you can send me an email via <a href="mailto:kyoapps2022@gmail.com" target="_blank"
                        rel="noreferrer nofollow" class="font-bold underline">kyoapps2022@gmail.com</a>, I would be happy to
                    connect.</p>
            </div>
        </Hero>
    </div>
</template>
<style scoped></style>