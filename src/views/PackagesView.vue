<template>
    <div class="background"></div>
    <main>
        <section class="plus-plan__link" id="plus">
            <a href="#">
                <h1>Our PLUS Plan</h1>
                <h2 class="plus__badge">RECOMMENDED</h2>
                <h2 class="plan__h2">asdfasdfasdfsadfsdfsdfasdfasdf</h2>
                <p>asdfsadfsdfasdfsadfsdfasdfasdfasdfasdfasdfsadf</p>
            </a>
        </section>
        <section class="free-plan__link" id="free">
            <a href="#">
                <h1>Our FREE Plan</h1>
                <h2 class="plan__h2">asdfasdfasdfsadfsdfsdfasdfasdf</h2>
                <p>asdfsadfsd sdfsadfsdfasd fsadfsdfasdfasdfasdfassdfsadfsdfa sdfsadfsdfasdfas dfasdfassdfsadfsdfasdf sadfsdfasdfasdfasdfassdfsa dfsdfasdf sadfsdfasdfasdfasdfassdfsadfsdfasdfsadfsdfasdfasdfasdfas fasdfsadfsdfasdf asdfasdfas dfasdfsadf</p>
            </a>
        </section>
        <div class="clearfix"></div>
        <section class="premium-plan__link" id="premium">
            <a href="#">
                <h1>Our PREMIUM Plan</h1>
                <h2 class="plan__h2">asdfasdfasdfsadfsdfsdfasdfasdf</h2>
                <p>asdfsadfsdfas dfsadfsdfas dfasdf asdfassdfsadfsdfasdfsadfsdfasdfasdfasdfassdfsadfsdfasdfsadfsdfasdfas dfasdfassdfsa dfsdfasdfsadfsdfasd fasdfasdfasdfasdfsadf</p>
            </a>
        </section>
    </main>
</template>

<script>
export default {
    name: "PackagesView"
}
</script>

<style scoped>
main {
    margin: 43px 0 0 0;
    padding: 10px 0 0 0;
}
.background {
    background: url("../assets/plans-background.jpg");
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
}

.plus-plan__link {
    background-color: #b9ecb9;
    border: 3px solid black;
    margin: 20px 50px 10px 0;
    padding: 20px 10px 40px 10px;
    width: 80%;
    border-left: none;
    position: relative;
    z-index: 0;
}

.free-plan__link,
.premium-plan__link {
    background-color: #dceedc;
    border: 3px solid black;
    margin: 20px 50px 10px 0;
    padding: 20px 10px 40px 10px;
    width: 80%;
}

.plus-plan__link:hover,
.free-plan__link:hover,
.premium-plan__link:hover {
    box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.5);

}

.plus-plan__link a,
.free-plan__link a,
.premium-plan__link a {
    text-decoration: none;
    display: block;
}

.plus-plan__link h1,
.free-plan__link h1,
.premium-plan__link h1 {
    color: black;
    font-weight: bold;
}

.plan__h2 {
    color: gray;
}

.plus-plan__link p,
.free-plan__link p,
.premium-plan__link p {
    border: 1px solid black;
    background-color: white;
    color: black;
    padding: 25px;
    margin: 0 20px 0 0;
    font-size: 25px;
}

.premium-plan__link {
    background-color: darkgreen;
}

.premium-plan__link h1 {
    color: white;
}

.clearfix {
    clear: both;
}

#plus {
    background: rgba(213, 255, 220, 0.95);
}

#free {
    background: rgba(234, 252, 237, 0.95);
    float: right;
    text-align: right;
    margin: 20px 0;
    border-right: none;
}

#premium {
    background: rgba(14, 79, 31, 0.95)
}

#premium h2 {
    color: #bbb;
}

.main-footer {
    background-color: black;
    color: white;
}

.main-footer ul {
    margin: 0;
    list-style: none;
    padding: 18px 0;
}

.main-footer li {
    text-align: center;
    display: inline-block;
    width: 50%;
}

.main-footer a {
    color: white;
    text-decoration: none;
}

.main-footer a:hover,
.main-footer a:active {
    color: lightblue;
}

* {
    box-sizing: border-box;
}

.main-header {
    background-color: green;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 8px 16px;
    z-index: 1;
}

.main-header div {
    display: inline-block;
    padding: 5px 10px;
}

.main-header__brand {
    display: inline-block;
    text-decoration: none;
    color: #0e4f1f;
    font-weight: bold;
    padding: 3px 0;
}

.main-nav {
    text-align: right;
    display: inline-block;
    width: calc(100% - 80px);
}

.main-nav__items {
    margin: 0;
    padding: 0;
    list-style: none;
}

.main-nav__item {
    display: inline-block;
    margin: 0 16px;
}

.main-nav__item a {
    text-decoration: none;
    color: #0e4f1f;
    font-weight: bold;
    padding: 3px 0;
}

.main-nav__item a:hover,
.main-nav__item a:active {
    color: white;
    border-bottom: 5px solid white;
}

.main-nav__item--cta a {
    color: white;
    background: red;
    padding: 2px 16px;
    border-radius: 8px;
}

.main-nav__item--cta a:hover,
.main-nav__item--cta a:active {
    color: red;
    background: white;
    border: none;
}

.plus__badge {
    position: absolute;
    right: 0;
    top: 7%;
    font-size: 12px;
    color: white;
    background: #ff5454;
    padding: 10px;
    margin: 20px;
    z-index: 10;
}
</style>