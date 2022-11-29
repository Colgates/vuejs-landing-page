<script>
import LeftArrowIcon from "./icons/LeftArrowIcon.vue";
import RightArrowIcon from "./icons/RightArrowIcon.vue";
// import Slider from "./Slider.vue"

export default {
    components: {
        LeftArrowIcon,
        RightArrowIcon,
        // Slider,
    },
    data() {
        return {
            slides: [
                { id: 1, title: "Ocean wonders", img: "src/assets/images/slide1.webp" },
                { id: 2, title: "Ocean wonders", img: "src/assets/images/slide2.webp" },
                { id: 3, title: "Ocean wonders", img: "src/assets/images/slide3.webp" },
                { id: 4, title: "Ocean wonders", img: "src/assets/images/slide4.webp" },
                { id: 5, title: "Ocean wonders", img: "src/assets/images/slide5.webp" },
            ],
            currentIndex: 0,
            isMoving: false,
            paragraph: "We specialize in finding places no one else knows about. Here are a few of our favorites spots for true adventurers.",
        }
    },

    mounted() {
        this.addListener()
        this.addObserver()
    },

    methods: {
        buttonClicked(event) {
            if (this.isMoving) return

            this.isMoving = true
            event.currentTarget.id === "prev"
                ? this.currentIndex--
                : this.currentIndex++;
            console.log(this.currentIndex)
            this.$refs.slideContainer.dispatchEvent(new Event("sliderMove"))
        },

        addListener() {
            const slideContainer = this.$refs.slideContainer
            const prevSlideBtn = this.$refs.prevSlideBtn
            const nextSlideBtn = this.$refs.nextSlideBtn
            const slides = this.$refs.slide

            slideContainer.addEventListener('sliderMove', () => {
                // 1. translate the container to the right/left
                slideContainer.style.transform = `translateX(-${this.currentIndex * slides[0].clientWidth}px)`
                // 2. remove disabled attributes
                prevSlideBtn.removeAttribute('disabled')
                nextSlideBtn.removeAttribute('disabled')

                // 3. renable disabled attributes
                this.currentIndex == 0 && prevSlideBtn.setAttribute('disabled', 'true')
            })

            slideContainer.addEventListener('transitionend', () => this.isMoving = false)
        },

        addObserver() {
            const nextSlideBtn = this.$refs.nextSlideBtn
            const slides = this.$refs.slide

            const slideObserver = new IntersectionObserver((slide) => {
                if (slide[0].isIntersecting) {

                    nextSlideBtn.setAttribute('disabled', 'true')
                }
            }, { threshold: .75 });

            slideObserver.observe(slides[slides.length - 1]);
        }
    },
}

</script>

<template>
    <section aria-labelledby="slider" class="container grid gap-4 text-center sm:text-left fade-up">
        <div class="">
            <small class="tracking-widest text-accent uppercase drop-shadow-text-sm">
                Off The Beaten Path
            </small>

            <h2 id="slider" class="text-3xl font-bold tracking-wide drop-shadow-text-md">
                Places without People
            </h2>
        </div>
        <div class="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center space-x-4 space-y-4">

            <p class="text-muted max-w-2xl drop-shadow-text-sm">
                {{ paragraph }}
            </p>

            <div class="flex space-x-4">

                <button
                    class="grid place-items-center bg-accent hover:bg-accent/90 rounded-full p-2 text-bkg focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 disabled:text-accent"
                    id="prev" aria-label="show previous image" type="button" @click="buttonClicked" ref="prevSlideBtn"
                    disabled>
                    <LeftArrowIcon />
                </button>

                <button
                    class="grid place-items-center bg-accent hover:bg-accent/90 rounded-full p-2 text-bkg focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 disabled:text-accent"
                    id="next" aria-label="show next image" type="button" @click="buttonClicked" ref="nextSlideBtn">
                    <RightArrowIcon />
                </button>

            </div>
        </div>
    </section>

    <!-- <Slider /> -->

    <div class="container -mt-10 sm:-mt-20 lg:-mt-35 xs:w-screen fade-up">
        <div class="flex transition-transform duration-500" ref="slideContainer">

            <div v-for="slide in slides" :key="slide.id"
                class="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4" ref="slide">
                <img loading="lazy"
                    class="object-cover h-full [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all peer"
                    :src="slide.img" :alt="slide.title">
                <p class=" absolute bottom-4 left-4 px-4 py-2 bg-bkg font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity">
                    {{ slide.title }} 
                </p>
            </div>

        </div>
    </div>


</template>

<style>

</style>
