<script>
// defineProps({
//     msg: {
//         type: String,
//         required: true,
//     },
// });
</script>

<template>
   <div class="container -mt-10 sm:-mt-20 lg:-mt-35 xs:w-screen fade-up">
        <div class="flex transition-transform duration-500" data-slideContainer>
            <div class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4" data-slide>
                <img loading="lazy" class="object-cover h-full [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all peer" src="../assets/images/slide1.webp" alt="Iceland scene">
                <p class=" absolute bottom-4 left-4 px-4 py-2 bg-bkg font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity">Ocean Wonders</p>
            </div>

            <div class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4" data-slide>
                <img loading="lazy" class="object-cover h-full [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all peer" src="../assets/images/slide2.webp" alt="Iceland scene">
                <p class=" absolute bottom-4 left-4 px-4 py-2 bg-bkg font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity">Ocean Wonders</p>
            </div>

            <div class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4" data-slide>
                <img loading="lazy" class="object-cover h-full [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all peer" src="../assets/images/slide3.webp" alt="Iceland scene">
                <p class=" absolute bottom-4 left-4 px-4 py-2 bg-bkg font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity">Ocean Wonders</p>
            </div>

            <div class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4" data-slide>
                <img loading="lazy" class="object-cover h-full [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all peer" src="../assets/images/slide4.webp" alt="Iceland scene">
                <p class=" absolute bottom-4 left-4 px-4 py-2 bg-bkg font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity">Ocean Wonders</p>
            </div>

            <div class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4" data-slide>
                <img loading="lazy" class="object-cover h-full [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all peer" src="../assets/images/slide5.webp" alt="Iceland scene">
                <p class=" absolute bottom-4 left-4 px-4 py-2 bg-bkg font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity">Ocean Wonders</p>
            </div>
        </div>
    </div>
</template>

<style>
</style>
