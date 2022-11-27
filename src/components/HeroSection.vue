<script>
// defineProps({
//     msg: {
//         type: String,
//         required: true,
//     },
// });
</script>

<template>
    <header class="min-h-screen flex flex-col justify-evenly items-center relative preserve-3d">
        <div class=" absolute bg-gradient-to-b inset-0 bottom-3/4 from-accent to-transparent"></div>
        <div class=" absolute bg-gradient-to-t inset-0 top-1/3 -bottom-32 from-bkg/80 to-transparent distance-1"></div>
        <!-- sizes="(min-width: 500px) 480w, 650w, 800w, 1300w"
        srcset="../assets/images/hero-xs.webp 480w, ../assets/images/hero-sm.webp 650w, ../assets/images/hero-md.webp 800w, ../assets/images/hero-lg.webp 1300w," -->
        <img 
            src="../assets/images/hero-xl.webp" class="absolute h-full w-full -z-20 object-cover object-center distance-1">

        <h1
            class="text-5xl md:text-6xl lg:text-8xl text-center font-bold tracking-wide py-12 drop-shadow-text-md sm:drop-shadow-sm lg:drop-shadow-text-lg distance-2">
            Unique Trips for<br>
            Adventorous<br>
            Travelers
        </h1>
        <a href="#contact-form"
            class=" bg-accent text-bkg font-medium py-3 px-8 rounded-full border border-bkg focus:outline-none focus-visible:ring-4 ring-accent ring-offset-bkg ring-offset-2 hover:bg-accent/90 flex space-x-2 drop-shadow-text-lg hover:drop-shadow-none transition-shadow distance-2">
            <span class="uppercase tracking-wide">
                Book a Trip
            </span>
        </a>

    </header>
</template>

<style>
</style>
