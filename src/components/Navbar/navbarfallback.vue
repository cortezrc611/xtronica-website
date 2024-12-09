<!-- NavbarWithFallback.vue -->
<template>
    <div>
        <Navbarskeleton v-if="!isLoaded" />
        <Navbardesign v-else />
    </div>
</template>

<script>
import Navbarskeleton from "./navbarskeleton.vue";
import Navbardesign from "./navbardesign.vue";

export default {
    name: "NavbarWithFallback",
    components: {
        Navbarskeleton,
        Navbardesign ,
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