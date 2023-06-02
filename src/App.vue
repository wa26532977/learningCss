<template>
    <div class="main-body">
        <home-view />
    </div>
</template>

<script>
import HomeView from "@/views/HomeView.vue";
// import Section4 from "@/views/Section4.vue";
    export default {
        components: {
            HomeView
            // Section4
        }
    }
</script>

<style scoped>
    .main-body {
        font-family: sans-serif;
    }
</style>