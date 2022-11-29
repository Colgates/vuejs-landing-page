<script>
export default {
    data() {
        return {
            slides: [
                { id: 1, title: "Ocean wonders", img: "src/assets/images/slide1.webp" },
                { id: 2, title: "Ocean wonders", img: "src/assets/images/slide2.webp"},
                { id: 3, title: "Ocean wonders", img: "src/assets/images/slide3.webp"},
                { id: 4, title: "Ocean wonders", img: "src/assets/images/slide4.webp"},
                { id: 5, title: "Ocean wonders", img: "src/assets/images/slide5.webp"},
            ]
        }
    }
}
</script>

<template>
   <div class="container -mt-10 sm:-mt-20 lg:-mt-35 xs:w-screen fade-up">
        <div class="flex transition-transform duration-500" data-slideContainer ref="slideContainer">
            
            <div v-for="slide in slides" :key="slide.id" class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4" data-slide>
                <img loading="lazy" class="object-cover h-full [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all peer" :src="slide.img" :alt="slide.title">
                <p class=" absolute bottom-4 left-4 px-4 py-2 bg-bkg font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity"> {{slide.title}} </p>
            </div>

        </div>
    </div>
</template>

<style>
</style>
