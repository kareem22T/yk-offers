<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="preferences-body">
        <h1>Your preferences</h1>
        <p>choose your favourite categories to show customized offers just for you</p>
        <div class="options container">
            <div v-for='option in options'>{{ option }}</div>
        </div>
        <router-link class="pre-btn" to="/access-location">
            <span>Just one more step <i class='bx bxs-right-arrow-circle'></i></span>
        </router-link>
    </div>
</template>

<script>
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

export default {
    name: 'PreferencesView',
    data() {
        return {
            options: [
                'GYM',
                'Mall',
                'Parks',
                'Fashion',
                'WorkSpace',
                'Food',
                'Books',
                'Cinema',
                'Market',
                'Coffee shop',
                'Barber',
                'Electronics',
                'Garage',
            ]
        }
    },
    mounted() {
        $(function () {
            $('.options div').each(function () {
                if ($(this).text() == 'Cinema' || $(this).text() == 'Electronics')
                    $(this).addClass('active')
            })
            $('.options div').on('click', function () {
                $(this).toggleClass('active')
            })
        })
    }

}
</script>

<style scoped>
@import '../assets/css/main.css';
@import '../assets/css/preferences.css';
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;800&display=swap');
</style>