<template>
    <div class="test-html">
        <div class="test-body">
            <div class="parent">
                <div class="child-1">Navigation Bar</div>
                <div class="child-2">Background Image</div>
                <div class="child-3">Features</div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "PositionView"
}
</script>

<style scoped>
.test-html {
    background: #b3b3b3;
    padding: 15px;
    border: 5px solid white;
    margin: 15px;
    height: 2000px;
}

.test-body {
    background: #fa923f;
    padding: 20px;
    border: 5px solid black;
    margin: 0;
    overflow: hidden;
}

.parent {
    background: white;
    padding: 20px;
    border: 5px solid black;
    margin: 0;
    position: relative;
    top: 200px;
}

.parent div {
    background: rgb(105, 105, 109);
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
}

/*.parent .child-1 {*/
/*    position: fixed;*/
/*    width: 100%;*/
/*    right: 0;*/
/*    top: 0;*/
/*    margin: 0;*/
/*    box-sizing: border-box;*/
/*}*/


</style>