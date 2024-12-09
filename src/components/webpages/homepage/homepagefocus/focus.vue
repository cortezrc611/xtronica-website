
<template>
    <div>
        <focusskeleton v-if="!isLoaded" />
        <focusdesign v-else />
    </div>
</template>

<script>
import focusskeleton  from "./focusskeleton.vue";
import focusdesign from "./focusdesign.vue";

export default {
    name: "HomepageWithFallback",
    components: {
        focusskeleton,
        focusdesign ,
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