<template>
  <div class="card h-100 border-0 rounded-4 p-4 glass-card">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fs-4 fw-semibold mb-0 text-gradient-secondary">History</h2>
      <div class="btn-group" role="group">
        <button
            type="button"
            class="btn btn-sm px-3 py-1 text-white transition-all"
            :class="viewMode === 'featured' ? 'bg-gradient-purple shadow-purple-sm' : 'bg-transparent border border-purple-light text-muted'"
            @click="viewMode = 'featured'"
        >
          FEATURED
        </button>
        <button
            type="button"
            class="btn btn-sm px-3 py-1 text-white transition-all"
            :class="viewMode === 'timeline' ? 'bg-gradient-purple shadow-purple-sm' : 'bg-transparent border border-purple-light text-muted'"
            @click="viewMode = 'timeline'"
        >
          TIMELINE
        </button>
      </div>
    </div>


    <div class="d-flex flex-column gap-3">
      <div class="card-interactive border rounded-3 p-3 d-flex gap-3" v-for="record in workHistory" :key="record.title">
        <div class="icon-container d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 fs-4">
          {{ record.icon }}
        </div>
        <div class="flex-grow-1">
          <h3 class="fs-6 mb-1 text-white">{{ record.title }}</h3>
          <p class="text-muted small mb-1">{{ record.company }}</p>
          <p class="text-muted small mb-2">{{ record.description }}</p>
          <div class="small text-purple-primary">{{ record.duration }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "history",
    data () {
      return {
        viewMode: 'featured',
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