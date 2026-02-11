
<template>
  <div class="portfolio-bg py-5 px-3 px-md-4">
    <!-- Hero + AI Avatar Section - Combined Row -->
    <section class="mb-5 position-relative">
      <div class="row g-4 align-items-center">
        <!-- Left Column: Hero Content -->
        <div class="col-lg-6">
          <h1 class="display-2 fw-bold mb-3 text-gradient-primary tracking-widest hero-title-animated">
            SOFTWARE ENGINEER
          </h1>
          <p class="text-muted mb-4 lh-lg">
            Welcome to my interactive AI-powered portfolio. Explore my expertise in full-stack development,
            cloud architecture, and innovative solutions.
          </p>

          <div class="d-flex gap-4 flex-wrap">
            <div class="text-center">
              <div class="icon-container icon-pulse d-flex align-items-center justify-content-center mx-auto mb-2 rounded-3 fs-3">
                💼
              </div>
              <p class="text-uppercase text-muted small mb-1 tracking-wide fs-7">Business Owner</p>
              <p class="fw-semibold mb-0 text-gradient-secondary fs-6">Software Engineering</p>
            </div>
            <div class="text-center">
              <div class="icon-container icon-pulse d-flex align-items-center justify-content-center mx-auto mb-2 rounded-3 fs-3">
                🚀
              </div>
              <p class="text-uppercase text-muted small mb-1 tracking-wide fs-7">Projects</p>
              <p class="fw-semibold mb-0 text-gradient-secondary fs-6">50+ Solutions</p>
            </div>
            <div class="text-center">
              <div class="icon-container icon-pulse d-flex align-items-center justify-content-center mx-auto mb-2 rounded-3 fs-3">
                ⚡
              </div>
              <p class="text-uppercase text-muted small mb-1 tracking-wide fs-7">Experience</p>
              <p class="fw-semibold mb-0 text-gradient-secondary fs-6">8+ Years</p>
            </div>
          </div>
        </div>

        <!-- Right Column: AI Avatar -->
        <div class="col-lg-6">
          <div class="d-flex justify-content-center position-relative">
            <div class="avatar-container position-relative mx-auto">
              <div class="avatar-ring position-absolute top-0 start-0 w-100 h-100 rounded-circle"></div>
              <div class="avatar-ring-middle position-absolute top-50 start-50 translate-middle rounded-circle w-88 h-88"></div>
              <div class="avatar-ring-inner position-absolute top-50 start-50 translate-middle rounded-circle w-76 h-76"></div>
              <div class="avatar-crosshair position-absolute top-0 start-0 w-100 h-100"></div>
              <div class="avatar-content position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center fs-1">
                🤖
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dashboard Grid -->
    <div class="container-fluid px-3">
      <div class="row g-4 mb-4">
        <!-- Technical Skills -->
        <div class="col-lg-6 col-12">
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
        </div>

        <!-- Work History -->
        <div class="col-lg-6 col-12">
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
        </div>

        <!-- Project Showcase -->
        <div class="col-12">
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
        </div>

        <!-- Contact Methods -->
        <div class="col-12">
          <div class="card border-0 rounded-4 p-4 glass-card">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h2 class="fs-4 fw-semibold mb-0 text-gradient-secondary">Get In Touch</h2>
            </div>
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 col-12" v-for="contact in contacts" :key="contact.type">
                <div class="contact-card border rounded-3 p-4 text-center">
                  <div class="icon-container d-flex align-items-center justify-content-center mx-auto mb-3 rounded-3 fs-3">
                    {{ contact.icon }}
                  </div>
                  <h3 class="fs-6 mb-2 text-white">{{ contact.type }}</h3>
                  <p class="text-muted small mb-0">{{ contact.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioComponent',
  data() {
    return {
      skills: [
        { name: 'JavaScript / TypeScript', tech: 'React, Node.js, Next.js', level: 95 },
        { name: 'Python', tech: 'Django, Flask, FastAPI', level: 90 },
        { name: 'Cloud Architecture', tech: 'AWS, Azure, GCP', level: 88 },
        { name: 'Database Design', tech: 'PostgreSQL, MongoDB', level: 85 },
        { name: 'DevOps / CI/CD', tech: 'Docker, Kubernetes', level: 92 },
        { name: 'UI/UX Design', tech: 'Figma, Design Systems', level: 87 }
      ],
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
      contacts: [
        { icon: '✉️', type: 'Email', value: 'contact@example.com' },
        { icon: '💼', type: 'LinkedIn', value: '/in/yourprofile' },
        { icon: '🐙', type: 'GitHub', value: '@yourusername' }
      ]
    }
  }
}
</script>