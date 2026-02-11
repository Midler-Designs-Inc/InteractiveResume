<template>
  <div class="card border-0 rounded-4 p-4 glass-card">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fs-4 fw-semibold mb-0 text-gradient-secondary">Featured Projects</h2>
      <a href="#" class="btn btn-sm rounded-pill px-3 btn-purple-outline text-decoration-none text-uppercase" style="font-size: 0.75rem;">
        View All
      </a>
    </div>
    <div class="row g-4">
      <div class="col-lg-6 col-md-6 col-12" v-for="project in projects" :key="project.title">
        <div class="skill-item project-card-hover border rounded-3 p-4 position-relative overflow-hidden h-100">
          <div class="project-header-gradient position-absolute top-0 start-0 w-100 rounded-top-3"></div>
          <div class="icon-container-sm d-flex align-items-center justify-content-center rounded-2 mb-3 position-relative fs-4">
            {{ project.icon }}
          </div>
          <h3 class="fs-5 mb-2 position-relative text-white">{{ project.title }}</h3>
          <p class="text-muted small mb-3 position-relative">{{ project.description }}</p>
          <div class="d-flex gap-2 flex-wrap position-relative">
                    <span class="badge rounded-pill badge-purple" v-for="tag in project.tags" :key="tag" style="font-size: 0.75rem;">
                      {{ tag }}
                    </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects",
  data () {
    return {
      projects: [
        {
          icon: '🏢',
          title: 'Enterprise Dashboard',
          description: 'Real-time analytics platform for Fortune 500 company with custom data visualization and reporting.',
          tags: ['React', 'Node.js', 'AWS']
        },
        {
          icon: '🛒',
          title: 'E-Commerce Platform',
          description: 'Scalable online marketplace with payment integration, inventory management, and AI recommendations.',
          tags: ['Next.js', 'PostgreSQL', 'Stripe']
        },
        {
          icon: '🤖',
          title: 'AI Chatbot System',
          description: 'Custom AI-powered customer service solution with natural language processing and multi-channel support.',
          tags: ['Python', 'OpenAI', 'FastAPI']
        },
        {
          icon: '📱',
          title: 'Mobile App Suite',
          description: 'Cross-platform mobile application for healthcare tracking with real-time sync and offline support.',
          tags: ['React Native', 'Firebase', 'iOS/Android']
        }
      ],
    }
  }
}
</script>