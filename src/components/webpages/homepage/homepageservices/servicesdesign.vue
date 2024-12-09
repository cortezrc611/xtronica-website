<template>
    <section id="services">
      <div class="services">
        <div class="services-container flex flex-col justify-center" ref="servicesContainer">
          <div class="services-header">
            <h1 class="font-bold text-center">Our Services</h1>
          </div>
          <div class="services-content">
            <div
              class="services-tiles"
              v-for="(service, index) in services"
              :key="index"
              ref="serviceTiles"
            >
              <img :src="`/images/${service.image}`" :alt="service.title" class="services-image" loading="lazy"/>
              <div class="services-text">
                <h2 class="font-bold">{{ service.title }}</h2>
                <p>{{ service.description }}</p>
              </div>
            </div>
            <div
              v-if="showLastPart"
              class="service-tiles-lastpart flex flex-row justify-center items-center"
            >
              <img src="/images/System Integration.png" loading="lazy"/>
              <div class="services-text-lastpart">
                <h2 class="font-bold">System Integration</h2>
                <p>
                  We provide system and data integration Solutions to improve the
                  system-user experience. We do this in an agile manner, delivering
                  value to operations quickly.
                </p>
              </div>
            </div>

            <div
              class="service-tiles-lastpart-mobile flex flex-row justify-center items-center"
            >
              <img src="/images/System Integration.png" loading="lazy"/>
              <div class="services-text-lastpart">
                <h2 class="font-bold">System Integration</h2>
                <p>
                  We provide system and data integration Solutions to improve the
                  system-user experience. We do this in an agile manner, delivering
                  value to operations quickly.
                </p>
              </div>
            </div>
          </div>
          <!-- Read More/Read Less Button -->
          <button @click="toggleLastPart" class="toggle-btn">
            {{ showLastPart ? '- See Less -' : '- See More -' }}
          </button>
        </div>
      </div>
    </section>
  </template>
  
  
<script>
export default {
  data() {
    return {
      services: [
        {
          image: "Tech Support.png",
          title: "Technical Support",
          description:
            "We provide the highest quality of 24/7 customer and technical support using the 5 levels of technology-based services while remaining personable, highly reliable, and detailed with the utmost quality and consistency."
        },
        {
          image: "Management Consulting.png",
          title: "Management Consulting",
          description:
            "Many industries rely on competent technical assistance, project management, and cutting-edge technology. We are focused on maximizing the potential of this potent combination in order to provide an exceptional experience to our business partners."
        },
        {
          image: "IT infrastructure.png",
          title: "IT infrastructure",
          description:
            "Our success is built on the use of a simple but effective IT infrastructure to improve cost-effective, secure, and innovative day-to-day business operations."
        },
        {
          image: "DevOps.png",
          title: "DevOps and Consulting Services",
          description:
            "We will work with your business development and operations team to ensure that everyone is on the same page about the best way to improve your operations, enhance IT security, and utilize infrastructure resources."
        }
      ],
      showLastPart: false // State to control visibility
    };
  },
  methods: {
    toggleLastPart() {
      this.showLastPart = !this.showLastPart; // Toggle visibility
    },
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
  },
  mounted() {
    this.observeComponent(); // Start observing when the component is mounted
}
  
};
</script>
  
  
  <style scoped>
.services-container {
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  width: 100%; /* Ensures it takes full width */
  height: 100%; /* Ensures it takes full height */
}

.services-content {
  display: flex;
  flex-wrap: wrap; /* Enable wrapping for flex items */
  justify-content: space-between; /* Space between columns */
  gap: 1rem; /* Optional spacing for better appearance */
  margin-top: 2rem;
}

.services-tiles {
  flex: 1 1 calc(50% - 1rem); /* Each item takes 50% width minus the gap */
  display: flex;
  max-width: 600px;
  align-items: center;
  background-color: #1e2738;
  border-radius: 10px;
  padding-right: 15px;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.5s ease-out; /* Fade in effect */
}
.services-tiles:hover{
  background-color: #060e1b;
  transition: 0.3s ease-in-out;
}
.service-tiles-lastpart:hover{
  background-color: #060e1b;
  transition: 0.3s ease-in-out;
}
.service-tiles-lastpart-mobile:hover{
  background-color: #060e1b;
  transition: 0.3s ease-in-out;
}
.services-header h1 {
    font-size: clamp(1.5rem, 3vw, 3rem); /* Minimum size, preferred size, maximum size */
  margin-top: 1rem;
}

