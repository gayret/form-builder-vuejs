<script setup>
import { ref, watch } from 'vue'
import Icon from './Icon.vue'

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


</script>

<template>
  <div class="card properties">
    <h4>Field properties</h4>
    <div class="field">
      <div class="field-header">
        <div class="icon-and-title">
          <Icon size="30px" :name="field.icon" :key="field.icon" />
          <input type="text" v-model="field.title">
        </div>
        <div class="id">{{ field.id }}</div>
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

input {
  width: 100%;
}

.field-header .icon-and-title {
  display: flex;
  align-items: center;
  gap: .5em;
}

.field-header .id {
  text-align: center;
}
</style>