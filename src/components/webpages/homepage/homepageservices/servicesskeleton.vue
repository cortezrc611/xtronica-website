<template>
    <section id="services">
      <div class="services">
        <div class="services-container flex flex-col justify-center" ref="servicesContainer">
          <div class="services-header skeleton-box"></div>
          <div class="services-content">
            <div
              class="services-tiles skeleton-box"
              v-for="(service, index) in services"
              :key="index"
              ref="serviceTiles"
            ></div>
            <div
              v-if="showLastPart"
              class="service-tiles-lastpart skeleton-box"
            ></div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: new Array(4).fill({}), // Simulating data for skeleton structure
        showLastPart: false // State to control visibility
      };
    },
    mounted() {
      this.observeComponent(); // Start observing when the component is mounted
    },
    methods: {
      observeComponent() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-up-visible");
            } else {
              entry.target.classList.remove("fade-up-visible");
            }
          });
        });
        // Observe the entire service container
        observer.observe(this.$refs.servicesContainer);
        // Observe each service tile
        this.$refs.serviceTiles.forEach((tile) => observer.observe(tile));
      }
    }
  };
  </script>
  
  <style scoped>
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
  
  .skeleton-box {
    background-color: rgba(255, 255, 255, 0.293);
    position: relative;
    border-radius: 10px;
    height: 100px; /* Placeholder height, adjust as needed */
    margin-bottom: 1rem;
    overflow: hidden;
    margin-top: 2rem;
  }
  
  .skeleton-box::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    animation: shine 1.5s infinite ease-in-out;
  }
  
  .services-container {
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  .services-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .services-header {
    height: 50px;
    max-width: 500px;
    width: 30vw;
    background-color: #1e2738;
  }
  
  .services-tiles {
    flex: 1 1 calc(50% - 1rem);
    display: flex;
    align-items: center;
    background-color: #1e2738;
    border-radius: 10px;
    padding-right: 15px;
    width: 30vw;
    height: 200px;
    margin: 0;
  }
  
  .service-tiles-lastpart {
    flex: 1 1 calc(50% - 1rem);
    background-color: #1e2738;
    margin: 0 auto;
    padding-right: 15px;
  }
  
  .fade-up {
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }
  
  .fade-up-visible {
    opacity: 1;
  }

  @media (max-width: 1300px) {
    .services-content{
      padding: 1rem;
    }
    .services-tiles{
      width: 23vw;
    }
  }

  @media (max-width: 768px) {
  .services-content {
    flex-direction: column; /* Stack items vertically */
    gap: 1rem; /* Space between stacked items */
    width: 100%;
  }

  .services-tiles {
    width: 100%; /* Make tiles take the full width of the container */
    flex: 1 1 auto; /* Adjust flex behavior */
    height: 100px;
  }

  .service-tiles-lastpart {
    width: 100%; /* Ensure the last part matches the full width */
  }
  .services-header{
    width: 50vw;
  }
}

  </style>
  