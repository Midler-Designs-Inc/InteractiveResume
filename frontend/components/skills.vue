<template>
  <div class="card h-100 border-0 rounded-4 p-4 glass-card">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fs-4 fw-semibold mb-0 text-gradient-secondary">Technical Skills</h2>
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
            :class="viewMode === 'all' ? 'bg-gradient-purple shadow-purple-sm' : 'bg-transparent border border-purple-light text-muted'"
            @click="viewMode = 'all'"
        >
          VIEW ALL
        </button>
      </div>
    </div>

    <!-- FEATURED VIEW: Category Cards -->
    <div v-if="viewMode === 'featured'" class="row g-3">
      <div class="col-md-6 col-12" v-for="category in Object.values(skillsMap)" :key="category.name">
        <div class="skill-item border rounded-3 p-3 position-relative overflow-hidden">
          <span class="position-absolute top-0 end-0 m-3 small fw-semibold text-purple-primary">{{ category.totalYears }} years</span>
          <h3 class="fs-6 mb-2 text-white">{{ category.name }}</h3>
          <p class="text-secondary small mb-0">
            <span v-for="(skill, i) in category.skills" :key="skill" class="text-nowrap">
              {{ skill }}<span v-if="i < category.skills.length - 1" class="mx-1">&bullet;</span>
            </span>
          </p>
        </div>
      </div>
    </div>

    <!-- VIEW ALL: Scrollable List Grouped by Category -->
    <div v-else class="skills-list overflow-x-hidden">
      <div v-for="(category, i) in skillsMapFull" :key="i" class="mb-4">
        <h3 class="fs-5 fw-semibold text-purple-primary mb-3">{{ i }}</h3>
        <div class="row g-3">
          <div class="col-12" v-for="skill in category" :key="skill">
            <div class="card glass-card border-purple-light p-3">
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="fs-6 mb-0 text-white">{{ skill.technology }}</h4>
                <div class="d-flex align-items-center gap-3">
                  <div class="text-center">
<!--                    <span class="d-block small text-muted">Years</span>-->
                    <span class="text-white fw-semibold">{{ skill.years }} yrs</span>
                  </div>
                  <div class="text-center" style="width: 100px;">
                      <font-awesome-icon
                          v-for="i in 5"
                          :key="i"
                          :icon="i <= skill.proficiency ? 'fa-solid fa-star' : 'fa-regular fa-star'"
                          class="me-1 fs-7"
                          :class="{'text-warning': i <= skill.proficiency, 'text-secondary': i > skill.proficiency}"
                      />
<!--                    <span class="d-block small text-muted">Level</span>-->
<!--                    <span class="text-white fw-semibold">{{ proficiencyEnums[skill.proficiency] }}</span>-->
                  </div>
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
    name: "skills",
    async mounted () {
      // Fetch skill categories and existing skill responses from API
      const promises = [
        $fetch('/api/skills', {
          method: 'GET',
          query: {
            searchClause: {
              $and: [{
                years: { $gt: 0 },
                proficiency: { $gt: 0 }
              }]
            }
          }
        })
      ];
      const results = await Promise.all(promises);

      // assign the returned data to the appropriate variables
      this.skills = results[0].data;
    },
    data () {
      return {
        skills: [],
        viewMode: 'featured',
        proficiencyEnums: ["None", "Basic", "Intermediate", "Proficient", "Advanced", "Expert"]
      }
    },
    computed: {
      skillsMap () {
        // create an empty skills map object
        const skillsMap = {};

        // iterate over all skills and group them by category
        for (const skill of this.skills) {
          // skip hidden skills
          if (skill.hide) continue;

          // add a category if it doesn't exist yet
          if (!skillsMap[skill.category]) skillsMap[skill.category] = {
            name: skill.category,
            skills: [],
            totalYears: 0,
            proficiencyTotal: 0,
            proficiencyCount: 0
          };

          // add skill to the category
          skillsMap[skill.category].skills.push(skill.technology);

          // set the highest years of experience for the category
          skillsMap[skill.category].totalYears = skill.years > skillsMap[skill.category].totalYears
              ? skill.years : skillsMap[skill.category].totalYears;

          // update proficiency totals
          skillsMap[skill.category].proficiencyTotal += skill.proficiency;
          skillsMap[skill.category].proficiencyCount++;
        }

        // calculate the average proficiency for each category
        for (const category of Object.values(skillsMap)) {
          category.proficiencyAverage = Math.round(category.proficiencyTotal / category.proficiencyCount);
        }

        // return the skills map
        return skillsMap;
      },
      skillsMapFull () {
        // create an empty skills map object
        const skillsMap = {};

        // iterate over all skills and group them by category
        for (const skill of this.skills) {
          // add a category if it doesn't exist yet
          if (!skillsMap[skill.category]) skillsMap[skill.category] = [];

          // add skill to the category
          skillsMap[skill.category].push(skill);
        }

        // return the skills map
        console.log(skillsMap);
        return skillsMap;
      }
    },
    methods: {
      getSkillYears(technology) {
        const skill = this.skills.find(s => s.category === this.skillsMap.name && s.technology === technology);
        return skill ? skill.years : 0;
      },
      getSkillProficiency(technology) {
        const skill = this.skills.find(s => s.category === this.skillsMap.name && s.technology === technology);
        return skill ? skill.proficiency : 0;
      }
    }
  }
</script>

<style scoped>
  .skills-list {
    max-height: 50vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 5px;
  }

  .transition-all {
    transition: all 0.3s ease;
  }
</style>
