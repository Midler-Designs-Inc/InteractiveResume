<template>
  <div class="container-fluid">
    <!-- Hero Section -->
    <section class="hero py-5">
      <div class="text-center">
        <h1 class="display-1 fw-bold text-white mb-4">SOFTWARE ENGINEER</h1>
        <p class="lead text-muted max-w-700 mx-auto mb-5">
          Welcome to my interactive AI-powered portfolio. Chat with my AI avatar to learn about my skills, experience, and projects. I specialize in full-stack development, cloud architecture, and building innovative solutions for modern challenges.
        </p>
        
        <div class="row justify-content-center mb-5">
          <div class="col-md-4 col-6 text-center mb-4">
            <div class="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-circle d-inline-flex align-items-center justify-content-center w-25 h-25 mb-3 mx-auto">
              <span class="text-white fs-4">💼</span>
            </div>
            <h3 class="text-muted mb-1">Business Owner</h3>
            <p class="text-white">Software Engineering</p>
          </div>
          <div class="col-md-4 col-6 text-center mb-4">
            <div class="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-circle d-inline-flex align-items-center justify-content-center w-25 h-25 mb-3 mx-auto">
              <span class="text-white fs-4">🚀</span>
            </div>
            <h3 class="text-muted mb-1">Projects Delivered</h3>
            <p class="text-white">50+ Solutions</p>
          </div>
          <div class="col-md-4 col-6 text-center mb-4">
            <div class="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-circle d-inline-flex align-items-center justify-content-center w-25 h-25 mb-3 mx-auto">
              <span class="text-white fs-4">⚡</span>
            </div>
            <h3 class="text-muted mb-1">Years Experience</h3>
            <p class="text-white">8+ Years</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Avatar Section -->
    <section class="avatar-section text-center my-5">
      <div class="d-inline-block position-relative" style="width: 450px; height: 450px;">
        <div class="position-absolute top-50 start-50 translate-middle w-100 h-100 border border-purple-500 rounded-circle" style="animation: rotateRing 20s linear infinite;"></div>
        <div class="position-absolute top-50 start-50 translate-middle w-88 h-88 border border-purple-300 rounded-circle" style="animation: rotateRing 15s linear infinite reverse;"></div>
        <div class="position-absolute top-50 start-50 translate-middle w-76 h-76 border border-purple-200 rounded-circle"></div>
        <div class="position-absolute top-50 start-50 translate-middle w-100 h-100" style="background: repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(139, 92, 246, 0.4) 10px, rgba(139, 92, 246, 0.4) 20px);">
          <div class="position-absolute top-50 start-50 translate-middle" style="width: 100%; height: 100%;"></div>
        </div>
        <div class="position-absolute top-50 start-50 translate-middle bg-gradient-to-r from-purple-400 to-indigo-300 rounded-circle d-flex flex-column align-items-center justify-content-center text-purple-600 fs-1" style="width: 240px; height: 300px; animation: avatarFloat 4s ease-in-out infinite;">
          🤖
        </div>
      </div>
    </section>

    <!-- Dashboard Grid -->
    <div class="row g-4 mb-5">
      <!-- Technical Skills -->
      <div class="col-lg-6">
        <div class="card bg-dark border-purple-500">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h2 class="h5 mb-0 text-white">Technical Skills</h2>
            <a href="#" class="btn btn-sm btn-outline-purple">View All</a>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-6">
                <div class="card bg-dark border-purple-300 p-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="h6 mb-0 text-white">JavaScript / TypeScript</h3>
                    <span class="badge bg-purple-500">95%</span>
                  </div>
                  <p class="text-muted small mb-0">React, Node.js, Next.js</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card bg-dark border-purple-300 p-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="h6 mb-0 text-white">Python</h3>
                    <span class="badge bg-purple-500">90%</span>
                  </div>
                  <p class="text-muted small mb-0">Django, Flask, FastAPI</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card bg-dark border-purple-300 p-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="h6 mb-0 text-white">Cloud Architecture</h3>
                    <span class="badge bg-purple-500">88%</span>
                  </div>
                  <p class="text-muted small mb-0">AWS, Azure, GCP</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card bg-dark border-purple-300 p-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="h6 mb-0 text-white">Database Design</h3>
                    <span class="badge bg-purple-500">85%</span>
                  </div>
                  <p class="text-muted small mb-0">PostgreSQL, MongoDB</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card bg-dark border-purple-300 p-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="h6 mb-0 text-white">DevOps / CI/CD</h3>
                    <span class="badge bg-purple-500">92%</span>
                  </div>
                  <p class="text-muted small mb-0">Docker, Kubernetes</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card bg-dark border-purple-300 p-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="h6 mb-0 text-white">UI/UX Design</h3>
                    <span class="badge bg-purple-500">87%</span>
                  </div>
                  <p class="text-muted small mb-0">Figma, Design Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Work History -->
      <div class="col-lg-6">
        <div class="card bg-dark border-purple-500">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h2 class="h5 mb-0 text-white">Work History</h2>
            <a href="#" class="btn btn-sm btn-outline-purple">Timeline</a>
          </div>
          <div class="card-body">
            <div class="d-flex flex-column gap-3">
              <div class="card bg-dark border-purple-300 p-3">
                <div class="d-flex gap-3">
                  <div class="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-circle d-inline-flex align-items-center justify-content-center w-12 h-12 flex-shrink-0">
                    <span class="text-white fs-5">👔</span>
                  </div>
                  <div>
                    <h3 class="h6 mb-1 text-white">Owner & Lead Developer</h3>
                    <p class="text-muted small mb-1">Custom Software Engineering Firm</p>
                    <p class="text-muted small mb-2">Building custom solutions for clients across industries</p>
                    <div class="text-purple-500 small">2017 - Present</div>
                  </div>
                </div>
              </div>
              <div class="card bg-dark border-purple-300 p-3">
                <div class="d-flex gap-3">
                  <div class="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-circle d-inline-flex align-items-center justify-content-center w-12 h-12 flex-shrink-0">
                    <span class="text-white fs-5">💻</span>
                  </div>
                  <div>
                    <h3 class="h6 mb-1 text-white">Senior Full-Stack Developer</h3>
                    <p class="text-muted small mb-1">Tech Startup</p>
                    <p class="text-muted small mb-2">Led development of scalable web applications</p>
                    <div class="text-purple-500 small">2015 - 2017</div>
                  </div>
                </div>
              </div>
              <div class="card bg-dark border-purple-300 p-3">
                <div class="d-flex gap-3">
                  <div class="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-circle d-inline-flex align-items-center justify-content-center w-12 h-12 flex-shrink-0">
                    <span class="text-white fs-5">🎯</span>
                  </div>
                  <div>
                    <h3 class="h6 mb-1 text-white">Software Developer</h3>
                    <p class="text-muted small mb-1">Digital Agency</p>
                    <p class="text-muted small mb-2">Developed client websites and applications</p>
                    <div class="text-purple-500 small">2013 - 2015</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Showcase -->
      <div class="col-12">
        <div class="card bg-dark border-purple-500">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h2 class="h5 mb-0 text-white">Featured Projects</h2>
            <a href="#" class="btn btn-sm btn-outline-purple">View All</a>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-6 col-lg-3">
                <div class="card bg-dark border-purple-300 h-100">
                  <div class="card-header bg-gradient-to-r from-purple-400 to-indigo-300 rounded-top text-center">
                    <span class="text-purple-600 fs-4">🏢</span>
                  </div>
                  <div class="card-body">
                    <h3 class="h6 mb-2 text-white">Enterprise Dashboard</h3>
                    <p class="text-muted small mb-3">Real-time analytics platform for Fortune 500 company with custom data visualization and reporting.</p>
                    <div class="d-flex flex-wrap gap-2">
                      <span class="badge bg-purple-500">React</span>
                      <span class="badge bg-purple-500">Node.js</span>
                      <span class="badge bg-purple-500">AWS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="card bg-dark border-purple-300 h-100">
                  <div class="card-header bg-gradient-to-r from-purple-400 to-indigo-300 rounded-top text-center">
                    <span class="text-purple-600 fs-4">🛒</span>
                  </div>
                  <div class="card-body">
                    <h3 class="h6 mb-2 text-white">E-Commerce Platform</h3>
                    <p class="text-muted small mb-3">Scalable online marketplace with payment integration, inventory management, and AI recommendations.</p>
                    <div class="d-flex flex-wrap gap-2">
                      <span class="badge bg-purple-500">Next.js</span>
                      <span class="badge bg-purple-500">PostgreSQL</span>
                      <span class="badge bg-purple-500">Stripe</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="card bg-dark border-purple-300 h-100">
                  <div class="card-header bg-gradient-to-r from-purple-400 to-indigo-300 rounded-top text-center">
                    <span class="text-purple-600 fs-4">🤖</span>
                  </div>
                  <div class="card-body">
                    <h3 class="h6 mb-2 text-white">AI Chatbot System</h3>
                    <p class="text-muted small mb-3">Custom AI-powered customer service solution with natural language processing and multi-channel support.</p>
                    <div class="d-flex flex-wrap gap-2">
                      <span class="badge bg-purple-500">Python</span>
                      <span class="badge bg-purple-500">OpenAI</span>
                      <span class="badge bg-purple-500">FastAPI</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="card bg-dark border-purple-300 h-100">
                  <div class="card-header bg-gradient-to-r from-purple-400 to-indigo-300 rounded-top text-center">
                    <span class="text-purple-600 fs-4">📱</span>
                  </div>
                  <div class="card-body">
                    <h3 class="h6 mb-2 text-white">Mobile App Suite</h3>
                    <p class="text-muted small mb-3">Cross-platform mobile application for healthcare tracking with real-time sync and offline support.</p>
                    <div class="d-flex flex-wrap gap-2">
                      <span class="badge bg-purple-500">React Native</span>
                      <span class="badge bg-purple-500">Firebase</span>
                      <span class="badge bg-purple-500">iOS/Android</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Methods -->
      <div class="col-12">
        <div class="card bg-dark border-purple-500">
          <div class="card-header">
            <h2 class="h5 mb-0 text-white">Get In Touch</h2>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-4">
                <div class="card bg-dark border-purple-300 text-center p-4">
                  <div class="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-circle d-inline-flex align-items-center justify-content-center w-16 h-16 mb-3 mx-auto">
                    <span class="text-white fs-4">✉️</span>
                  </div>
                  <h3 class="h6 mb-1 text-white">Email</h3>
                  <p class="text-muted small mb-0">contact@example.com</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-dark border-purple-300 text-center p-4">
                  <div class="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-circle d-inline-flex align-items-center justify-content-center w-16 h-16 mb-3 mx-auto">
                    <span class="text-white fs-4">💼</span>
                  </div>
                  <h3 class="h6 mb-1 text-white">LinkedIn</h3>
                  <p class="text-muted small mb-0">/in/yourprofile</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-dark border-purple-300 text-center p-4">
                  <div class="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-circle d-inline-flex align-items-center justify-content-center w-16 h-16 mb-3 mx-auto">
                    <span class="text-white fs-4">🐙</span>
                  </div>
                  <h3 class="h6 mb-1 text-white">GitHub</h3>
                  <p class="text-muted small mb-0">@yourusername</p>
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
  name: 'App'
}
</script>

<style>
/* Custom styles for animations and special effects */
@keyframes rotateRing {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes avatarFloat {
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50% { transform: translate(-50%, -50%) translateY(-10px); }
}

/* Custom gradient classes */
.bg-gradient-to-r {
  background: linear-gradient(135deg, var(--bs-purple-500), var(--bs-indigo-500));
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .container {
    padding: 20px;
  }
  
  .avatar-container {
    width: 350px;
    height: 350px;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .avatar-container {
    width: 280px;
    height: 280px;
  }
}
</style>
