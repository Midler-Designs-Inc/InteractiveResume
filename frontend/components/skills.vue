<template>
  <div class="card h-100 border-0 rounded-4 p-4 glass-card">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fs-4 fw-semibold mb-0 text-gradient-secondary">Technical Skills</h2>
      <a href="#" class="btn btn-sm rounded-pill px-3 btn-purple-outline text-decoration-none text-uppercase" style="font-size: 0.75rem;">
        View All
      </a>
    </div>
    <div class="row g-3">
      <div class="col-md-6 col-12" v-for="skill in skills" :key="skill.name">
        <div class="skill-item border rounded-3 p-3 position-relative overflow-hidden">
          <span class="position-absolute top-0 end-0 m-3 small fw-semibold text-purple-primary">{{ skill.level }}%</span>
          <h3 class="fs-6 mb-2 text-white">{{ skill.name }}</h3>
          <p class="text-muted small mb-0">{{ skill.tech }}</p>
          <div class="skill-progress position-absolute bottom-0 start-0" :style="{ width: skill.level + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "skills",
    data () {
      return {
        skills: [
          { name: 'JavaScript / TypeScript', tech: 'React, Node.js, Next.js', level: 95 },
          { name: 'Python', tech: 'Django, Flask, FastAPI', level: 90 },
          { name: 'Cloud Architecture', tech: 'AWS, Azure, GCP', level: 88 },
          { name: 'Database Design', tech: 'PostgreSQL, MongoDB', level: 85 },
          { name: 'DevOps / CI/CD', tech: 'Docker, Kubernetes', level: 92 },
          { name: 'UI/UX Design', tech: 'Figma, Design Systems', level: 87 }
        ],
      }
    }
  }
</script>