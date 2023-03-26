<script setup>
import 'remixicon/fonts/remixicon.css'
import { ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '17px',
  },
})

const line = ref(`ri-${props.name}-line`)
const fill = ref(`ri-${props.name}-fill`)

const onHover = ref(false)

const generateClassName = () => {
  if (onHover.value) {
    return fill.value
  } else {
    return line.value
  }
}

const onToggleHover = () => {
  onHover.value = !onHover.value
}
</script>

<template>
  <i @mouseover="onToggleHover" @mouseleave="onToggleHover" :class="generateClassName()"></i>
</template>

<style scoped>
i {
  font-size: v-bind('props.size');
}
</style>
