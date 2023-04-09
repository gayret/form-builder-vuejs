<script setup>
import { h } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
  },
})

const renderer = (payload) => {
  const { type, options, value, placeholder } = payload.field

  switch (type) {
    case 'text':
      return h('input', { type, value, placeholder })
    case 'checkbox':
      return h('input', { type, value, placeholder })
    case 'radio':
      return h('input', { type, value, placeholder })
    case 'datetime-local':
      return h('input', { type, value, placeholder })
    case 'email':
      return h('input', { type, value, placeholder })
    case 'number':
      return h('input', { type, value, placeholder })
    case 'password':
      return h('input', { type, value, placeholder })
    case 'textarea':
      return h('textarea', { value, placeholder })
    case 'select':
      return h('select', options.map((option) => h('option', option.label)))
    default:
      return h('div', 'Unknown field type')
  }
}
</script>

<template>
  <div>
    <div class="rows">
      <div class="row" v-for="(row, rowIndex) in props.modelValue.rows" :key="row.id">
        <div class="row-header">
          <div class="row-info">
            <div class="row-title">
              {{ row.title }}
            </div>
            <div class="row-description">
              {{ row.description }}
            </div>
          </div>
        </div>
        <div class="cols">
          <div class="col" v-for="col in row.cols" :key="col.id">
            <div class="col-header">
              <div class="col-info">
                <div class="col-title">
                  {{ col.title }}
                </div>
                <div class="col-description">
                  {{ col.description }}
                </div>
              </div>
            </div>
            <div class="col-content">
              <div v-for="field in col.fields" :key="field.id">
                <div>
                  <renderer :field="field" :style="field.style" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rows {
  border: 1px solid #ececec;
  padding: .5em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: .5em;
}

.cols .col {
  border: 1px solid #ececec;
  padding: .5em;
}


.col-content {
  display: flex;
  flex-direction: column;
  gap: .5em;
}
</style>