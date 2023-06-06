<template>
    <div class="parent">
        <div class="child-1">Navigation Bar</div>
        <div class="child-2">Background Image</div>
        <div class="child-3">Features</div>
    </div>
</template>

<script>
export default {
    name: "PositionView"
}
</script>

<style scoped>

.parent {
    background: white;
    padding: 20px;
    border: 5px solid black;
    margin: 0;
}

.parent div {
    background: rgb(105, 105, 109);
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
}

.parent .child-1 {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
}

</style>