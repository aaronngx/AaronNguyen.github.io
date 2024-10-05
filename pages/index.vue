<template>
  <div>
    <!-- About Section -->
    <section id="about" class="about-section">
      <p>I am a Computer Science student at the University of Texas at Dallas, with a passion for developing software solutions and contributing to impactful projects.</p>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section">
      <!-- Project 1: Multiplication Game -->
      <div
        class="project-item"
        :class="{ shadow: activeProject === 'multiplication', blur: activeProject && activeProject !== 'multiplication' }"
        @mouseover="setActive('multiplication')"
        @mouseleave="clearActive"
      >
        <div class="project-content">
          <a href="https://github.com/aaronngx?tab=projects" target="_blank" class="project-title">
            <h3>Multiplication Game</h3>
          </a>
          <p>A strategic two-player game built with MIPS Assembly.</p>
          <div class="skill-tags">
            <span class="skill-tag">Assembly</span>
            <span class="skill-tag">MIPS</span>
          </div>
        </div>
      </div>

      <!-- Project 2: Snake Game -->
      <div
        class="project-item"
        :class="{ shadow: activeProject === 'snake', blur: activeProject && activeProject !== 'snake' }"
        @mouseover="setActive('snake')"
        @mouseleave="clearActive"
      >
        <div class="project-content">
          <a href="https://github.com/aaronngx?tab=projects" target="_blank" class="project-title">
            <h3>Snake Game</h3>
          </a>
          <p>A 2D snake game developed in C++ with smooth tail-following algorithms.</p>
          <div class="skill-tags">
            <span class="skill-tag">C++</span>
            <span class="skill-tag">Game Development</span>
          </div>
        </div>
      </div>

      <!-- Project 3: To-Do List -->
      <div
        class="project-item"
        :class="{ shadow: activeProject === 'todo', blur: activeProject && activeProject !== 'todo' }"
        @mouseover="setActive('todo')"
        @mouseleave="clearActive"
      >
        <div class="project-content">
          <a href="https://github.com/aaronngx?tab=projects" target="_blank" class="project-title">
            <h3>To-Do List Application</h3>
          </a>
          <p>A Java-based task management system with sorting algorithms.</p>
          <div class="skill-tags">
            <span class="skill-tag">Java</span>
            <span class="skill-tag">Task Management</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="experience-section">
      <div class="experience-item">
        <div class="experience-layout">
          <div class="experience-time">
            <span>2023 — PRESENT</span>
          </div>
          <div class="experience-content">
            <h3>Front Desk Attendant <span>— UT Dallas Eugene McDermott Library</span></h3>
            <p>Assisted supervisors and trained new student workers. Managed over 500 students using the library facilities. Oversaw interviews to select the best student candidates.</p>
            <div class="skills">
              <span class="skill-tag">Communication</span>
            </div>
          </div>
        </div>
      </div>

      <div class="experience-item">
        <div class="experience-layout">
          <div class="experience-time">
            <span>2018 — 2020</span>
          </div>
          <div class="experience-content">
            <h3>Head of Volunteers <span>— Vietnam National Children's Hospital</span></h3>
            <p>Led a 20-member team to raise $2,500 for pediatric patients. Organized entertainment events for over 60 children during holidays.</p>
            <div class="skills">
              <span class="skill-tag">Teamwork</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Me Section -->
    <section id="contact" class="contact-section">
      <h3>Contact Me</h3>
      <form @submit.prevent="sendEmail">
        <div class="input-group">
          <input type="text" v-model="form.fullName" placeholder="Your Full Name" required />
        </div>
        <div class="input-group">
          <input type="email" v-model="form.email" placeholder="Your Email" required />
        </div>
        <div class="input-group">
          <textarea v-model="form.message" placeholder="Your Message" required></textarea>
        </div>
        <div class="submit-btn">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeProject: '', // No project is selected by default
      form: {
        fullName: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    setActive(project) {
      this.activeProject = project;
    },
    clearActive() {
      this.activeProject = ''; // Clear active project when mouse leaves
    },
    sendEmail() {
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: this.form.fullName,
        from_email: this.form.email,
        message: this.form.message,
      }).then(
        () => {
          alert('Message Sent Successfully');
        },
        (error) => {
          console.log(error);
          alert('There was an error sending the message.');
        }
      );
    },
  },
};
</script>

<style scoped>
/* General section styles */
section {
  margin-bottom: 6rem; /* Spacing between sections */
}

/* About section */
.about-section {
  font-size: 1.2rem;
  color: var(--soft-peach);
}

/* Projects section */
.projects-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-item {
  display: flex;
  padding: 1.5rem;
  background-color: #0b0b0b;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: none; /* No shadow by default */
}

.project-item.shadow {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.9); /* Stronger shadow for active project */
}

.project-item.blur {
  filter: blur(1.5px); /* Increased blur for unselected projects */
  opacity: 10; /* Lower opacity for unselected projects */
  transition: all 0.3s ease;
}

.project-content {
  width: 100%;
}

.project-title {
  color: var(--jacarta);
  text-decoration: none;
  font-size: 1.8rem;
}

.project-title:hover {
  text-decoration: underline;
}

.project-item p {
  color: var(--soft-peach);
  margin-bottom: 1rem;
}

/* Skill tags */
.skill-tags {
  display: flex;
  gap: 10px;
}

.skill-tag {
  background-color: #362c5f;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
}

/* Experience section */
.experience-section .experience-item {
  margin-bottom: 4rem;
  padding: 1.5rem;
  background-color: #0b0b0b;
  border-radius: 8px;
  border-left: 5px solid #925ff0;
}

.experience-layout {
  display: flex;
  align-items: flex-start;
}

.experience-time {
  width: 20%;
  color: #fefdfd;
  font-weight: bold;
  text-align: left;
}

.experience-content {
  width: 80%;
  padding-left: 2rem;
}

.experience-content h3 {
  font-size: 1.5rem;
  color: var(--jacarta);
  margin-bottom: 0.5rem;
}

.experience-content p {
  color: #fefdfd;
  margin-bottom: 1rem;
}

/* Contact Section Styling */
.contact-section {
  padding: 2rem;
}

.input-group {
  margin-bottom: 1.5rem;
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  border: 2px solid #925ff0;
  border-radius: 8px;
  color: #fefdfd;
  font-size: 1rem;
}

input::placeholder,
textarea::placeholder {
  color: #7a7a7a;
}

textarea {
  height: 150px;
}

.submit-btn button {
  background-color: #925ff0;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
}

.submit-btn button:hover {
  background-color: #a3fda2;
  color: #000000;
}
</style>
