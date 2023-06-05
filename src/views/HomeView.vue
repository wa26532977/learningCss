<template>
    <main>
        <div class="div-body">
            <header class="main-header">
                <div>
                    <a href="index.html" class="main-header__brand">
                        uHost
                    </a>
                </div>
                <nav class="main-nav">
                    <ul class="main-nav__items">
                        <li class="main-nav__item">
                            <router-link :to="{name: 'packages', params: {id: 1}}">Packages</router-link>
                        </li>
                        <li class="main-nav__item">
                            <a href="customers/index.html">Customers</a>
                        </li>
                        <li class="main-nav__item main-nav__item--cta">
                            <a href="start-hosting/index.html">Start Hosting</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section id="product-overview">
                <h1>Get the freedom you deserve</h1>
                <h2>trying to test h2</h2>
            </section>
            <section id="plan">
                <h1 class="section-title">Choose Your Plan</h1>
                <div class="plan__list">
                    <article class="plan">
                        <h1 class="plan__title">FREE</h1>
                        <h2 class="plan__price">$0/month</h2>
                        <h3>For hobby projects or small teams.</h3>
                        <ul class="plan_ul">
                            <li>1 Workspace</li>
                            <li>Unlimited Traffic</li>
                            <li>10GB Storage</li>
                            <li>Basic Support</li>
                        </ul>
                        <div>
                            <router-link :to="{name: 'packages', params: {id: 1}}" class="plan__button">CHOOSE PLAN</router-link>
                        </div>
                    </article>
                    <article class="plan plan--highlight">
                        <h1 class="plan__annotation">RECOMMENDED</h1>
                        <h1 class="plan__title">PLUS</h1>
                        <h2 class="plan__price">$29/month</h2>
                        <h3>For ambitious projects.</h3>
                        <ul class="plan_ul">
                            <li>5 Workspaces</li>
                            <li>Unlimited Traffic</li>
                            <li>100GB Storage</li>
                            <li>Plus Support</li>
                        </ul>
                        <div>
                            <button class="plan__button">CHOOSE PLAN</button>
                        </div>
                    </article>
                    <article class="plan">
                        <h1 class="plan__title">PREMIUM</h1>
                        <h2 class="plan__price">$99/month</h2>
                        <h3>Your enterprise solution.</h3>
                        <ul class="plan_ul">
                            <li>10 Workspaces</li>
                            <li>Unlimited Traffic</li>
                            <li>Unlimited Storage</li>
                            <li>Priority Support</li>
                        </ul>
                        <div>
                            <button class="plan__button">CHOOSE PLAN</button>
                        </div>
                    </article>
                </div>
            </section>
            <section id="key-features">
                <h1 class="section-title">Many Good Reasons to Stick Around</h1>
                <ul class="key-features__ul">
                    <li>
                        <div class="key-features__image">

                        </div>
                        <p>3,857,000 Trusting Customers</p>
                    </li>
                    <li>
                        <div class="key-features__image">

                        </div>
                        <p>99.999% Uptime Guarantee</p>
                    </li>
                    <li>
                        <div class="key-features__image">

                        </div>
                        <p>Lightning Fast CDN</p>
                    </li>
                </ul>
            </section>
        </div>
    </main>
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
</template>

<script>

export default {
    name: "HomeView"
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

* {
    box-sizing: border-box;
}

/* Specificity order: inline > #id > class,atribute > tag elecment selector */
.div-body {
}

#key-features {
    background-color: #ff1b68;
    margin: 80px 0 0 0;
    padding: 20px;
}

#key-features .section-title {
    color:white;
    margin: 32px;
}

.key-features__ul {
    list-style: none;
    display: inline-block;
    width: 100%;
    margin: 0;
    text-align: center;
}

.key-features__ul li {
    display: inline-block;
    width: 30%;
    vertical-align: top;
}

.key-features__ul p {
    color: white;
    font-weight: bold;
    margin: 0;
    text-align: center;
    font-size: 20px;
}

.key-features__image {
    background-color: #ffcede;
    width: 128px;
    height: 128px;
    border: 2px solid darkgray;
    border-radius: 50%;
    margin: 10px auto;
}



#product-overview {
    background: url("../assets/new-york.jpg");
    width: 100%;
    height: 528px;
    padding: 10px;
}

#plan {
    background: white;
}

.plan__list {
    width: 80%;
    margin: auto;
    text-align: center;
}

.section-title {
    color: #2ddf5c;
    text-align: center;
}

/* The class overwrite the tag selector */
#product-overview h1 {
    color: white;
    font-family: 'Anton', sans-serif;
}

.plan {
    background: lightgreen;
    text-align: center;
    padding: 16px;
    margin: 8px;
    display: inline-block;
    width: 30%;
    vertical-align: middle;

}

.plan--highlight {
    background: #19b84c;
    color: white;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
}

.plan__annotation {
    background-color: white;
    color: green;
    padding: 8px 8px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 225, 0.5);
}

.plan__title {
    color: #0e4f1f;
}

.plan__price {
    color: grey;
}

.plan--highlight .plan__price {
    color: blue;
}

.plan--highlight .plan__title {
    color: white;
}

.plan_ul {
    list-style: none;
    margin: 0 0 20px 0;
    padding: 0;
}

.plan_ul > li {
    margin: 7px 0;
}

.plan__button {
    background: #0e4f1f;
    color: white;
    border-radius: 5px;
    font: inherit;
    padding: 4px;
    font-weight: bold;
    cursor: pointer;
}

.plan__button:hover,
.plan__button:active {
    background-color: white;
    color: black;
}

.plan__button:focus {
    outline: #030303;
}


/* inheritance has very low specificity */
.main-header {
    background-color: green;
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


</style>