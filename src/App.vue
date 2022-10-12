<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/welcome-about">welcome</router-link>
  </nav> -->
  <router-view v-slot="{ Component, route }">
    <transition
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass"
      mode="out-in"
    >
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
<script>
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

export default {
  mounted() {
    $(function () {
      $('.body .swiper').css('backfaceVisibility', 'visible')
    })
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.animate__animated.animate__fadeIn {
  --animate-duration: .45s;
}
.animate__animated.animate__fadeOut {
  --animate-duration: .45s;
}
</style>
