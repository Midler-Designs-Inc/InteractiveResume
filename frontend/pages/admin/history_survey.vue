<template>
  <div class="history-survey container py-5">
    <h1 class="text-center mb-4 text-purple-primary">History Survey</h1>
    <p class="text-center text-muted mb-5">Add or remove history records to build your timeline.</p>

    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-purple-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else class="row">
      <div v-for="(record, index) in historyRecords" :key="record.id || index" class="col-12 mb-4">
        <div class="card glass-card h-100">
          <div class="card-header bg-card border-purple">
            <h2 class="h5 mb-0 text-purple-primary d-flex align-items-center justify-content-between gap-3 py-3">
              {{ record.title }}
              <button
                v-if="historyRecords.length > 0"
                class="btn btn-sm btn-danger"
                @click="removeRecord(index)"
              >
                <font-awesome-icon :icon="'fa-solid fa-trash'" class="fs-7"/>
              </button>
            </h2>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label text-muted small">Title</label>
                <input
                  type="text"
                  class="form-control"
                  :value="record.title"
                  @input="updateRecord(index, 'title', $event.target.value)"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label text-muted small">Start Date</label>
                <input
                  type="date"
                  class="form-control"
                  :value="record.startDate"
                  @input="updateRecord(index, 'startDate', $event.target.value)"
                />
              </div>
              <div class="col-md-3">
                <label class="form-label text-muted small">End Date</label>
                <input
                  type="date"
                  class="form-control"
                  :value="record.endDate"
                  @input="updateRecord(index, 'endDate', $event.target.value)"
                />
              </div>
            </div>
            <div class="row g-3 mt-2">
              <div class="col-md-4">
                <label class="form-label text-muted small">Type</label>
                <select
                  class="form-select"
                  :value="record.type"
                  @change="updateRecord(index, 'type', $event.target.value)"
                >
                  <option value="work">Work</option>
                  <option value="skill_acquisition">Skill Acquisition</option>
                  <option value="experience_event">Experience Event</option>
                  <option value="life_event">Life Event</option>
                </select>
              </div>
              <div class="col-md-8 d-flex flex-column align-items-start justify-content-start">
                <label class="form-check-label text-muted small mt-2">Hide Record</label>
                <div class="form-check form-switch form-switch-lg my-auto form-check-reverse">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="record.hide"
                    @change="updateRecord(index, 'hide', $event.target.checked)"
                  >
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <label class="form-label text-muted small">Description</label>
                <textarea
                  class="form-control"
                  rows="5"
                  :value="record.description"
                  @input="updateRecord(index, 'description', $event.target.value)"
                ></textarea>
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

    <button
      v-if="!loading"
      class="btn btn-purple-outline btn-float-add"
      @click="addRecord"
    >
      <font-awesome-icon :icon="['fas', 'plus']" /> Add Record
    </button>
  </div>
</template>

<script>
  export default {
    name: 'HistorySurveyPage',
    data () {
      return {
        historyRecords: [],
        loading: true,
        error: null
      }
    },
    async mounted () {
      this.loading = true;

      try {
        // Fetch existing history entries from API
        const response = await fetch('/api/history');
        const data = await response.json();

        if (data.success && data.data) {
          // Initialize records with existing data
          this.historyRecords = data.data.map(record => ({
            id: record._id,
            title: record.title || '',
            startDate: record.startDate || '',
            endDate: record.endDate || '',
            type: record.type || 'work',
            description: record.description || '',
            hide: record.hide || false
          }));
        } else {
          // Start with an empty record if no data
          this.historyRecords = [this.createEmptyRecord()];
        }
      } catch (err) {
        // If API fails, start with an empty record
        this.historyRecords = [this.createEmptyRecord()];
      }

      this.loading = false;
    },
    methods: {
      createEmptyRecord () {
        return {
          id: null,
          title: '',
          startDate: '',
          endDate: '',
          type: 'work',
          description: '',
          hide: false
        };
      },
      addRecord () {
        this.historyRecords.push(this.createEmptyRecord());
      },
      removeRecord (index) {
        this.historyRecords.splice(index, 1);
      },
      updateRecord (index, field, value) {
        this.historyRecords[index][field] = value;
      },
      async saveToApi () {
        try {
          // Convert records to array of history objects
          const historyArray = this.historyRecords.map(record => ({
            title: record.title,
            startDate: record.startDate,
            endDate: record.endDate,
            type: record.type,
            description: record.description,
            hide: record.hide
          }));

          await fetch('/api/history', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(historyArray)
          });
        } catch (err) {
          console.error('Failed to save data:', err);
        }
      }
    }
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

  .btn-float-add {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 1000;
    border-radius: 50px;
    padding: 12px 24px;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(106, 13, 173, 0.3);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .btn-float-add:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(106, 13, 173, 0.4);
  }

  .btn-float-add:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(106, 13, 173, 0.3);
  }
</style>
