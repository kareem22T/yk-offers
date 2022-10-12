<template>
    <div class="sign-body">
        <form action="">
            <div class="switch-sign">
                <router-link to="/sign-up" class="active">sign up</router-link>
                |
                <router-link to="/sign-in">sign in</router-link>
            </div>
            <a href="#" id="sign-google-btn"><i class='bx bxl-google'></i> Sign up with google</a>
            or
            <input type="email" placeholder="Email">
            <input type="text" placeholder="User name">
            <input type="password" placeholder="Password">
            <button>register</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'signupView'
}
</script>

<style scoped>
@import '../assets/css/main.css';
@import '../assets/css/sign.css';
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;800&display=swap');
</style>