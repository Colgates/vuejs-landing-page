<script>
import HeroSection from "./components/HeroSection.vue";
import HeadlineSection from "./components/HeadlineSection.vue"
import Navbar from "./components/Navbar.vue"
import SliderSection from "./components/SliderSection.vue";

export default {
  components: {
    HeroSection,
    HeadlineSection,
    Navbar,
    SliderSection,
  }
}
</script>

<template>
  <div class=" h-screen pb-12 sm:pb-0 overflow-y-auto overflow-x-hidden relative scroll-smooth perspective">

    <Navbar />

    <HeroSection />

    <main class=" relative mt-16 sm:mt-24 lg:mt-40 pb-16 -mb-16 grid gap-16 sm:gap-24 lg:gap-40 overflow-hidden">
      
      <HeadlineSection />

      <SliderSection />

    </main>
  </div>
</template>

<style >
</style>
