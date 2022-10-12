<template>
    <div class="main-body">
        <div class="container">
            <nav>
                <h1>%FF</h1>
                <ul>
                    <li class="active">Offers</li>
                    <li>around you</li>
                </ul>
                <a href="#"><i class="fa-sharp fa-solid fa-bars"></i></a>
            </nav>
            <router-link to="/sign-up" class="alert">
                <i class='bx bxs-bell-ring'></i> All next content is random, to show your own customized offers <span>Sign in / Sign up</span> 
            </router-link>

            <div class="recent-offers mb-5">
                <div class="head">
                    <h1>Offers of the day!</h1>
                    <a @click.prevent href="">View all</a>
                </div>
                <swiper 
                :navigation="true"
                :slidesPerView="1" 
                :spaceBetween="15" 
                :pagination="{
                    clickable: true,
                }" 
                :breakpoints="{
                    '575': {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    '992': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }" 
                :modules="modules" 
                class="mySwiper">
                    <swiper-slide>
                        <div>

                            <div class="img">
                                <img src="../assets/images/latest-offers-1.jpg" alt="">
                            </div>
                            <div>
                                <p>Pizza master</p>
                                <h4>
                                    Buy one pizza and get 2 start from 20$
                                </h4>
                            </div>

                        </div>

                        <div class="btns">
                            <button>claim offer</button>
                            <button><i class="fa-solid fa-heart-circle-plus"></i> add to wishlist</button>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div>

                            <div class="img">
                                <img src="../assets/images/latest-offers-2.jpg" alt="">
                            </div>
                            <div>
                                <p>Nike</p>
                                <h4>
                                    New collection - 30% off start from 50$
                                </h4>
                            </div>

                        </div>

                        <div class="btns">
                            <button>claim offer</button>
                            <button><i class="fa-solid fa-heart-circle-plus"></i> add to wishlist</button>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div>

                            <div class="img">
                                <img src="../assets/images/latest-offers-3.jpg" alt="">
                            </div>
                            <div>
                                <p>Women GYM</p>
                                <h4>
                                    Get 20% off for the monthly subscription
                                </h4>
                            </div>

                        </div>

                        <div class="btns">
                            <button>claim offer</button>
                            <button><i class="fa-solid fa-heart-circle-plus"></i> add to wishlist</button>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div>
                    
                            <div class="img">
                                <img src="../assets/images/latest-offers-1.jpg" alt="">
                            </div>
                            <div>
                                <p>Pizza master</p>
                                <h4>
                                    Buy one pizza and get 2 start from 20$
                                </h4>
                            </div>
                    
                        </div>
                    
                        <div class="btns">
                            <button>claim offer</button>
                            <button><i class="fa-solid fa-heart-circle-plus"></i> add to wishlist</button>
                        </div>
                    </swiper-slide>

                </swiper>

            </div>

            <div class="for-you-offers mt-5">
                <div class="head">
                    <h1>Just for you</h1>
                    <a @click.prevent href="">View all</a>
                </div>
                <div class="your-pref">
                    <div>
                        <p>
                            Your
                            <br>
                            Preferences
                        </p>
                        <div class="option active">
                            Electronics
                        </div>
                        <div class="option active">
                            Cinema
                        </div>
                        <div class="option">
                            Books
                        </div>
                        <div class="option">
                            Parks
                        </div>
                    </div>
                    <div class="has-after">
                        <button class="more btn-ma">
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle custome"></i>
                            <i class="fa-solid fa-circle"></i> More
                        </button>
                        <button class="add btn-ma">
                            <i class="fa-solid fa-plus"></i>
                            <i class="fa-solid fa-plus"></i>
                            <i class="fa-solid fa-plus"></i> Add
                        </button>
                    </div>
                </div>
                <swiper 
                :navigation="true"
                :slidesPerView="1" 
                :spaceBetween="30" 
                :pagination="{
                    clickable: true,
                }" 
                :breakpoints="{
                    '575': {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },

                    '992': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    '1199.98': {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }" 
                :modules="modules" 
                class="mySwiper">
                    <swiper-slide>
                        <div>

                            <div class="img">
                                <img src="../assets/images/for-you-1.jpg" alt="">
                            </div>
                            <div>
                                <p>Apple</p>
                                <h4>
                                    MacBook Air M1
                                    <br>
                                    + AirPods Pro
                                </h4>
                            </div>

                        </div>

                        <div class="btns">
                            <button>claim offer</button>
                            <button><i class="fa-solid fa-pen-to-square"></i></button>
                            <button><i class="fa-solid fa-heart-circle-plus"></i></button>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div>

                            <div class="img">
                                <img src="../assets/images/for-you-2.jpg" alt="">
                            </div>
                            <div>
                                <p>Ultra Games</p>
                                <h4>
                                    Gaming mouse
                                    <br>
                                    + Mouse pad
                                </h4>
                            </div>

                        </div>

                        <div class="btns">
                            <button>claim offer</button>
                            <button><i class="fa-solid fa-pen-to-square"></i></button>
                            <button><i class="fa-solid fa-heart-circle-plus"></i></button>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div>

                            <div class="img">
                                <img src="../assets/images/for-you-3.jpg" alt="">
                            </div>
                            <div>
                                <p>Netflix</p>
                                <h4>
                                    2 Months free
                                    <br>
                                    + Allowing 3 users
                                </h4>
                            </div>

                        </div>

                        <div class="btns">
                            <button>claim offer</button>
                            <button><i class="fa-solid fa-pen-to-square"></i></button>
                            <button><i class="fa-solid fa-heart-circle-plus"></i></button>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div>

                            <div class="img">
                                <img src="../assets/images/for-you-4.jpg" alt="">
                            </div>
                            <div>
                                <p>Disney+</p>
                                <h4>
                                    Cartoon ticket
                                    <br>
                                    + Free 2 tickets
                                </h4>
                            </div>

                        </div>

                        <div class="btns">
                            <button>claim offer</button>
                            <button><i class="fa-solid fa-pen-to-square"></i></button>
                            <button><i class="fa-solid fa-heart-circle-plus"></i></button>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                    
                            <div class="img">
                                <img src="../assets/images/for-you-1.jpg" alt="">
                            </div>
                            <div>
                                <p>Apple</p>
                                <h4>
                                    MacBook Air M1
                                    <br>
                                    + AirPods Pro
                                </h4>
                            </div>
                    
                        </div>
                    
                        <div class="btns">
                            <button>claim offer</button>
                            <button><i class="fa-solid fa-pen-to-square"></i></button>
                            <button><i class="fa-solid fa-heart-circle-plus"></i></button>
                        </div>
                    </swiper-slide>

                </swiper>

            </div>

            <div class="new-stores mb-5">
                <div class="head">
                    <h1>New store branch details . <span>New York</span></h1>
                    <a @click.prevent href="">View all</a>
                </div>
                <swiper :navigation="true" :slidesPerView="1" :spaceBetween="30" :pagination="{
                    clickable: true,
                }" :breakpoints="{
                    '575': {
                                slidesPerView: 2,
                                spaceBetween: 15,
                    },
                
                    '992': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }" :modules="modules" class="mySwiper">

                    <swiper-slide>
                        <div>
            
                            <div class="img">
                                <img src="../assets/images/new-store-1.jpg" alt="">
                            </div>
                            <div>
                                <p>MESSINA</p>
                                <h4>
                                    ice cream car
                                </h4>
                            </div>
            
                        </div>
            
                        <div class="btns">
                            <button><i class='bx bxs-direction-right'></i> Get directions</button>
                            <button><i class="fa-solid fa-circle-user"></i></button>
                            <button><i class="fa-solid fa-heart-circle-plus"></i></button>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div>
            
                            <div class="img">
                                <img src="../assets/images/new-store-2.jpg" alt="">
                            </div>
                            <div>
                                <p>Champion</p>
                                <h4>
                                    Sportswear
                                </h4>
                            </div>
            
                        </div>
            
                        <div class="btns">
                            <button><i class='bx bxs-direction-right'></i> Get directions</button>
                            <button><i class="fa-solid fa-circle-user"></i></button>
                            <button><i class="fa-solid fa-heart-circle-plus"></i></button>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div>
            
                            <div class="img">
                                <img src="../assets/images/new-store-3.jpg" alt="">
                            </div>
                            <div>
                                <p>APPLE</p>
                                <h4>
                                    Electronics
                                </h4>
                            </div>
            
                        </div>
            
                        <div class="btns">
                            <button><i class='bx bxs-direction-right'></i> Get directions</button>
                            <button><i class="fa-solid fa-circle-user"></i></button>
                            <button><i class="fa-solid fa-heart-circle-plus"></i></button>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div>
            
                            <div class="img">
                                <img src="../assets/images/new-store-1.jpg" alt="">
                            </div>
                            <div>
                                <p>MESSINA</p>
                                <h4>
                                    ice cream car
                                </h4>
                            </div>
            
                        </div>
            
                        <div class="btns">
                            <button><i class='bx bxs-direction-right'></i> Get directions</button>
                            <button><i class="fa-solid fa-circle-user"></i></button>
                            <button><i class="fa-solid fa-heart-circle-plus"></i></button>
                        </div>
                    </swiper-slide>
            
                </swiper>
            
            </div>

            <div class="about">
                <div class="form">
                    <h1>Search new stores around you</h1>
                    <button><i class='bx bxs-map-pin'></i> Area</button>
                    <button><i class='bx bxs-category-alt' ></i> Category</button>
                </div>
                <div class="img">
                    <img src="../assets/images/map.png" alt="">
                </div>
            </div>
        </div>
        <footer>
            <div class="container">

                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Rate the idea</li>
                    <li>Suggest improves</li>
                </ul>
                <ul>
                    <li>
                        <a href="../assets/android-app/yk-offers.apk" download rel="noopener noreferrer" target="_blank">
                            <i class="fa-brands fa-google-play"></i>
                        </a>
                    </li>
                    <li><i class="fa-brands fa-apple" style="opacity: .8;"></i></li>
                    <li><i class="fa-brands fa-app-store-ios" style="opacity: .8;"></i></li>
                </ul>

            </div>
        </footer>
        <div class="copyRight">
            All rights reserved - YK @2022
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
import "swiper/css/navigation";

import { Pagination } from "swiper";

export default {
    name: 'HomeView',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
    mounted() {
        $(function () {
            $('.swiper-button-next').on('click', function () {
                $(this).siblings('.swiper-pagination').find('.swiper-pagination-bullet-active').next().trigger('click')
            })
            $('.swiper-button-prev').on('click', function () {
                $(this).siblings('.swiper-pagination').find('.swiper-pagination-bullet-active').prev().trigger('click')
            })
        })
    }
};
</script>

<style scoped>
@import '../assets/css/main.css';
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;800&display=swap');
</style>