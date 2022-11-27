<script>
</script>

<template>
    <section class="container grid gap-4 text-center max-w-prose fade-up" aria-labelledby="cta">

        <div class="grid gap-4 text-center grow md:flex-1">
            <div>
                <small class="tracking-widest text-accent uppercase">
                    It's Time to Explore
                </small>

                <h2 id="cta" class="text-3xl font-bold tracking-wide">
                    Get Hidden Locations
                </h2>
            </div>

            <p class="text-muted max-w-2xl mx-auto mb-2">
                Not sure where to start? Drop us a line, and we'll send you new locations before the're shown on our
                website.
            </p>

            <form id="contact-form"
                class="border-4 border-accent rounded-full p-1 flex items-center justify-between max-w-md mx-auto">
                <input type="email" id="email" required placeholder="Email Address"
                    class="p-2 mx-4 bg-transparent w-full text-sm flex-1 border-b-2 border-transparent rounded-none caret-accent placeholder:text-white focus:placeholder:text-muted focus:outline-none focus:border-accent">
                <label class="sr-only" for="email">Enter your email address</label>

                <button id="contact-btn"
                    class=" bg-accent text-bkg font-medium text-sm py-3 px-4 sm:px-8 rounded-full border border-bkg focus:outline-none focus-visible:ring-4 ring-accent ring-offset-bkg ring-offset-2 hover:bg-accent/90 flex space-x-2 shrink-0">
                    <span class="uppercase tracking-wide">
                        Sign Up
                    </span>
                </button>


            </form>
        </div>
    </section>
</template>

<style>

</style>
