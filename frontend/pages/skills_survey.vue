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
      <div v-for="(category, categoryName) in filteredSkillCategories" :key="categoryName" class="col-12 mb-4">
        <div class="card glass-card h-100">
          <div class="card-header bg-card border-purple">
            <h2 class="h5 mb-0 text-purple-primary">{{ categoryName }}</h2>
          </div>
          <div class="card-body">
            <p class="card-text category-description text-muted mb-4">{{ category.description }}</p>

            <div v-for="tech in category.technologies" :key="tech" class="row g-3 mb-3 p-3 bg-overlay-light rounded">
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
        skillCategories: {
          "Frontend Engineering": {
            "description": "User-facing application development, interaction, performance, and accessibility",
            "technologies": [
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Vue",
              "Nuxt",
              "jQuery",
              "Bootstrap",
              "Tailwind CSS",
              "SASS / SCSS",
              "CSS Modules",
              "Styled Components",
              "Web Components",
              "Vite",
              "Webpack",
              "Parcel",
              "npm",
              "Yarn",
              "pnpm",
              "Frontend Performance Optimization",
              "Accessibility (a11y)",
              "Responsive Design",
              "Cross-Browser Compatibility"
            ]
          },
          "Backend Engineering / APIs": {
            "description": "Business logic, services, APIs, and server-side application development",
            "technologies": [
              "Node.js",
              "Python",
              "PHP",
              "Ruby",
              "Java",
              "C#",
              "C",
              "C++",
              "Lua",
              "FastAPI",
              "Flask",
              "Django",
              "Express.js",
              "MoleculerJS",
              "REST APIs",
              "GraphQL",
              "gRPC",
              "WebSockets",
              "Microservices Architecture",
              "Monolith Architecture",
              "API Versioning",
              "API Integrations"
            ]
          },
          "Mobile Application Development": {
            "description": "Native and cross-platform mobile applications",
            "technologies": [
              "React Native",
              "Expo",
              "Cordova / PhoneGap",
              "Capacitor",
              "Progressive Web Apps (PWA)",
              "Android App Architecture",
              "iOS App Architecture",
              "Mobile UI/UX Design",
              "Mobile Performance Optimization"
            ]
          },
          "Desktop Application Development": {
            "description": "Native and cross-platform desktop software",
            "technologies": [
              "C# / .NET",
              "WinForms",
              "WPF",
              "Electron",
              "Native Windows Development",
              "Cross-Platform Desktop Apps",
              "Installer / Packaging Systems"
            ]
          },
          "Cloud & Infrastructure": {
            "description": "Cloud platforms, hosting, scalability, and infrastructure design",
            "technologies": [
              "AWS",
              "Azure",
              "GCP",
              "Linux",
              "Debian",
              "Ubuntu",
              "Server Provisioning",
              "Virtual Machines",
              "Load Balancing",
              "Auto Scaling",
              "High Availability",
              "Disaster Recovery",
              "Cloud Networking",
              "Cloud Security"
            ]
          },
          "DevOps & Platform Engineering": {
            "description": "Build pipelines, deployment, observability, and operational reliability",
            "technologies": [
              "Docker",
              "Docker Compose",
              "Kubernetes",
              "CI/CD Pipelines",
              "Automated Deployments",
              "Infrastructure as Code",
              "Git",
              "GitHub Actions",
              "GitLab CI",
              "Monitoring & Logging",
              "Environment Management",
              "Secrets Management",
              "Release Management"
            ]
          },
          "Databases & Persistence": {
            "description": "Data modeling, storage, querying, and performance",
            "technologies": [
              "PostgreSQL",
              "MySQL",
              "MongoDB",
              "SQL",
              "NoSQL",
              "Database Design",
              "Schema Design",
              "Indexing",
              "Query Optimization",
              "Migrations",
              "Multi-Tenant Databases",
              "Data Integrity",
              "Backups & Recovery"
            ]
          },
          "Messaging, Events & Integration": {
            "description": "Asynchronous systems, decoupling, and system-to-system communication",
            "technologies": [
              "RabbitMQ",
              "Message Brokers",
              "Event Buses",
              "Publish/Subscribe Patterns",
              "Queue-Based Processing",
              "Webhook Systems",
              "Asynchronous Processing",
              "Distributed Systems Concepts"
            ]
          },
          "Security & Identity": {
            "description": "Authentication, authorization, and compliance-driven security",
            "technologies": [
              "OAuth",
              "OAuth2 Flows",
              "SSO Integrations",
              "JWT",
              "Role-Based Access Control (RBAC)",
              "API Security",
              "Secure Credential Storage",
              "HIPAA Compliance",
              "Regulatory Compliance",
              "Audit Logging"
            ]
          },
          "Testing & Quality Engineering": {
            "description": "Automated testing, validation, and quality assurance",
            "technologies": [
              "Mocha",
              "Selenium",
              "Nightwatch",
              "Unit Testing",
              "Integration Testing",
              "End-to-End Testing",
              "Test Automation",
              "Test Data Management",
              "Regression Testing"
            ]
          },
          "UI/UX & Product Design": {
            "description": "Visual design, interaction design, and usability",
            "technologies": [
              "UI Design",
              "UX Design",
              "Design Systems",
              "Wireframing",
              "Prototyping",
              "User Flows",
              "Accessibility Design",
              "Visual Consistency",
              "Photoshop"
            ]
          },
          "Game Development & Interactive Media": {
            "description": "Games, simulations, and real-time interactive systems",
            "technologies": [
              "Unity",
              "Unreal Engine",
              "Godot",
              "Valve Hammer Editor",
              "RPG Toolkit",
              "Game Design",
              "Game Development",
              "Physics Systems",
              "Scripting Engines",
              "Flash",
              "Corona SDK"
            ]
          },
          "3D, AR, VR & Simulation": {
            "description": "Immersive and spatial computing applications",
            "technologies": [
              "Blender",
              "3D Modeling",
              "VR Application Development",
              "AR Application Development",
              "Simulation Systems",
              "Real-Time Rendering"
            ]
          },
          "AI & Applied Machine Learning": {
            "description": "Integrating and evaluating AI models in production systems",
            "technologies": [
              "AI Model Integration",
              "Local AI Models",
              "AI Agent Systems",
              "AI API Integrations",
              "AI-Assisted Content Generation",
              "Model Evaluation & Benchmarking",
              "Human-in-the-Loop Training",
              "Prompt Engineering"
            ]
          },
          "Enterprise Systems & Platforms": {
            "description": "Large-scale business platforms and vendor ecosystems",
            "technologies": [
              "Salesforce",
              "Enterprise Integrations",
              "CRM Systems",
              "ERP Concepts",
              "Electronic Records Systems",
              "Vendor APIs",
              "Multi-Tenant SaaS Architecture"
            ]
          },
          "Telephony & Communications": {
            "description": "Voice, messaging, and real-time communication systems",
            "technologies": [
              "Twilio",
              "Digital Call Centers",
              "Softphone Systems",
              "SMS Integrations",
              "Email Integrations",
              "SendGrid",
              "Real-Time Communications APIs"
            ]
          },
          "Hardware, Robotics & IoT": {
            "description": "Physical systems and hardware-integrated software",
            "technologies": [
              "Hardware Integration",
              "Robotics",
              "Embedded Systems Concepts",
              "Device Communication",
              "Sensor Integration"
            ]
          },
          "Product, Project & Delivery": {
            "description": "Translating business needs into shipped systems",
            "technologies": [
              "Business Requirements Analysis",
              "Functional Requirements",
              "Technical Documentation",
              "Business Documentation",
              "Project Management",
              "Agile",
              "Scrum",
              "Client Discovery",
              "Stakeholder Communication",
              "End-to-End Delivery"
            ]
          },
          "Operations & Business Ownership": {
            "description": "Running, selling, and sustaining software businesses",
            "technologies": [
              "Client Acquisition",
              "Business Operations",
              "System Ownership",
              "Solo Full-Stack Delivery",
              "Cost Optimization",
              "Long-Term System Maintenance"
            ]
          }
        },
        loading: true,
        error: null
      }
    },
    computed: {
      filteredSkillCategories () {
        const filtered = {}
        for (const [categoryName, category] of Object.entries(this.skillCategories)) {
          const technologies = category.technologies.filter(tech => {
            const entry = this.model[categoryName]?.technologies[tech]
            if (!entry) return false
            return entry.years > 0 || entry.proficiency > 0
          })
          if (technologies.length > 0) {
            filtered[categoryName] = {
              ...category,
              technologies
            }
          }
        }
        return filtered
      }
    },
    async mounted () {
      try {
        // Load saved data from API
        const response = await fetch('/api/read_skills_survey')
        if (response.ok) {
          const savedData = await response.json()
          this.model = savedData
        }
      } catch (err) {
        // If API fails, start with empty model
        this.model = {}
      }

      // Initialize model with empty objects for all categories/technologies
      for (const [categoryName, category] of Object.entries(this.skillCategories)) {
        // create the category object if it doesn't exist
        if (!this.model[categoryName])
          this.model[categoryName] = { technologies: {}, overall_years: 0 };

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

      this.loading = false
    },
    methods: {
      getModelValue (categoryName, tech, field) {
        if (this.model[categoryName] && this.model[categoryName].technologies[tech]) {
          return this.model[categoryName].technologies[tech][field] || 0
        }
        return 0
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
          const dataToSave = {}
          for (const [categoryName, category] of Object.entries(this.model)) {
            const technologies = {}
            for (const [tech, entry] of Object.entries(category.technologies || {})) {
              if (entry.years > 0 || entry.proficiency > 0) {
                technologies[tech] = entry
              }
            }
            if (Object.keys(technologies).length > 0) {
              dataToSave[categoryName] = {
                ...category,
                technologies
              }
            }
          }

          await fetch('/api/write_skills_survey', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSave)
          })
        } catch (err) {
          console.error('Failed to save data:', err)
        }
      }
    },
    watch: {
      model: {
        deep: true,
        handler () {
          this.saveToApi()
        }
      }
    },
  }
</script>

<style scoped>
.skills-survey {
  max-width: 900px;
  margin: 0 auto;
}

.category-description {
  font-style: italic;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
