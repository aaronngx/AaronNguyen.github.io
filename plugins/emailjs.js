// plugins/emailjs.js
import emailjs from 'emailjs-com';

export default defineNuxtPlugin(() => {
  // Initialize EmailJS
  emailjs.init('4msOTc8fJ2yA7c3NqOYLa'); // Replace with your actual EmailJS User ID
});
