<script setup>

</script>

<template>
    <div class="div-body">
        <section id="product-overview">
                <h1>Get the freedom you deserve</h1>
                <h2>trying to test h2</h2>
        </section>
        <section id="plan">
            <h1 class="section-title">This is the plan</h1>
        </section>
        <div class="destination">
            <div class="thumbnail">
                <img src="@/assets/new-york.jpg" alt="Sunset in New York">
            </div>
            <div class="content">
                <h1>New York</h1>
                <p>One of the most vibrant cities you can visit - a trip no one should miss!</p>
            </div>
            <section id="plans">
                <h2 class="section-title">Choose your plan</h2>
            </section>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
}
/* Specificity order: inline > #id > class,atribute > tag elecment selector */
.div-body {
    font-family: 'Rubik Iso', cursive;
}

#product-overview {
    background: #ff1b68;
    width: 50%;
    padding: 10px;
    border: 5px pink solid;
    margin: 10px;
}

#plan {
    background: black;
}

.section-title {
    color: #2ddf5c;
}
/* The class overwrite the tag selector */
#product-overview h1 {
    color: white;
    font-family: 'Anton', sans-serif;
}

/* inheritance has very low specificity */
.main-header {

}

</style>

<!--<style scoped>-->
<!--#product-overview {-->
<!--    background: #ff1b68;-->
<!--}-->

<!--#plan {-->
<!--    background: black;-->
<!--}-->

<!--.section-title {-->
<!--    color: #2ddf5c;-->
<!--}-->

<!--h1 {-->
<!--    color: white;-->
<!--    font-family: 'Anton', sans-serif;-->
<!--}-->


<!--/* Combinator higher priorty*/-->
<!--.destination h2 {-->
<!--    color: aqua;-->
<!--    -->
<!--}-->

<!--.section-title {-->
<!--    color: #2ddf5c;-->
<!--    font-family: inherit;-->
<!--}-->

<!--.destination {-->
<!--    box-sizing: border-box;-->
<!--    width: 320px;-->
<!--    height: 420px;-->
<!--    margin: 20px auto;-->
<!--    border: 1px solid #aaa;-->
<!--    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);-->
<!--    cursor: pointer;-->
<!--    transition: background-color 400ms ease-out;-->
<!--    font-family: 'Rubik Iso', cursive;-->
<!--}-->

<!--.destination:hover,-->
<!--.destination:active {-->
<!--    background-color: #fa923f;-->
<!--    color: white;-->
<!--}-->

<!--.thumbnail {-->
<!--    width: 100%;-->
<!--    height: 300px;-->
<!--    overflow: hidden;-->
<!--}-->

<!--.thumbnail img {-->
<!--    width: 100%;-->
<!--}-->

<!--.content {-->
<!--    text-align: center;-->
<!--}-->

<!--.content h1 {-->
<!--    margin: 10px 0;-->
<!--}-->
<!--</style>-->
