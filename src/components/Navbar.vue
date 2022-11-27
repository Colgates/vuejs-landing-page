<script>
import Logo from './icons/Logo.vue';

export default {
    components: {
        Logo,
    },
}
</script>

<template>
    <nav class="grid place-items-center absolute w-full top-0 z-50" aria-label="Primary Navigation">
        <a href="/" aria-label="Go Home"
            class="p-1 m-4 focus:outline-none focus-visible:ring-4 ring-accent rounded-full transition-shadow">
            <Logo />
        </a>
    </nav>
</template>

<style>

</style>
