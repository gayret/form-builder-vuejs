<script setup>
import { ref, reactive } from 'vue'
import Toolbox from './components/Toolbox.vue'
import Designer from './components/Designer.vue'
import Preview from './components/Preview.vue'
import Properties from './components/Properties.vue'
import hardFormBuilderJSON from './composables/hardFormBuilderJSON'

const formBuilderJSON = reactive(hardFormBuilderJSON)

const selectedField = ref({
  id: 0,
  title: '',
  icon: '',
})

const mode = ref('designer')

const toggleMode = () => {
  mode.value = mode.value === 'designer' ? 'preview' : 'designer'
}

const changeSelectedField = (field) => {
  selectedField.value = field
}
</script>

<template>
  <div class="wrapper">
    <div class="form-builder">
      <div class="form-builder-header">
        <h1>Form Builder</h1>
        <div class="btn-group">
          <button @click="toggleMode">{{ mode === 'designer' ? 'Preview' : 'Designer' }}</button>
        </div>
      </div>
      <div class="form-builder-wrapper">
        <Toolbox />
        <div class="main">
          <Designer v-if="mode === 'designer'" v-model="formBuilderJSON" @on-select-field="changeSelectedField" />
          <Preview v-else v-model="formBuilderJSON" />
        </div>
        <Properties v-model="selectedField" />
      </div>
    </div>
    <footer
      style="font-size: 10px; font-weight: 200; display: flex; justify-content: space-around; width: 100%; margin-top: 2em">
      <p>
        Document on <a
          href="https://safa.medium.com/form-builder-nas%C4%B1l-yap%C4%B1l%C4%B1r-vuejs-ile-87527be943bd">Medium</a>
      </p>
      <p>
        Source on <a href="https://github.com/gayret/form-builder-vuejs">GitHub</a>
      </p>
      <p>
        Developed by <a href="https://safagayret.com">Safa Gayret</a>
      </p>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  place-items: center;
  align-items: flex-end;
  min-height: 100vh;
}

.form-builder {
  max-width: 1600px;
  min-height: 100%;
}

.form-builder .form-builder-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em 1em;
}

.form-builder-wrapper {
  display: grid;
  grid-template-columns: 200px 1000px 250px;
  gap: .5em;
}

@media (max-width: 1200px) {
  .form-builder-wrapper {
    grid-template-columns: 100vw;
  }
}
</style>