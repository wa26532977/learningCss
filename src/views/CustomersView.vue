<template>
        <main>
        <div>
            <div class="testimonial" id="customer-1">
                <div class="testimonial__image-container">
                    <img src="../assets/customer-1.jpg" alt="Mike Statham - Customer" class="testimonial__image">
                </div>
                <div class="testimonial__info">
                    <h1 class="testimonial__name">Mike Statham</h1>
                    <h2 class="testimonial__subtitle">Founder of
                        <a href="tech-analysis.com">tech-analysis.com</a>
                    </h2>
                    <p class="testimonial__text">uHost helped me realize my project with a highly constrained budget in like no time.</p>
                </div>
            </div>
            <div class="testimonial" id="customer-2">

                <div class="testimonial__info">
                    <h1 class="testimonial__name">John Mellow</h1>
                    <h2 class="testimonial__subtitle">Hosts his private videos on uHost.
                    </h2>
                    <p class="testimonial__text">I worked as a blogger and always looked for an integrated hosting and file storage solution. I found
                        it in uHost!
                    </p>
                </div>
                <div class="testimonial__image-container">
                    <img src="../assets/customer-2.jpg" alt="John Mellow - Customer" class="testimonial__image">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "CustomersView"
}
</script>

<style scoped>
.customers {
    margin: 43px 0 0 0;
}

.testimonial {
    font-size: 20px;
    margin: 48px 0;
}

.testimonial__list {
    width: 80%;
    margin: auto;
}

.testimonial:first-of-type {
    margin-top: 42px;
}

.testimonial__image-container {
    width: 70%;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
}

.testimonial__image {
    width: 100%;
    vertical-align: top;
}

.testimonial__info {
    text-align: right;
    padding: 14px;
    display: inline-block;
    vertical-align: middle;
    width: 25%;
}

#customer-2.testimonial {
    text-align: right;
}

#customer-2 .testimonial__info {
    text-align: left;
}

.testimonial__name {
    margin: 3px;
    color: #ff5454;
}

.testimonial__subtitle {
    margin: 0;
    font-size: 18px;
    color: #ccc;
}

.testimonial__subtitle a {
    color: inherit;
    text-decoration: none;
}

.testimonial__subtitle a:hover,
.testimonial__subtitle a:active {
    color: #7a7a7a;
}

.testimonial__text {
    margin: 3px;
}


</style>