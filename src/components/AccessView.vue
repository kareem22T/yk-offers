<template>
    <div class="access-body">
        <div class="contanier">
            <h1>Where do you live?</h1>
            <p class="mb-5">
                we’re asking to show customized offers just for you and to be awarded about any new place around you
            </p>
            <div class="select-location-options">
                <div class="manual">
                    <div class="img">
                        <img src="../assets/images/manual-access.svg" alt="location access">
                    </div>
                    <form action="">
                        <button @click.prevent="">Country <i class='bx bx-chevron-down'></i></button>
                        <button @click.prevent="">City <i class='bx bx-chevron-down'></i></button>
                        <button @click.prevent="">Area <i class='bx bx-chevron-down'></i></button>
                    </form>
                </div>
                <div class="line"></div>
                <div class="automatic">
                    <p>
                        or <br>
                        to make it easier <br>
                        and more accurate
                    </p>
                    <a @click.prevent class="pre-btn" to="/">
                        <span><i class="fa-solid fa-location-dot"></i> Access location</span>
                    </a>
                    <p class="mt-2">
                        Don’t worry
                        <br>
                        all your data is secured
                    </p>
                </div>
            </div>

        </div>
            <div class="pre-btn-parent">
                <router-link class="pre-btn" to="/preferences">
                    <span><i class='bx bxs-left-arrow-circle'></i> Back to preferences</span>
                </router-link>
                <router-link class="pre-btn" to="/home">
                    <span><i class='bx bxs-flag-checkered'></i> Fineshed</span>
                </router-link>
            </div>
    </div>
</template>

<script>
export default {
    name: 'AccessView',
}
</script>

<style scoped>
@import '../assets/css/main.css';
@import '../assets/css/access.css';
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;800&display=swap');
</style>