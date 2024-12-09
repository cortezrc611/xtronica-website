<template>
    <section id="focus">
        <div class="focus">
            <div class="focus-container">
                <div class="focus-content flex flex-row justify-center items-center">
                    <img src="/images/focus.png" alt="focus">
                    <div class="focus-text" ref="focusText">
                        <h1 class="font-bold slide-left">Our Focus</h1>
                        <p class="slide-left">
                            Our main focus is to give you the best solution. We provide optimistic outcomes and deliver results that will help achieving business efficiency and transparency by managing key risk deductions.
                        </p>
                        <p class="slide-left">
                            We believe there is a better way to do it that is both profitable and beneficial to customers. There is a widespread misconception that in order to build a successful business, you must be ruthless. That is why we have created an ecosystem of dedicated professionals because we believe that businesses can thrive with a soul and grow alongside their customers.
                        </p>

                        <button>
                            <a href="/">Read More</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    mounted() {
        this.animateOnScroll(); // Initialize animation when component is mounted
    },
    methods: {
        animateOnScroll() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('slide-visible');
                    }
                });
            });

            // Observe each h1 and p inside focus-text
            const elements = this.$refs.focusText.querySelectorAll('.slide-left');
            elements.forEach((el) => observer.observe(el));
        },
    },
};
</script>


<style scoped>
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
.focus-container{
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Ensures it takes full width */
    height: 100%; /* Ensures it takes full height */
    margin: 0 auto;
}

.focus-content{
    gap: 4%;
    margin: 0 auto;
}

.focus-content img{
    max-width: 500px;
    width: 30vw;
    
    border-bottom: 1px solid rgb(76, 138, 208);
}
.focus-text{
    border-left: 1px solid rgb(76, 138, 208) ;
    padding-left: 2rem;
}
.focus-text h1{
    font-size: clamp(1.5rem, 3vw, 3rem); /* Minimum size, preferred size, maximum size */
}

.focus-text p{
    font-size: clamp(1.2rem, 1.7vw, 1.2rem); /* Minimum size, preferred size, maximum size */
    margin-top: 0.5rem;
}
/* Initial state for slide-left animation */
.slide-left {
    transform: translateX(-100px); /* Start off-screen */
    opacity: 0; /* Initially hidden */
    transition: transform 0.6s ease-out, opacity 0.6s ease-out;
}

/* Visible state for slide-left animation */
.slide-visible {
    transform: translateX(0); /* Slide into position */
    opacity: 1; /* Fully visible */
}
@media (max-width: 1300px) {
    .focus-content{
    padding: 2rem;
    padding-top: 0;
    }
    .focus-text h1{
    font-size: clamp(2rem, 3.5vw, 3.5rem); /* Minimum size, preferred size, maximum size */
}
.focus-text p{
    font-size: clamp(1rem, 1.7vw, 1rem); /* Minimum size, preferred size, maximum size */
    
}

}
@media (max-width: 1030px) {
.focus-text p{
    font-size: clamp(0.8rem, 1.5vw, 0.8rem); /* Minimum size, preferred size, maximum size */
}
button{
    padding: clamp(0.8rem, 0.5vw, 1.5rem);
    font-size: clamp(0.5, 0.5vw, 1.5rem); /* Minimum size, preferred size, maximum size */
}
}

@media (max-width: 768px) {
    .focus-content{
        flex-direction: column;
        margin-top: 1rem;
    }
    .focus-text{
        border: none;
        padding: 0;
    }
    .focus-content img{
        width: 100%;
    }
    .focus-text h1{
        text-align: center;
    }
    .focus-text p{
    font-size: clamp(0.8rem, 1.5vw, 0.8rem); /* Minimum size, preferred size, maximum size */
    padding-right: 0;
}
}
</style>