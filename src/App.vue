<script>
import CTASection from "./components/CTASection.vue";
import FooterSection from "./components/FooterSection.vue"
import HeroSection from "./components/HeroSection.vue";
import HeadlineSection from "./components/HeadlineSection.vue"
import Navbar from "./components/Navbar.vue"
import SliderSection from "./components/SliderSection.vue";
import MapSection from "./components/MapSection.vue"

export default {
  components: {
    CTASection,
    FooterSection,
    HeroSection,
    HeadlineSection,
    Navbar,
    MapSection,
    SliderSection,
  },
}
</script>

<template>
  <div class=" h-screen pb-12 sm:pb-0 overflow-y-auto overflow-x-hidden relative scroll-smooth perspective">

    <Navbar />

    <HeroSection />

    <main class=" relative mt-16 sm:mt-24 lg:mt-40 pb-16 -mb-16 grid gap-16 sm:gap-24 lg:gap-40 overflow-hidden">

      <HeadlineSection />

      <SliderSection />

      <MapSection />

      <CTASection />
    </main>

    <footer class="border-t border-accent mt-16 sm:mt-24 lg:mt-40 py-6 sm:py-8 md:py-12">
      <FooterSection />
    </footer>
  </div>
</template>

<style >

</style>
