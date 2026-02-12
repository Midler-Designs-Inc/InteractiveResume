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
            <h2 class="h5 mb-0 text-purple-primary d-flex align-items-center justify-content-between gap-3 py-3 px-4">
              {{ categoryName }}
              <span class="w-auto d-flex align-items-center gap-2">
                <label class="form-label text-muted small">Sort Order</label>
                <input
                    type="number"
                    class="form-control form-control-sm w-auto"
                    style="width: 75px !important;"
                    :value="model[categoryName].technologies[Object.keys(model[categoryName].technologies)[0]].categorySort"
                    @change="updateCategorySort(categoryName, $event.target.value)"
                />
              </span>
            </h2>
          </div>
          <div class="card-body">
            <p class="card-text category-description text-muted mb-4">{{ category.description }}</p>

            <div v-for="tech in category.technologies" :key="tech" class="row g-3 mb-3 p-3 bg-overlay-light">
              <div class="col-md-3">
                <h3 class="h6 text-purple-primary mb-0">{{ tech }}</h3>
              </div>
              <div class="col-md-3">
                <label class="form-label text-muted small">Years of Experience</label>
                <input
                  type="number"
                  class="form-control"
                  min="0"
                  :value="getModelValue(categoryName, tech, 'years')"
                  @input="updateModel(categoryName, tech, 'years', $event.target.value)"
                />
              </div>
              <div class="col-md-3">
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
              <div class="col-md-3 d-flex flex-column align-items-center justify-content-start">
                <label class="form-check-label text-muted small">Hide Skill</label>
                <div class="form-check form-switch form-switch-lg my-auto form-check-reverse">
                  <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="model[categoryName].technologies[tech].hide"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      v-if="!loading"
      class="btn bg-gradient-purple btn-float-save"
      @click="saveToApi"
    >
      Save
    </button>
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
          this.model[skill.category].technologies[skill.technology] = {categorySort: 0, ...skill};
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
                proficiency: 0,
                hide: false,
                categorySort: 0
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
          this.model[categoryName].technologies[tech] = { years: 0, proficiency: 0, hide: false }

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
                  proficiency: entry.proficiency,
                  hide: entry.hide,
                  categorySort: entry.categorySort
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
      },
      updateCategorySort(categoryName, value) {
        for (const tech of Object.keys(this.model[categoryName].technologies)) {
          this.model[categoryName].technologies[tech].categorySort = parseInt(value, 10) || 0;
        }
      }
    },
  }
</script>

<style scoped>
  .btn-float-save {
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 1000;
    border-radius: 50px;
    padding: 12px 24px;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(106, 13, 173, 0.3);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .btn-float-save:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(106, 13, 173, 0.4);
  }

  .btn-float-save:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(106, 13, 173, 0.3);
  }
</style>
