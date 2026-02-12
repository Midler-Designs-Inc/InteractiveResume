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
          <span class="position-absolute top-0 end-0 m-3 small fw-semibold text-purple-primary">{{ skill.years }} years</span>
          <h3 class="fs-6 mb-2 text-white">{{ skill.name }}</h3>
          <p class="text-muted small mb-0">{{ skill.tech }}</p>
          <div class="skill-progress position-absolute bottom-0 start-0" :style="{ width: skill.progress + '%' }"></div>
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
          { name: 'JavaScript / TypeScript', tech: 'React, Node.js, Next.js', years: 7, experience: 'advanced', progress: 80 },
          { name: 'Python', tech: 'Django, Flask, FastAPI', years: 6, experience: 'proficient', progress: 60 },
          { name: 'Cloud Architecture', tech: 'AWS, Azure, GCP', years: 5, experience: 'proficient', progress: 60 },
          { name: 'Database Design', tech: 'PostgreSQL, MongoDB', years: 5, experience: 'proficient', progress: 60 },
          { name: 'DevOps / CI/CD', tech: 'Docker, Kubernetes', years: 6, experience: 'advanced', progress: 80 },
          { name: 'UI/UX Design', tech: 'Figma, Design Systems', years: 4, experience: 'working_knowledge', progress: 40 }
        ],
      }
    }
  }
</script>
