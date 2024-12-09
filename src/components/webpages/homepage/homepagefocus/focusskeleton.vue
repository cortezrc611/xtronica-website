<template>
    <section id="focus">
        <div class="focus">
            <div class="focus-container">
                <div class="focus-content flex flex-row justify-center items-center">
                    <skeleton class="focus-img skeleton"></skeleton>
                    <div class="focus-text" ref="focusText">
                        <skeleton class="skeleton"><h1></h1></skeleton>
                        <skeleton class="skeleton"><p></p></skeleton>
                        <skeleton class="skeleton"><p></p></skeleton>
                        <skeleton class="skeleton"><p></p></skeleton>
                        <skeleton class="skeleton"><p></p></skeleton>
                        <skeleton class="skeleton"><p></p></skeleton>
                        <skeleton class="skeleton button"></skeleton>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.focus-container {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Ensures it takes full width */
    height: 100%; /* Ensures it takes full height */
    margin: 0 auto;
}
.focus-content {
    gap: 3%;
    margin-top: 2rem;
}

.focus-img {
    width: 600px;
    max-width: 600px;
    height: 500px;
    border-radius: 20px;
}

/* Common skeleton styles */
.skeleton {
    background-color: #1e2738;
    position: relative;
    overflow: hidden;
    display: block; /* Ensures block-level styling */
    border-radius: 10px;
    margin-top: 1rem;
}

.skeleton::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    animation: shine 1.5s infinite ease-in-out;
}

h1 {
    width: 30vw;
    max-width: 500px;
    height: 50px;
    margin-bottom: 1rem;
}

p {
    width: 50vw;
    max-width: 600px;
    height: 20px;
    margin-bottom: 1rem;
}

.button {
    width: 10vw;
    max-width: 120px;
    height: 40px;
    margin-top: 2rem;
}

@keyframes shine {
    0% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(200%);
    }
}

/* Responsive adjustments */
@media (max-width: 1300px) {
    .focus-img {
        width: 43vw;
        height: 300px;
    }
}

@media (max-width: 768px) {
    .focus-container {
        width: 100%; /* Ensure full-width container */
        padding: 0 1rem; /* Optional padding for spacing */
    }

    .focus-content {
        flex-direction: column;
        padding: 1rem;
        width: 100%; /* Maximize width of content */
    }

    .focus-img {
        width: 100%; /* Full width for the image */
        height: auto; /* Maintain aspect ratio */
        padding: 150px;
    }

    .focus-text {
        width: 100%; /* Full width for text container */
        align-items: center;
        margin-top: 2rem;
    }


    p,
    .button {
        width: 100%; /* Maximize width for skeleton elements */
    }
}
</style>

