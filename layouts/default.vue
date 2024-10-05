<template>
  <div class="container">
    <!-- Left Sidebar with Navigation Links -->
    <aside class="left-column">
      <div class="intro">
        <h1>Aaron Nguyen</h1>
        <h2>Computer Science Student | UT Dallas</h2>
        <p>I specialize in software development, user interface design, and creating impactful, user-focused applications.</p>
      </div>

      <!-- Navigation Links -->
      <nav class="nav-links">
        <ul>
          <li><a href="#about" :class="{ active: activeSection === 'about' }" @click="setActive('about')">About</a></li>
          <li><a href="#projects" :class="{ active: activeSection === 'projects' }" @click="setActive('projects')">Projects</a></li>
          <li><a href="#experience" :class="{ active: activeSection === 'experience' }" @click="setActive('experience')">Experience</a></li>
        </ul>
      </nav>

      <!-- Social Icons with LinkedIn and GitHub -->
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/aaronnguyenutdallas" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/aaronngx" target="_blank" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </aside>

    <!-- Right Content Column -->
    <main class="right-column">
      <NuxtPage />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 'about', // Default active section
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    setActive(section) {
      this.activeSection = section;
    },
    handleScroll() {
      const sections = ['about', 'projects', 'experience'];
      sections.forEach(section => {
        const el = document.getElementById(section);
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
        }
      });
    },
  },
};
</script>

<style scoped>
/* Main container for the two-column layout */
.container {
  display: flex;
  height: 100vh;
  background-color: #0B0B0B; /* Black */
  color: #FFFFFF;  /* White for general text */
}

/* Left Column: Fixed with navigation */
.left-column {
  width: 30%;
  height: 90vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left:15% ;
  padding: 2rem;
  background-color: #0B0B0B; /* Black */
}

/* Intro section */
.intro {
  margin-bottom: 2rem;
}

.intro h1 {
  font-size: 4rem;
  font-weight: bold;
  color: #FFFFFF;
}

.intro h2 {
  font-size: 1.5rem;
  color: #925FF0; /* Purple */
}

.intro p {
  font-size: 1rem;
  color: #FFFFFF;
}

/* Navigation Links */
.nav-links ul {
  list-style: none;
  padding: 0;
}

.nav-links ul li {
  margin-bottom: 2rem;
  position: relative;
}

.nav-links ul li a {
  color: #FFFFFF;  /* White text */
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  display: inline-block;
  position: relative;
}

.nav-links ul li a.active::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -2rem;
  transform: translateY(-50%);
  width: 2rem;
  height: 2px;
  background-color: #A3FDA1; /* Mint green underline */
}

.nav-links ul li a:hover,
.nav-links ul li a.active {
  color: #A3FDA1; /* Mint green for active and hover */
}

/* Social Icons */
.social-icons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
}

.social-icons a {
  color: #925FF0; /* Purple for social icons */
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.social-icons a:hover {
  color: #A3FDA1; /* Mint green on hover */
}

/* Right Column: Scrollable */
.right-column {
  margin-left: 50%;
  margin-right: 10%;
  padding: 2rem;
  width: 75%;
  overflow-y: auto;
  background-color: #0B0B0B; /* Black */
}
</style>