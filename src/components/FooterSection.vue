<script>
import Logo from "./icons/Logo.vue";

export default {
    components: {
Logo,
    }
}
</script>

<template>
    <div class="container flex flex-wrap md:justify-between items-center md:items-start gap-12">

        <div class="grid gap-2 grow justify-items-center md:justify-items-start basis-full md:basis-1/4">
<Logo />
            <p class="text-muted text-sm text-center md:text-left">
                We curate unique experiences <br> for the adventurous traveler.
            </p>
        </div>

        <nav aria-label="Secondary navigation"
            class=" text-sm flex flex-col items-center sm:items-start sm:flex-row text-center sm:text-left gap-6 justify-between md:justify-around grow basis-full md:basis-1/2 mt-2">
            
            <div class="grid gap-3">
                <p class="font-bold underline decoration-accent decoration-4 underline-offset-2 tracking-wide px-2">
                    About
                </p>
                <ul aria-label="About">
                    <li>
                        <a href="#" class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#" class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            Press
                        </a>
                    </li>
                    <li>
                        <a href="#" class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            News
                        </a>
                    </li>
                </ul>
            </div>

            <div class="grid gap-3">
                <p class="font-bold underline decoration-accent decoration-4 underline-offset-2 tracking-wide px-2">
                    Locations
                </p>
                <ul aria-label="About">
                    <li>
                        <a href="#" class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            Africa
                        </a>
                    </li>
                    <li>
                        <a href="#" class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            Asia
                        </a>
                    </li>
                    <li>
                        <a href="#" class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            Australia
                        </a>
                    </li>
                    <li>
                        <a href="#" class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            Europe
                        </a>
                    </li>
                    <li>
                        <a href="#" class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            North America
                        </a>
                    </li>
                    <li>
                        <a href="#" class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            South America
                        </a>
                    </li>
                </ul>
            </div>

            <div class="grid gap-3">
                <p class="font-bold underline decoration-accent decoration-4 underline-offset-2 tracking-wide px-2">
                    Contact Us
                </p>
                <ul aria-label="About">
                    <li>
                        <a href="#" class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            Email
                        </a>
                    </li>
                    <li>
                        <a href="#" class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="#" class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="#" class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>


        </nav>
    </div>

</template>

<style>

</style>
