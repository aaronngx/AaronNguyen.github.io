<template>
  <div>
    <!-- Nuxt's built-in route announcer for accessibility -->
    <NuxtRouteAnnouncer />

    <!-- Your custom HTML and sections go here -->
    <section id="home" class="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>This is the homepage. Scroll for more!</p>
    </section>

    <!-- Add more sections as needed -->
    <section id="about" class="about">
      <h2>About Me</h2>
      <p>Details about me go here.</p>
    </section>
  </div>
</template>

<style>
/* Enable smooth scrolling for the entire document */
html {
  scroll-behavior: smooth;
}

/* Basic styling for your sections */
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a192f;
  color: white;
  text-align: center;
}

.about {
  padding: 50px;
  background-color: #f5f5f5;
}
</style>