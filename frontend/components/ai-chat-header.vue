<template>
  <div class="mb-5 position-relative">
    <div class="container-fluid px-3">
      <div class="row g-4 align-items-center">
        <!-- Left Column: Hero Content -->
        <div class="col-lg-6">
          <h1 class="display-2 fw-bold mb-3 text-gradient-primary tracking-widest hero-title-animated">
            Jeffery Midler
          </h1>
          <p class="text-muted mb-4 lh-lg">
            Welcome to my interactive AI-powered portfolio. Explore my expertise in full-stack development,
            cloud architecture, and innovative solutions.
          </p>

          <div class="row g-3 text-center">
            <div class="col-4">
              <div class="icon-container icon-pulse d-flex align-items-center justify-content-center mx-auto mb-2 rounded-3 fs-3">
                💼
              </div>
              <p class="text-uppercase text-muted small mb-1 tracking-wide fs-7">Business Owner</p>
              <p class="fw-semibold mb-0 text-gradient-secondary fs-6">Software Engineering</p>
            </div>
            <div class="col-4">
              <div class="icon-container icon-pulse d-flex align-items-center justify-content-center mx-auto mb-2 rounded-3 fs-3">
                🚀
              </div>
              <p class="text-uppercase text-muted small mb-1 tracking-wide fs-7">Projects</p>
              <p class="fw-semibold mb-0 text-gradient-secondary fs-6">50+ Solutions</p>
            </div>
            <div class="col-4">
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
    </div>
  </div>
</template>

<script>
  export default {
    name: "ai-chat-header"
  }
</script>

<style scoped>
  .hero-title-animated {
    animation: titleGlow 3s ease-in-out infinite;
  }
  .icon-pulse {
    animation: iconPulse 2s ease-in-out infinite;
  }
</style>

