<template>
    <div class="main-body">
        <header class="main-header">
            <div>
                <router-link :to="{name: 'home'}" class="main-header__brand">
                    <img src="./assets/uhost-icon.png" alt="uHost"/>
                </router-link>
            </div>
            <nav class="main-nav">
                <ul class="main-nav__items">
                    <li class="main-nav__item">
                        <router-link :to="{name: 'packages', params: {id: 1}}">Packages</router-link>
                    </li>
                    <li class="main-nav__item">
                        <router-link :to="{name: 'customers'}">Customers</router-link>
                    </li>
                    <li class="main-nav__item main-nav__item--cta">
                        <a href="start-hosting/index.html">Start Hosting</a>
                    </li>
                </ul>
            </nav>
        </header>
        <router-view></router-view>
        <footer class="main-footer">
            <nav>
                <ul>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    <li>
                        <a href="#">Terms of Use</a>
                    </li>
                </ul>
            </nav>
        </footer>
    </div>
</template>

<script>
// import HomeView from "@/views/HomeView.vue";
// import Section4 from "@/views/Section4.vue";
export default {
    components: {
        // HomeView
        // Section4
    }
}
</script>

<style scoped>
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
.main-body {
    font-family: sans-serif;
}

.main-header {
    background-color: green;
    position: fixed;
    width: 100%;
    top: 0;
    padding: 8px 16px;
    z-index: 4;
}

.main-header div {
    display: inline-block;
}

.main-header__brand {
    display: inline-block;
    color: #0e4f1f;
    text-decoration: none;
    font-weight: bold;
    font-size: 22px;
}

.main-header__brand img {
    height: 22px;

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
</style>