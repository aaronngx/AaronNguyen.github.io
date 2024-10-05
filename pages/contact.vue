<template>
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
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          fullName: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      sendEmail() {
        // Sending email using the EmailJS service
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
  /* Form styling */
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
    border: 2px solid #A3FDA1;
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
    background-color: #0066ff;
    color: #ffffff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .submit-btn button:hover {
    background-color: #004bb5;
  }
  </style>
  