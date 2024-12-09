<template>
    <header class="header skeleton-header">
        <nav class="nav">
            <div class="logo">
                <skeleton></skeleton>
            </div>
            <div class="hamburger" aria-hidden="true">
                <skeleton></skeleton>
            </div>
            <div class="nav-links">
                <ul>
                    <li><skeleton></skeleton></li>
                    <li><skeleton></skeleton></li>
                    <li><skeleton></skeleton></li>
                    <li><skeleton></skeleton></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "navbarskeleton",
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    padding: 20px;
    position: fixed;
    z-index: 2;
    width: 100%;
}

.nav {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.nav-links ul {
    display: flex;
    padding: 10px;
    max-width: 400px;
    width: 20vw;
    background-color: rgba(255, 255, 255, 0.293);
    position: relative;
    overflow: hidden;
    border-radius: 5px;
}

.logo {
   max-width: 100px;
    padding: 10px;
    width: 10vw;
    background-color: rgba(255, 255, 255, 0.293);
    position: relative;
    overflow: hidden;
    border-radius: 5px;
}

.hamburger {
    display: none;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.293);
    position: relative;
    overflow: hidden;
    border-radius: 5px;
}

/* Shining animation */
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

.logo::after,
.nav-links li::after,
.hamburger::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 100%
    );
    transform: translateX(-100%);
    animation: shine 2s infinite;
}

/* Media query for mobile view */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .hamburger {
        display: block;
    }
    .logo{
        width: 100px;
    }
}
</style>
