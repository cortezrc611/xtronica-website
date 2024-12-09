<template>
    <header class="header" :class="{ scrolled: isScrolled }">
      <nav class="nav">
        <div class="logo">
          <a href="/"><img src="/images/xtronica-systems-logo.png" alt="Xtronica Logo" /></a>
        </div>
        <div class="nav-links" :class="{ open: isMenuOpen }">
          <ul>
            <li><router-link class="router" to="/">Home</router-link></li>
            <li><router-link class="router" to="/aboutus">About Us</router-link></li>
            <li><router-link class="router" to="/services">Services</router-link></li>
            <li><router-link class="router" to="/projects">Projects</router-link></li>
            <li><router-link class="router button" to="/contact">Contact Us</router-link></li>
          </ul>
        </div>
        <!-- Hamburger Menu Icon -->
        <div
          class="hamburger"
          :class="{ active: isMenuOpen }"
          @click="toggleMenu"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </nav>
      <!-- Modal Overlay -->
      <div
        class="modal-overlay"
        v-if="isMenuOpen"
        @click="toggleMenu"
      ></div>
    </header>
  </template>
  
  
  
  <script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: center;
    padding: 15px;
    position: fixed;
    z-index: 2;
    width: 100%;
    transition: background-color 0.3s ease; /* Smooth transition */
  }
  
  .header.scrolled {
    background-color: rgb(15, 15, 90); /* Dark background when scrolled */
  }
  
  .nav {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
  
  .nav-links ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-links li {
    padding: 20px;
  }
  
  .logo {
    width: 200px;
  }
  
  .router:hover {
    color: #fce700;
  }
  
  .router-link-active {
    color: rgb(38, 255, 237); /* Active route will change to green */
  }
  
  .button {
    background-color: #0FA3E0;
    padding: 10px;
    border-radius: 4px;
  }
  .button:hover{
    background-color: #F9C247;
    color: #080808;
    transition: 0.3s;
  }
  .hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  cursor: pointer;
  position: relative;
  z-index: 3;
  transition: transform 0.3s ease;
}

.hamburger .bar {
  height: 5px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
}

/* Animations for the close (X) icon */
.hamburger.active .bar:nth-child(1) {
  transform: rotate(45deg);
  top: 10px;
  position: absolute;
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(3) {
  transform: rotate(-45deg);
  top: 10px;
  position: absolute;
}
  
  /* Mobile menu style */
  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  z-index: 1; /* Ensure it appears behind the menu but above other content */
  transition: opacity 0.3s ease; /* Smooth transition */
}
.nav-links {
  position: relative;
  z-index: 2; /* Ensure it appears above the overlay */
}
  
  .nav-links ul {
    display: flex;
  }
  
  @media (max-width: 768px) {
    .nav-links {
  display: flex;
  position: absolute;
  top: 0; /* Initially hide off-screen */
  left: 8rem;
  background-color: #333;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start; /* Align links to the left */
  height: 100vh;
  padding: 20px;
  transition: transform 0.5s ease, opacity 0.5s ease; /* Smooth slide-down animation */
  opacity: 0;
  transform: translateX(100%);
  z-index: 2;
  width: 100%;
}
  
  .nav-links.open {
  top: 0;
  opacity: 1;
  transform: translateY(0); /* Slide into view */
}
    .nav-links ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
      margin-top: 5rem;
    }
  
    .nav-links li {
      padding: 15px;
      width: 100%;
      text-align: left;
    }
  
    /* Show hamburger menu on mobile */
    .hamburger {
      display: flex;
    }
  }
  </style>
  
  
  