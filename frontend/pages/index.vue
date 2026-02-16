<template>
  <div class="portfolio-bg py-5 px-3 px-md-4">
    <!-- AI Chat Header Component !-->
    <ai-chat-header/>

    <!-- Body Sections -->
    <div class="container-fluid px-3">
      <div class="row g-4 mb-4">
        <!-- Technical Skills -->
        <div class="col-lg-6 col-12">
          <skills/>
        </div>

        <!-- History -->
        <div class="col-lg-6 col-12">
          <history/>
        </div>

        <!-- Project Showcase -->
        <div class="col-12">
          <projects/>
        </div>

        <!-- Contact Methods -->
        <div class="col-12">
          <contact/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PortfolioComponent',
  }
</script>