
<template>
    <div>
        <homepageskeleton v-if="!isLoaded" />
        <services v-if="!isLoaded" />
        <focus v-if="!isLoaded"  />
        <homepagedesign v-else />
    </div>
</template>

<script>
import homepageskeleton from "./homepageskeleton.vue";
import homepagedesign from "./homepagedesign.vue";
import services from './homepageservices/services.vue';
import focus from "./homepagefocus/focus.vue";

export default {
    name: "HomepageWithFallback",
    components: {
        homepageskeleton,
        homepagedesign ,
        services,
        focus,
    },
    data() {
        return {
            isLoaded: false,
        };
    },
    async created() {
        // Simulate async loading with a delay
        await this.loadNavbar();
    },
    methods: {
        async loadNavbar() {
            // Simulated async operation
            return new Promise((resolve) => {
                setTimeout(() => {
                    this.isLoaded = true;
                    resolve();
                }, 2000); // 2 seconds delay
            });
        },
    },
};
</script>