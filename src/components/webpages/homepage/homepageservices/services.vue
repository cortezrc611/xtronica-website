<template>
    <div>
        <servicesskeleton v-if="!isLoaded" />
        <servicesdesign v-else />
    </div>
</template>

<script>
import servicesskeleton from "./servicesskeleton.vue";
import servicesdesign from "./servicesdesign.vue";

export default {
    name: "ServicesWithFallback",
    components: {
        servicesskeleton,
        servicesdesign,
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
                const simulatedDelay = await this.simulateRealTimeDelay();
                console.log("Simulated delay completed:", simulatedDelay);
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
