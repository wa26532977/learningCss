<template>
    <div class="test-html">
        <div class="test-body">
            <div class="parent">
                <div class="country">USA</div>
                <div class="cities">San Francisco</div>
                <div class="cities">New York</div>
            </div>
            <div class="parent">
                <div class="country">France</div>
                <div class="cities">Nice</div>
                <div class="cities">Paris</div>
            </div>
            <div class="parent">
                <div class="country">Germany</div>
                <div class="cities">Berlin</div>
                <div class="cities">Munich</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StickPosition"
}
</script>

<style scoped>
.test-html {
    /*background: #b3b3b3;
    padding: 15px;
    border: 5px solid white;
    margin: 15px;*/
    height: 2000px;
}

.test-body {
    /*background: #fa923f;
    padding: 20px;
    border: 5px solid black;*/
    margin: 0;
}

.parent {
    background: white;
    padding: 20px;
    /*border: 5px solid black;*/
    margin: 10px;
}

.parent .country {
    background: #fa923f;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    position: sticky;
    top: 0;
}

.parent .cities {
    background: rgb(105, 105, 109);
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
}

</style>