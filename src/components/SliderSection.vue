<script>
import LeftArrowIcon from "./icons/LeftArrowIcon.vue";
import RightArrowIcon from "./icons/RightArrowIcon.vue";
import Slider from "./Slider.vue"

export default {
    components: {
        LeftArrowIcon,
        RightArrowIcon,
        Slider,
    }
}
// defineProps({
//     msg: {
//         type: String,
//         required: true,
//     },
// });
</script>

<template>
    <section aria-labelledby="slider" class="container grid gap-4 text-center sm:text-left relative">
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
                We specialize in finding places no one else knows about.
                Here are a few of our favorites spots for true adventurers.
            </p>

            <div class="flex space-x-4">

                <button
                    class="grid place-items-center bg-accent hover:bg-accent/90 rounded-full p-2 text-bkg focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 disabled:text-accent"
                    data-slideBtn id="prev" aria-label="show previous image" type="button" disabled>
                    <LeftArrowIcon />
                </button>

                <button
                    class="grid place-items-center bg-accent hover:bg-accent/90 rounded-full p-2 text-bkg focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 disabled:text-accent"
                    data-slideBtn id="next" aria-label="show next image" type="button">
                    <RightArrowIcon />
                </button>

            </div>
        </div>
    </section>
    
    <Slider />
</template>

<style>

</style>
