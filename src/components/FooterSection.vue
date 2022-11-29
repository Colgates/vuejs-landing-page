<script>
import Logo from "./icons/Logo.vue";

export default {
    components: {
        Logo,
    },
    data() {
        return {
            sections: [
                {
                    id: 1, title: "About", children: [
                        { title: "About Us" },
                        { title: "Press" },
                        { title: "News" },
                    ]
                },
                {
                    id: 2, title: "Locations", children: [
                        { title: "Asia" },
                        { title: "Africa" },
                        { title: "Australia" },
                        { title: "Europe" },
                        { title: "North America" },
                        { title: "South America" },
                    ]
                },
                {
                    id: 3, title: "Contact", children: [
                        { title: "Email" },
                        { title: "Instagram" },
                        { title: "Facebook" },
                        { title: "Twitter" },
                    ]
                },
            ]

        }
    },
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

            <div class="grid gap-3" v-for="section in sections">
                <p class="font-bold underline decoration-accent decoration-4 underline-offset-2 tracking-wide px-2">
                    {{ section.title }}
                </p>
                <ul aria-label="About" v-for="child in section.children">
                    <li>
                        <a href="#"
                            class=" hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg px-2 ring-accent rounded-full">
                            {{ child.title }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

</template>

<style>

</style>
