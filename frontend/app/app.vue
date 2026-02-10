<template>
  <div class="portfolio-container">
    <!-- Hero + AI Avatar Section - Combined Row -->
    <section class="mb-5 position-relative">
      <div class="row g-4 align-items-center">
        <!-- Left Column: Hero Content -->
        <div class="col-lg-6">
          <h1 class="display-2 fw-bold mb-3 hero-title" style="letter-spacing: 3px;">SOFTWARE ENGINEER</h1>
          <p class="text-muted mb-4" style="line-height: 1.8; font-size: 1rem;">
            Welcome to my interactive AI-powered portfolio. Explore my expertise in full-stack development,
            cloud architecture, and innovative solutions.
          </p>

          <div class="d-flex gap-4 flex-wrap">
            <div class="text-center">
              <div class="d-flex align-items-center justify-content-center mx-auto mb-2 rounded-3 fs-3"
                   style="width: 50px; height: 50px; background: linear-gradient(135deg, #8b5cf6, #6366f1); box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);">
                💼
              </div>
              <p class="text-uppercase text-muted small mb-1" style="letter-spacing: 1px; font-size: 0.7rem;">Business Owner</p>
              <p class="fw-semibold mb-0 stat-value" style="font-size: 0.9rem;">Software Engineering</p>
            </div>
            <div class="text-center">
              <div class="d-flex align-items-center justify-content-center mx-auto mb-2 rounded-3 fs-3"
                   style="width: 50px; height: 50px; background: linear-gradient(135deg, #8b5cf6, #6366f1); box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);">
                🚀
              </div>
              <p class="text-uppercase text-muted small mb-1" style="letter-spacing: 1px; font-size: 0.7rem;">Projects</p>
              <p class="fw-semibold mb-0 stat-value" style="font-size: 0.9rem;">50+ Solutions</p>
            </div>
            <div class="text-center">
              <div class="d-flex align-items-center justify-content-center mx-auto mb-2 rounded-3 fs-3"
                   style="width: 50px; height: 50px; background: linear-gradient(135deg, #8b5cf6, #6366f1); box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);">
                ⚡
              </div>
              <p class="text-uppercase text-muted small mb-1" style="letter-spacing: 1px; font-size: 0.7rem;">Experience</p>
              <p class="fw-semibold mb-0 stat-value" style="font-size: 0.9rem;">8+ Years</p>
            </div>
          </div>
        </div>

        <!-- Right Column: AI Avatar -->
        <div class="col-lg-6">
          <div class="d-flex justify-content-center position-relative">
            <div class="avatar-container position-relative">
              <div class="outer-ring position-absolute top-0 start-0 w-100 h-100 rounded-circle"></div>
              <div class="middle-ring position-absolute top-50 start-50 translate-middle rounded-circle"></div>
              <div class="inner-ring position-absolute top-50 start-50 translate-middle rounded-circle"></div>
              <div class="crosshair position-absolute top-0 start-0 w-100 h-100"></div>
              <div class="avatar-content position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center">
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
              <h2 class="fs-4 fw-semibold mb-0 card-title-gradient">Technical Skills</h2>
              <a href="#" class="btn btn-sm rounded-pill px-3 view-all-btn text-decoration-none">VIEW ALL</a>
            </div>
            <div class="row g-3">
              <div class="col-md-6 col-12" v-for="skill in skills" :key="skill.name">
                <div class="skill-item border rounded-3 p-3 position-relative overflow-hidden">
                  <span class="skill-level position-absolute top-0 end-0 m-3 small fw-semibold">{{ skill.level }}%</span>
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
              <h2 class="fs-4 fw-semibold mb-0 card-title-gradient">Work History</h2>
              <a href="#" class="btn btn-sm rounded-pill px-3 view-all-btn text-decoration-none">TIMELINE</a>
            </div>
            <div class="d-flex flex-column gap-3">
              <div class="work-item d-flex gap-3 border rounded-3 p-3" v-for="work in workHistory" :key="work.title">
                <div class="work-icon d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 fs-4">
                  {{ work.icon }}
                </div>
                <div class="flex-grow-1">
                  <h3 class="fs-6 mb-1 text-white">{{ work.title }}</h3>
                  <p class="text-muted small mb-1">{{ work.company }}</p>
                  <p class="text-muted small mb-2">{{ work.description }}</p>
                  <div class="work-duration small">{{ work.duration }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Showcase -->
        <div class="col-12">
          <div class="card border-0 rounded-4 p-4 glass-card">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h2 class="fs-4 fw-semibold mb-0 card-title-gradient">Featured Projects</h2>
              <a href="#" class="btn btn-sm rounded-pill px-3 view-all-btn text-decoration-none">VIEW ALL</a>
            </div>
            <div class="row g-4">
              <div class="col-lg-6 col-md-6 col-12" v-for="project in projects" :key="project.title">
                <div class="project-card border rounded-3 p-4 position-relative overflow-hidden h-100">
                  <div class="project-header position-absolute top-0 start-0 w-100"></div>
                  <div class="project-icon d-flex align-items-center justify-content-center rounded-2 mb-3 position-relative fs-4">
                    {{ project.icon }}
                  </div>
                  <h3 class="fs-5 mb-2 position-relative">{{ project.title }}</h3>
                  <p class="text-muted small mb-3 position-relative">{{ project.description }}</p>
                  <div class="d-flex gap-2 flex-wrap position-relative">
                    <span class="badge rounded-pill project-tag" v-for="tag in project.tags" :key="tag">
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
              <h2 class="fs-4 fw-semibold mb-0 card-title-gradient">Get In Touch</h2>
            </div>
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 col-12" v-for="contact in contacts" :key="contact.type">
                <div class="contact-item border rounded-3 p-4 text-center">
                  <div class="contact-icon d-flex align-items-center justify-content-center mx-auto mb-3 rounded-3 fs-3">
                    {{ contact.icon }}
                  </div>
                  <h3 class="fs-6 mb-2">{{ contact.type }}</h3>
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

<style scoped>
  /* Background */
  .portfolio-container {
    background: #0a0a0f;
    color: #fff;
    min-height: 100vh;
    padding: 40px 20px;
    position: relative;
    overflow-x: hidden;
  }

  .portfolio-container::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
        radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 40% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    animation: backgroundPulse 15s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes backgroundPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }

  /* Hero Title */
  .hero-title {
    background: linear-gradient(135deg, #fff 0%, #8b5cf6 50%, #6366f1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 4px;
    animation: titleGlow 3s ease-in-out infinite;
  }

  @keyframes titleGlow {
    0%, 100% { filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.6)); }
    50% { filter: drop-shadow(0 0 40px rgba(139, 92, 246, 0.9)); }
  }

  /* Stats */
  .stat-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    box-shadow:
        0 0 20px rgba(139, 92, 246, 0.6),
        0 0 40px rgba(139, 92, 246, 0.4),
        inset 0 0 20px rgba(255, 255, 255, 0.2);
    animation: iconPulse 2s ease-in-out infinite;
  }

  @keyframes iconPulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(139, 92, 246, 0.6); }
    50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(139, 92, 246, 0.8); }
  }

  .stat-value {
    background: linear-gradient(135deg, #fff, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Avatar Container - FIXED CENTERING */
  .avatar-container {
    width: 450px;
    height: 450px;
  }

  .outer-ring {
    border: 2px solid #8b5cf6;
    box-shadow:
        0 0 20px rgba(139, 92, 246, 0.6),
        0 0 40px rgba(139, 92, 246, 0.4),
        inset 0 0 20px rgba(139, 92, 246, 0.2);
    animation: rotateRing 20s linear infinite;
  }

  .outer-ring::before,
  .outer-ring::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: #8b5cf6;
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.9);
  }

  .outer-ring::before {
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .outer-ring::after {
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .middle-ring {
    width: 88%;
    height: 88%;
    border: 1px solid rgba(139, 92, 246, 0.5);
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
    animation: rotateRing 15s linear infinite reverse;
  }

  .inner-ring {
    width: 76%;
    height: 76%;
    border: 1px solid rgba(139, 92, 246, 0.3);
    box-shadow: inset 0 0 20px rgba(139, 92, 246, 0.2);
  }

  .crosshair::before,
  .crosshair::after {
    content: '';
    position: absolute;
    background: rgba(139, 92, 246, 0.4);
  }

  .crosshair::before {
    width: 1px;
    height: 40%;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
  }

  .crosshair::after {
    width: 40%;
    height: 1px;
    top: 50%;
    left: 30%;
    transform: translateY(-50%);
  }

  .avatar-content {
    width: 240px;
    height: 300px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.2));
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    border: 1px solid rgba(139, 92, 246, 0.4);
    box-shadow:
        0 0 40px rgba(139, 92, 246, 0.4),
        inset 0 0 40px rgba(139, 92, 246, 0.2);
    backdrop-filter: blur(10px);
    font-size: 100px;
    animation: avatarFloat 4s ease-in-out infinite;
  }

  @keyframes avatarFloat {
    0%, 100% { transform: translate(-50%, -50%) translateY(0); }
    50% { transform: translate(-50%, -50%) translateY(-10px); }
  }

  @keyframes rotateRing {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Glass Cards */
  .glass-card {
    background: rgba(20, 20, 30, 0.6);
    border: 1px solid rgba(139, 92, 246, 0.3) !important;
    backdrop-filter: blur(20px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), transparent);
  }

  .glass-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .glass-card:hover {
    border-color: rgba(139, 92, 246, 0.6) !important;
    box-shadow:
        0 8px 32px rgba(139, 92, 246, 0.2),
        inset 0 0 40px rgba(139, 92, 246, 0.1);
    transform: translateY(-2px);
  }

  .glass-card:hover::after {
    opacity: 1;
  }

  .card-title-gradient {
    background: linear-gradient(135deg, #fff, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .view-all-btn {
    background: rgba(139, 92, 246, 0.15);
    border: 1px solid rgba(139, 92, 246, 0.3);
    color: #8b5cf6;
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
  }

  .view-all-btn:hover {
    background: rgba(139, 92, 246, 0.25);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
    color: #8b5cf6;
  }

  /* Skills */
  .skill-item {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(139, 92, 246, 0.2) !important;
  }

  .skill-level {
    color: #8b5cf6;
  }

  .skill-progress {
    height: 3px;
    background: linear-gradient(90deg, #8b5cf6, #6366f1);
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.8);
  }

  /* Work Items */
  .work-item {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(139, 92, 246, 0.2) !important;
    transition: all 0.3s ease;
  }

  .work-item:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(139, 92, 246, 0.4) !important;
    box-shadow: 0 4px 20px rgba(139, 92, 246, 0.2);
  }

  .work-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    box-shadow:
        0 0 20px rgba(139, 92, 246, 0.5),
        inset 0 0 10px rgba(255, 255, 255, 0.2);
  }

  .work-duration {
    color: #8b5cf6;
  }

  /* Projects */
  .project-card {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(139, 92, 246, 0.2) !important;
    transition: all 0.3s ease;
  }

  .project-header {
    height: 60px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.2));
    border-radius: 0.375rem 0.375rem 0 0;
    opacity: 0.5;
  }

  .project-card:hover {
    border-color: rgba(139, 92, 246, 0.5) !important;
    box-shadow: 0 8px 30px rgba(139, 92, 246, 0.3);
    transform: translateY(-4px);
  }

  .project-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.6);
  }

  .project-tag {
    background: rgba(139, 92, 246, 0.2);
    border: 1px solid rgba(139, 92, 246, 0.3);
    color: #8b5cf6;
    font-size: 0.75rem;
  }

  /* Contact */
  .contact-item {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(139, 92, 246, 0.2) !important;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .contact-item:hover {
    background: rgba(139, 92, 246, 0.1);
    border-color: rgba(139, 92, 246, 0.5) !important;
    box-shadow: 0 0 25px rgba(139, 92, 246, 0.3);
  }

  .contact-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
  }

  /* Responsive */
  @media (max-width: 992px) {
    .hero-title {
      font-size: 3.5rem;
    }

    .avatar-container {
      width: 350px;
      height: 350px;
    }

    .avatar-content {
      font-size: 80px;
    }
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
      letter-spacing: 2px;
    }

    .avatar-container {
      width: 280px;
      height: 280px;
    }

    .avatar-content {
      font-size: 60px;
      width: 180px;
      height: 220px;
    }
  }
</style>
