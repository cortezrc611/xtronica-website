
<template>
    <div>
        <servicesskeleton v-if="!isLoaded" />
        <servicesdesign v-else />
    </div>
</template>

<script>
import servicesskeleton  from "./servicesskeleton.vue";
import servicesdesign from "./servicesdesign.vue";

export default {
    name: "HomepageWithFallback",
    components: {
        servicesskeleton,
        servicesdesign ,
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