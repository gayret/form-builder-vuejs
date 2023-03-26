<script setup>
import tools from '../composables/tools'
import Icon from './Icon.vue'

const onDrag = (e, tool) => {
  e.dataTransfer.setData('text/plain', JSON.stringify(tool))
}
</script>

<template>
  <div class="card toolbox">
    <h4>Toolbox</h4>
    <ul>
      <li v-for="tool in tools" :key="tool.title" draggable="true" @dragstart="onDrag($event, tool)">
        <span class="icon">
          <Icon :name="tool.icon" />
        </span>
        <span class="title">
          {{ tool.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.toolbox {
  height: max-content;
  position: sticky;
  top: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: .5em;
}

li {
  display: flex;
  align-items: center;
  gap: .5em;
  background-color: #dfdfdf;
  padding: .5em;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
}

li:hover {
  background-color: #ccc;
}
</style>