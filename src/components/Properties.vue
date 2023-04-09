<script setup>
import { ref, watch } from 'vue'
import Icon from './Icon.vue'
import idGenerator from '../composables/idGenerator'

const emit = defineEmits(['update:modelValue'])

const prop = defineProps({
  modelValue: {
    type: Object,
  },
})


const field = ref(prop.modelValue)

watch(
  () => prop.modelValue,
  (val) => {
    field.value = val
  }
)

const isInput = (type) => {
  return ['text', 'number', 'email', 'password', 'datetime-local'].includes(type)
}

const onAddOption = (options) => {
  options.push({
    id: idGenerator('option'),
    label: 'Option ' + options.length,
    value: 'option ' + options.length,
  })
}

const onRemoveOption = (options, optionIndex) => {
  options.splice(optionIndex, 1)
}

</script>

<template>
  <div class="properties">
    <div class="card" v-if="field.id !== 0">
      <div class="settings">
        <h4>Field properties</h4>
        <div class="propertie">
          <div class="propertie-header">
            <div class="icon-and-title">
              <Icon size="30px" :name="field.icon" :key="field.icon" />
              <input type="text" v-model="field.title">
            </div>
            <div class="id">{{ field.id }}</div>
          </div>
          <div class="propertie-content">
            <div class="propertie-row">
              <div class="type" v-if="isInput(field.type)">
                <label for="type">Type</label>
                <select name="type" id="type" v-model="field.type">
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                  <option value="email">Email</option>
                  <option value="password">Password</option>
                  <option value="datetime-local">Datetime</option>
                </select>
              </div>

              <div class="value" v-if="isInput(field.type) || field.type === 'textarea'">
                <label for="value">Value</label>
                <input type="text" v-model="field.value">
              </div>

              <div class="placeholder" v-if="isInput(field.type) || field.type === 'textarea'">
                <label for=" placeholder">Placeholder</label>
                <input type="text" v-model="field.placeholder">
              </div>

              <div class="options" v-if="field.type === 'select'">
                <label for="options">Options</label>
                <div class="option" v-for="(option, optionIndex) in field.options" :key="option.id">
                  <input type="text" v-model="option.label">
                  <button class="btn" @click="onRemoveOption(field.options, optionIndex)">
                    <Icon name="close" />
                  </button>
                </div>
                <button class="btn" @click="onAddOption(field.options)">
                  <Icon name="add" />
                  Add Option
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="design">
        <h4>Design properties</h4>
        <div class="propertie">
          <div class="background-color">
            <label for="background-color">Background color</label>
            <input type="color" v-model="field.style.backgroundColor">
          </div>
        </div>
        <div class="propertie">
          <div class="color">
            <label for="color">Font color</label>
            <input type="color" v-model="field.style.color">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.properties {
  height: max-content;
  position: sticky;
  top: 0;
}

input,
select {
  width: 100%;
  padding: .1em;

}

.propertie-header .icon-and-title {
  display: flex;
  align-items: center;
  gap: .5em;
}

.propertie-header .id {
  text-align: center;
}

.option {
  display: flex;
  align-items: center;
  gap: .5em;
}

h4 {
  margin-bottom: 0;
  text-align: right;
}

.design h4 {
  margin-top: 2em;
}
</style>