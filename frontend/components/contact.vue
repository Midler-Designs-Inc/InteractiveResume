<template>
  <div class="card border-0 rounded-4 p-4 glass-card">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fs-4 fw-semibold mb-0 text-gradient-secondary">Get In Touch</h2>
    </div>
    <div class="row g-4">
      <div class="col-lg-3 col-6" v-for="contact in contacts" :key="contact.type">
        <div class="contact-card border rounded-3 p-4 text-center h-100">
          <a class="text-decoration-none" :href="contact.value" target="_blank">
            <div class="icon-container d-flex align-items-center justify-content-center mx-auto mb-3 rounded-3 fs-3" v-html="contact.icon">

            </div>
            <h3 class="fs-6 mb-2 text-white">{{ contact.type }}</h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contact",
    data () {
      return {
        contacts: [
          { icon: '✉️', type: 'jeffmidler@gmail.com', value: 'mailto:jeffmidler@gmail.com'},
          { icon: '💼', type: 'LinkedIn', value: 'https://www.linkedin.com/in/jeffrey-midler-34033b125'},
          { icon: '🐙', type: 'GitHub', value: 'https://github.com/Midler-Designs-Inc'},
          { icon: '<i class="fa-brands fa-upwork" style="color:#14A800;"></i>', type: 'Upwork', value: 'https://www.upwork.com/freelancers/~01e42deffaaac03f62'}
        ]
      }
    }
  }
</script>