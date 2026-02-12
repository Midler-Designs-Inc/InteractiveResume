<template>
  <div class="card h-100 border-0 rounded-4 p-4 glass-card">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fs-4 fw-semibold mb-0 text-gradient-secondary">Technical Skills</h2>
      <a href="#" class="btn btn-sm rounded-pill px-3 btn-purple-outline text-decoration-none text-uppercase" style="font-size: 0.75rem;">
        View All
      </a>
    </div>
    <div class="row g-3">
      <div class="col-md-6 col-12" v-for="category in Object.values(skillsMap)" :key="category.name">
        <div class="skill-item border rounded-3 p-3 position-relative overflow-hidden">
          <span class="position-absolute top-0 end-0 m-3 small fw-semibold text-purple-primary">{{ category.totalYears }} years</span>
          <h3 class="fs-6 mb-2 text-white">{{ category.name }}</h3>
          <p class="text-secondary small mb-0">
            <span v-for="(skill, i) in category.skills" :key="skill" class="text-nowrap">
              {{ skill }}<span v-if="i < category.skills.length - 1" class="mx-1">&bullet;</span>
            </span>
          </p>
<!--          <div class="skill-progress position-absolute bottom-0 start-0" :style="{ width: category.proficiencyAverage * 20 + '%' }"></div>-->
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
              years: { $gt: 0 },
              proficiency: { $gt: 0 }
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
      }
    }
  }
</script>