.services-tiles img {
  max-width: 400px;
  width: 10vw;
}
.services-tiles h2{
    font-size: clamp(1rem, 1.5vw, 1rem); /* Minimum size, preferred size, maximum size */
}
.services-tiles p{
    font-size: clamp(0.8rem, 1vw, 0.8rem); /* Minimum size, preferred size, maximum size */
}
.service-tiles-lastpart {
    flex: 1 1 calc(50% - 1rem); /* Each item takes 50% width minus the gap */
  max-width: 600px;
  width: 30vw;
  align-items: center;
  background-color: #1e2738;
  border-radius: 10px;
  margin: 0 auto;
  padding-right: 15px;
 

}

.service-tiles-lastpart img {
  max-width: 400px;
  width: 10vw;
}
.service-tiles-lastpart-mobile {
display: none;
flex: 1 1 calc(50% - 1rem); /* Each item takes 50% width minus the gap */
  max-width: 600px;
  width: 30vw;
  align-items: center;
  background-color: #1e2738;
  border-radius: 10px;
  margin: 0 auto;
  padding-right: 15px;
}
.service-tiles-lastpart-mobile img {
  max-width: 400px;
  width: 10vw;
}
.toggle-btn {
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin: 1rem auto;
  display: block;
}

.toggle-btn:hover {
  color: #ffd22f;
}

.fade-up {
  opacity: 0; /* Initially hidden */
  transition: opacity 0.5s ease-out; /* Fade in effect */
}

.fade-up-visible {
  opacity: 1;
}

@media (max-width: 1300px) {
    .services-content{
        padding: 1.5rem;
    }
    .services-tiles img {
 
  width: 15vw;
}
.service-tiles-lastpart{
    padding: 0;
}
.service-tiles-lastpart-mobile{
    padding: 0;
}
.service-tiles-lastpart-mobile img {
 
 width: 15vw;
}
.service-tiles-lastpart img {
 
 width: 15vw;
}
.service-tiles-lastpart p{
    padding-right: 10px;
}
.service-tiles-lastpart-mobile p{
    padding-right: 10px;
}
}
@media (max-width: 1030px) {
    .services-content{
        margin-top: 1rem;
    }
    .services-header h1 {
        font-size: 5vw;
    }
    .services-tiles h2{
    font-size: clamp(1rem, 1.5vw, 1rem); /* Minimum size, preferred size, maximum size */
}
.services-tiles p{
    font-size: clamp(0.5rem, 0.8vw, 0.5rem); /* Minimum size, preferred size, maximum size */
}
.services-tiles img {
 
 width: 20vw;
}
.service-tiles-lastpart img {
 
 width: 20vw;
}
.service-tiles-lastpart-mobile img {
 
 width: 20vw;
}
.service-tiles-lastpart h2{
    font-size: clamp(1.2rem, 0.8vw, 1.2rem); /* Minimum size, preferred size, maximum size */
}
.service-tiles-lastpart-mobile h2{
    font-size: clamp(1.2rem, 0.8vw, 1.2rem); /* Minimum size, preferred size, maximum size */
}
.service-tiles-lastpart p{
    font-size: clamp(0.8rem, 1.2vw, 0.8rem); /* Minimum size, preferred size, maximum size */
    padding-right: 10px;
}
.service-tiles-lastpart-mobile p{
    font-size: clamp(0.8rem, 1.2vw, 0.8rem); /* Minimum size, preferred size, maximum size */
    padding-right: 10px;
}
}

@media (max-width: 768px) {
    .services-content{
        flex-direction: column;
        margin-top: 0;
    }
    .services-header h1 {
        font-size: 7vw;
    }
    .toggle-btn {
        display: none; /* Hide the See More button on small screens */
    }
    .service-tiles-lastpart{
      display: none;
    }
    .service-tiles-lastpart-mobile {
        display: flex; /* Ensure the last part is visible automatically */
        width: 100%;
        padding: 0;
        opacity: 1;
    }
    .service-tiles-lastpart-mobile h2{
    font-size: clamp(1rem, 1.5vw, 1rem); /* Minimum size, preferred size, maximum size */
}
.service-tiles-lastpart-mobile p{
    font-size: clamp(0.5rem, 0.8vw, 0.5rem); /* Minimum size, preferred size, maximum size */
}
}
</style>