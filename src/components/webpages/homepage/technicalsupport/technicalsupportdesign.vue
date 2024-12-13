<template>
    <section id="technical-support">
    <div class="technical-support">
        <div class="technical-support-content flex flex-row justify-center items-center">
            <div class="technical-support-text">
                <h1 class="font-bold">Technical Support</h1>
                <div class="technical-support-text-content flex flex-row gap-3">
                    <img src="/images/server-maintenance.png" class="server-maintenance" />
                    <div class="technical-context">
                <h2 class="flex items-center font-bold gap-6"> Server Maintenance</h2>
                <p>We value our customer's comfort. We provide one of the most comprehensive and cost effective service and Maintenance
                    packages available. Our fantastic professional technical operation is all about improving your reputation and easing
                    your tension.
                </p>
            </div>
        </div>
        <div class="technical-support-text-content flex flex-row gap-3">
                    <img src="/images/in-house.png" class="server-maintenance" />
                    <div class="technical-context">
                <h2 class="flex items-center font-bold gap-6"> In house Support</h2>
                <p>We value our customer's comfort. We provide one of the most comprehensive and cost effective service and Maintenance
                    packages available. Our fantastic professional technical operation is all about improving your reputation and easing
                    your tension.
                </p>
            </div>
        </div>
        <div class="technical-support-text-content flex flex-row gap-3">
                    <img src="/images/24-hours.png" class="server-maintenance" />
                    <div class="technical-context">
                <h2 class="flex items-center font-bold gap-6"> In house Support</h2>
                <p>We value our customer's comfort. We provide one of the most comprehensive and cost effective service and Maintenance
                    packages available. Our fantastic professional technical operation is all about improving your reputation and easing
                    your tension.
                </p>
            </div>
        </div>
        </div>
        <div class="technical-support-images flex flex-row">
            <img class="support-2" src="/images/support2.png" >
            <img class="support-1" src="/images/couple-support-with-bg.png" >
        </div>
    </div>
    </div>
    </section>
    </template>
    
    <style scoped>
    .technical-support{
        margin-top: 3rem;
        background: url('/images/pattern_img.png');
        padding-bottom: 2rem;
    }
    
    .technical-support-content{
        gap: 2rem;
        padding: 2rem;
        background-color: rgb(43, 52, 66);
        border-radius: 10px;
        max-width: 1200px;
        width: 100%; /* Ensures it takes full width */
        height: auto; /* Allows content to determine height */
        margin: 0 auto;
        position: relative;
        z-index: 1;
    }
    
 
    
    .technical-support-content h1{
        font-size: clamp(1.5rem, 3vw, 3rem); /* Minimum size, preferred size, maximum size */
    }
    .technical-support-text-content{
        margin-top: 2rem;
    }
    .technical-support-text-content h2{
        font-size: clamp(1rem, 1.5vw, 1.5rem); /* Minimum size, preferred size, maximum size */
    }
    .technical-support-text-content p{
        font-size: clamp(0.5rem, 0.5vw, 1rem); /* Minimum size, preferred size, maximum size */
    }
    .technical-support-images{
        align-items: end;
        gap: 1rem;
    }
    .support-2{
        max-width: 250px;
        max-height: 400px;
       
    }
    .support-1{
        max-width: 350px;
        max-height: 450px;
       height: 450px;
    }
    .server-maintenance{
        max-width: 80px;
    }

    @media (max-width: 1300px) {
        .technical-support-content{
            width: 90vw;
        }
        .support-2{
     
        width: 200px;
       
    }
    .support-1{
       width: 250px;
       height: 400px;
    }
    }
        @media (max-width: 1030px) {
        .technical-support-content{
            width: 80vw;
        }
        .support-2{
     
        width: 180px;
       
    }
    .support-1{
       width: 200px;
       height: 300px;
    }
}
@media (max-width: 1030px) {
        .technical-support-content{
           flex-direction: column;
           width: 90vw;
        }
        .technical-support-content h1{
            text-align: center;
        }
}
@media (max-width: 500px) {
    .support-2{
     
     width: 140px;
    
 }
 .support-1{
    width: 130px;
    height: 230px;
 }
       
}
    </style>