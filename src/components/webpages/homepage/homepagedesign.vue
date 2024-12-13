<script setup lang="ts">
import Focusdesign from './homepagefocus/focusdesign.vue';
import servicesdesign from './homepageservices/servicesdesign.vue';
import Technicalsupportdesign from './technicalsupport/technicalsupportdesign.vue';



</script>

<template>
    <section id="home">
        <div class="home">
            <div class="home-container">
            <div class="home-content">
                <div class="home-text">
             <h1 class="font-bold">We don't talk about<br> price, <strong>we talk about value.</strong></h1>
             <p><em>xperience the xtraordinaire</em></p>
             <h6 class="font-bold">Navigating Complexity, Simplifying Solutions</h6>
             <h6 class="font-light">Technical Support | IT infrastructure | Project Management | Consulting | Integration | Customer and Business Solutions</h6>
             <button><a href="/">Contact Us</a></button>
            </div>
             <img src="/images/xtronica.png">
            </div>
        </div>
        </div>
    </section>
    <servicesdesign />
    <Focusdesign />
    <Technicalsupportdesign />
</template>

<style scoped>
.home{
    position: relative;
    background-image: url('/images/homebg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    padding-bottom: 5rem;
    display: flex; /* Add flexbox to the parent */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
}

.home-container{
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Ensures it takes full width */
    height: 100%; /* Ensures it takes full height */
}
.home-content{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 9rem;
    gap: 3%;
  
}
.home-text h1 {
    font-size: clamp(1.5rem, 3vw, 3rem); /* Minimum size, preferred size, maximum size */
}
.home-text p {
    font-size: clamp(1rem, 2vw, 2rem); /* Minimum size, preferred size, maximum size */
}
.home-text h6 {
    font-size: clamp(0.5rem, 1vw, 1rem); /* Minimum size, preferred size, maximum size */
}
.home-content img {
    width: 30vw;
    max-width: 500px;
    animation: float 3s ease-in-out infinite;
}
strong{
    color: #05d1ff;
}
em{
    color: #F9C247;
}
button{
    margin-top: 1rem;
    background-color: #0FA3E0;
    padding: clamp(1rem, 1vw, 2rem);
    font-size: clamp(1rem, 1vw, 2rem); /* Minimum size, preferred size, maximum size */
    border-radius: 5px;
}
button:hover{
    background-color: #F9C247;
    color: #080808;
    transition: 0.3s;
}
@keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px); /* Moves the image up */
    }
    100% {
        transform: translateY(0); /* Moves it back to the original position */
    }
}
@media (max-width: 1030px) {
    button{
    margin-top: 1rem;
    background-color: #0FA3E0;
    padding: clamp(0.8rem, 0.5vw, 1.5rem);
    font-size: clamp(0.5, 0.5vw, 1.5rem); /* Minimum size, preferred size, maximum size */
    border-radius: 5px;
}
}
@media (max-width: 768px) {
    .home-content{
        flex-direction: column-reverse;
        padding: 1.5rem;
        margin-top: 8rem;
    }
    .home-content img {
    width: 100%;
    min-width: 300px;
    animation: float 3s ease-in-out infinite;
}

}
</style>