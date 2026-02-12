<template>
  <div class="skills-survey container py-5">
    <h1 class="text-center mb-4 text-purple-primary">Skills Survey</h1>
    <p class="text-center text-muted mb-5">Fill out your experience and proficiency for each technology below.</p>

    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-purple-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else class="row">
      <div v-for="(category, categoryName) in skillCategories" :key="categoryName" class="col-12 mb-4">
        <div class="card glass-card h-100">
          <div class="card-header bg-card border-purple">
            <h2 class="h5 mb-0 text-purple-primary">{{ categoryName }}</h2>
          </div>
          <div class="card-body">
            <p class="card-text category-description text-muted mb-4">{{ category.description }}</p>

            <div v-for="tech in category.technologies" :key="tech" class="row g-3 mb-3 p-3 bg-overlay-light">
              <div class="col-md-4">
                <h3 class="h6 text-purple-primary mb-0">{{ tech }}</h3>
              </div>
              <div class="col-md-4">
                <label class="form-label text-muted small">Years of Experience</label>
                <input
                  type="number"
                  class="form-control"
                  min="0"
                  :value="getModelValue(categoryName, tech, 'years')"
                  @input="updateModel(categoryName, tech, 'years', $event.target.value)"
                />
              </div>
              <div class="col-md-4">
                <label class="form-label text-muted small">Proficiency (1-5)</label>
                <input
                  type="number"
                  class="form-control"
                  min="1"
                  max="5"
                  :value="getModelValue(categoryName, tech, 'proficiency')"
                  @input="updateModel(categoryName, tech, 'proficiency', $event.target.value)"
                />
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
    name: 'SkillsSurveyPage',
    data () {
      return {
        model: {},
        skillCategories: {},
        loading: true,
        error: null
      }
    },
    async mounted () {
      this.loading = true;

      try {
        // Fetch skill categories and existing skill responses from API
        const promises = [
          fetch('/api/configs/skill_survey_map').then(res => res.json()),
          fetch('/api/skills').then(res => res.json())
        ];
        const results = await Promise.all(promises);

        // assign the returned data to the appropriate variables
        this.skillCategories = results[0].data;

        // Initialize model with empty objects for all categories/technologies
        this.initializeModel();

        // Populate model with existing skill responses
        for (const skill of results[1].data)
          this.model[skill.category].technologies[skill.technology] = skill;
      } catch (err) {
        // If API fails, start with empty model
        this.model = {}
      }

      this.loading = false
    },
    methods: {
      getModelValue (categoryName, tech, field) {
        if (this.model[categoryName] && this.model[categoryName].technologies[tech]) {
          return this.model[categoryName].technologies[tech][field] || 0
        }
        return 0
      },
      initializeModel () {
        // Initialize model with empty objects for all categories/technologies
        for (const [categoryName, category] of Object.entries(this.skillCategories)) {
          // create the category object if it doesn't exist
          if (!this.model[categoryName])
            this.model[categoryName] = { technologies: {} };

          // create the technology objects if they don't exist'
          for (const tech of category.technologies) {
            if (!this.model[categoryName].technologies[tech]) {
              this.model[categoryName].technologies[tech] = {
                years: 0,
                proficiency: 0
              }
            }
          }
        }
      },
      updateModel (categoryName, tech, field, value) {
        // Ensure category object exists
        if (!this.model[categoryName])
          this.model[categoryName] = { technologies: {}, overall_years: 0 };

        // Ensure technology object exists
        if (!this.model[categoryName].technologies[tech])
          this.model[categoryName].technologies[tech] = { years: 0, proficiency: 0 }

        // Update field
        this.model[categoryName].technologies[tech][field] = parseInt(value, 10) || 0;
      },
      async saveToApi () {
        try {
          // Convert model to array of skill objects
          const skillsArray = []
          for (const [categoryName, category] of Object.entries(this.model)) {
            for (const [tech, entry] of Object.entries(category.technologies || {})) {
              if (entry.years > 0 || entry.proficiency > 0) {
                skillsArray.push({
                  category: categoryName,
                  technology: tech,
                  years: entry.years,
                  proficiency: entry.proficiency
                })
              }
            }
          }

          await fetch('/api/skills', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(skillsArray)
          })
        } catch (err) {
          console.error('Failed to save data:', err)
        }
      }
    }
  }
</script>