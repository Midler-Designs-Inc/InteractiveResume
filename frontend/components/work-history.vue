<template>
  <div class="card h-100 border-0 rounded-4 p-4 glass-card">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fs-4 fw-semibold mb-0 text-gradient-secondary">Work History</h2>
      <a href="#" class="btn btn-sm rounded-pill px-3 btn-purple-outline text-decoration-none text-uppercase" style="font-size: 0.75rem;">
        Timeline
      </a>
    </div>
    <div class="d-flex flex-column gap-3">
      <div class="card-interactive border rounded-3 p-3 d-flex gap-3" v-for="work in workHistory" :key="work.title">
        <div class="icon-container d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 fs-4">
          {{ work.icon }}
        </div>
        <div class="flex-grow-1">
          <h3 class="fs-6 mb-1 text-white">{{ work.title }}</h3>
          <p class="text-muted small mb-1">{{ work.company }}</p>
          <p class="text-muted small mb-2">{{ work.description }}</p>
          <div class="small text-purple-primary">{{ work.duration }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "work-history",
    data () {
      return {
        workHistory: [
          {
            icon: '👔',
            title: 'Owner & Lead Developer',
            company: 'Custom Software Engineering Firm',
            description: 'Building custom solutions for clients across industries',
            duration: '2017 - Present'
          },
          {
            icon: '💻',
            title: 'Senior Full-Stack Developer',
            company: 'Tech Startup',
            description: 'Led development of scalable web applications',
            duration: '2015 - 2017'
          },
          {
            icon: '🎯',
            title: 'Software Developer',
            company: 'Digital Agency',
            description: 'Developed client websites and applications',
            duration: '2013 - 2015'
          }
        ],
      }
    }
  }
</script>