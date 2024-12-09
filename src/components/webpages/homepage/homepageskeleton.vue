<template>
    <section id="home">
        <div class="home">
            <div class="home-container">
            <div class="home-content">
                <div class="home-text">
                    <skeleton><h1></h1></skeleton><br>
                    <skeleton><h1></h1></skeleton><br>
                    <skeleton><h1></h1></skeleton><br>
                    <skeleton><p></p></skeleton>
                    <Skeleton><button></button></Skeleton>
            </div>
            <skeleton><img></skeleton>
            </div>
        </div>
        </div>
    </section>
</template>

<style scoped>
.home{
    position: relative;
    background-image: url('/images/homebg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    padding-bottom: 10rem;
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
    padding-top: 7rem;
    gap: 3%;
  
}
.home-text h1 {
    padding: 30px;
    max-width: 500px;
    width: 20vw;
    background-color: rgba(255, 255, 255, 0.293);
    position: relative; /* Necessary for the animation to work */
    overflow: hidden; /* Hide the extra parts of the shine animation */
    border-radius: 20px;
}

.home-text p {
    padding: 20px;
    max-width: 400px;
    width: 20vw;
    background-color: rgba(255, 255, 255, 0.293);
    position: relative; /* Necessary for the animation to work */
    overflow: hidden; /* Hide the extra parts of the shine animation */
    border-radius: 20px;
}

.home-content img {
    width: 30vw;
    max-width: 500px;
    padding: 300px;
    background-color: rgba(255, 255, 255, 0.293);
    position: relative; /* Necessary for the animation to work */
    overflow: hidden; /* Hide the extra parts of the shine animation */
    border-radius: 20px;
}
strong{
    color: aqua;
}
em{
    color: #ffed22;
}
button{
    padding: 20px;
    width: 100px;
    background-color: rgba(255, 255, 255, 0.293);
    border-radius: 10px;
    margin-top: 1rem;
    position: relative; /* Necessary for the animation to work */
    overflow: hidden; /* Hide the extra parts of the shine animation */
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

/* Apply the shine effect to the elements */
.home-text h1::after,
.home-text p::after,
.home-content img::after,
.home-text button::after {
    content: ''; /* Create an empty element to apply the effect */
    position: absolute;
    top: 0;
    left: -100%; /* Start the shine off-screen */
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent); /* Shiny effect */
    animation: shine 1.5s infinite ease-in-out; /* Apply the animation */
}
@media (max-width: 900px) {
    .home-text h1 {

    width: 30vw;
    }

.home-text p {
  
    width: 30vw;

}
.home-text h1{
    padding: 10px;
    width: 300px;
}
.home-text p{
    padding: 10px;
}
.home-content img {
    padding: 200px;
   
}
}

@media (max-width: 768px) {
    .home-content{
        flex-direction: column-reverse;
        margin-top: 2rem
    }
    .home-content img {
    padding: 150px;
   
}
.home-text{
    margin-top: 1rem;
}
}
</style>
  