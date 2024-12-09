<template>
    <div>
        <homepageskeleton v-if="!isLoaded" />
        <services v-if="!isLoaded" />
        <focus v-if="!isLoaded" />
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
        homepagedesign,
        services,
        focus,
    },
    data() {
        return {
            isLoaded: false,
        };
    },
    async created() {
        await this.loadContent();
    },
    methods: {
        async loadContent() {
            try {
                const simulatedNetworkDelay = await this.simulateRealTimeDelay();
                console.log("Simulated delay completed:", simulatedNetworkDelay);
                this.isLoaded = true;
            } catch (error) {
                console.error("Error during content loading:", error);
            }
        },
        simulateRealTimeDelay() {
            return new Promise((resolve) => {
                // Simulate a real-time delay; adjust based on deployment needs
                const delay = Math.random() * (3000 - 1500) + 1500; // Random delay between 1.5s and 3s
                setTimeout(() => {
                    resolve(`Delay of ${delay.toFixed(0)}ms`);
                }, delay);
            });
        },
    },
};
</script>
