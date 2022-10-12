<template>
    <div class="body">
        <div class="container w-container">
            <h1 class="head">%FF</h1>
            <swiper :slidesPerView="1" :spaceBetween="30" :pagination="{
                clickable: true,
            }" :breakpoints="{
                        '575': {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        '992': {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }" :modules="modules" class="about-cards-parent mySwiper">
                <swiper-slide class="about-card">
                    <img src="../assets/images/about-1.svg" alt="">
                    <p>
                        Find Attractive offers for all your favorite category
                    </p>
                </swiper-slide>
                <swiper-slide class="about-card">
                    <img src="../assets/images/about-2.svg" alt="">
                    <p>
                        Enjoy every
                        <br>
                        new place
                    </p>
                </swiper-slide>
                <swiper-slide class="about-card">
                    <img src="../assets/images/about-3.svg" alt="">
                    <p>All in one site!</p>
                </swiper-slide>
            </swiper>
            <router-link to="/preferences" class="router-btn">Let’s start fun</router-link>
        </div>
    </div>
</template>

<script>
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
    name: 'WelcomeAbout',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    }
};
</script>

<style scoped>
@import '../assets/css/main.css';
@import '../assets/css/welcome.css';
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;800&display=swap');
</style>