<template>
    <nav>
        <a href="#intro" class="active">Intro</a>
        <a href="#outro">outro</a>
    </nav>
    <section id="intro" class="main-section highlighted">
        <p>This is the intro section.</p>
    </section>
    <section id="outro" class="main-section">
        <p>This is the outro section</p>
    </section>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Section4",
}
</script>

<style scoped>

nav {
    margin-bottom: 16px;
    background: #fa923f;
    padding: 8px 0;
}

a {
    text-decoration: none;
    color: white;
    margin: 10px;
}

a.active {
    color: #521751;
}

a:not(.active) {
    color: blue;
}

.main-section {
    height: 800px;
    border: 1px solid #ccc;
    padding: 16px;
}

.highlighted {
    border: 2px solid #fa923f;
}

</style>