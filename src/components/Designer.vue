
<script setup>
import Icon from './Icon.vue'
import idGenerator from '../composables/idGenerator'

const emit = defineEmits(['update:modelValue', 'on-select-field'])

const props = defineProps({
  modelValue: {
    type: Object,
  },
})

const onSelectField = (field) => {
  emit('on-select-field', field)
}

const onMoveUp = (obj, objIndex) => {
  const rows = props.modelValue.rows
  const prevRow = rows[objIndex - 1]
  rows[objIndex - 1] = obj
  rows[objIndex] = prevRow
}

const onMoveDown = (obj, objIndex) => {
  const rows = props.modelValue.rows
  const nextRow = rows[objIndex + 1]
  rows[objIndex + 1] = obj
  rows[objIndex] = nextRow
}

const onDeleteRow = (rowIndex) => {
  const rows = props.modelValue.rows
  rows.splice(rowIndex, 1)
}

const onAddRow = () => {
  const rows = props.modelValue.rows
  rows.push({
    id: idGenerator('row'),
    title: `Row ${rows.length + 1}`,
    description: `Row ${rows.length + 1} description`,
    cols: [
      {
        id: idGenerator('col'),
        title: 'Col 1',
        description: 'Col 1 description',
        fields: [],
      },
    ],
  })
}

const onAddColInRow = (row) => {
  const cols = row.cols
  cols.push({
    id: idGenerator('col'),
    title: `Col ${row.cols.length + 1}`,
    description: `Col ${row.cols.length + 1} description`,
    fields: [],
  })
}

const onMoveUpCol = (col, colIndex, row) => {
  const cols = row.cols
  const prevCol = cols[colIndex - 1]
  cols[colIndex - 1] = col
  cols[colIndex] = prevCol
}

const onMoveDownCol = (col, colIndex, row) => {
  const cols = row.cols
  const nextCol = cols[colIndex + 1]
  cols[colIndex + 1] = col
  cols[colIndex] = nextCol
}

const onDeleteCol = (col, colIndex, row) => {
  const cols = row.cols
  cols.splice(colIndex, 1)
}

const onDeleteField = (e, fieldIndex, fields) => {
  e.stopPropagation()
  fields.splice(fieldIndex, 1)
}

const onDrop = (e, col) => {
  const field = JSON.parse(e.dataTransfer.getData('text/plain'))
  col.fields.push(field)
}

</script>

<template>
  <div>
    <div class="rows">
      <div class="row" v-for="(row, rowIndex) in props.modelValue.rows" :key="row.id">
        <div class="row-header">
          <div class="row-info">
            <div class="row-title">
              <input type="text" v-model="row.title">
            </div>
            <div class="row-description">
              <input type="text" v-model="row.description">
            </div>
          </div>
          <div class="row-actions">
            <button class="btn" @click="onAddColInRow(row)">
              <Icon name="add" />
              Add Column
            </button>

            <button v-if="rowIndex !== 0" class="btn" title="Move up" @click="onMoveUp(row, rowIndex)">
              <Icon name="arrow-up-s" />
            </button>

            <button v-if="props.modelValue.rows.length - 1 !== rowIndex" class="btn" title="Move down"
              @click="onMoveDown(row, rowIndex)">
              <Icon name="arrow-down-s" />
            </button>

            <button v-if="props.modelValue.rows.length > 1" class="btn" title="Delete" @click="onDeleteRow(rowIndex)">
              <Icon name="delete-bin" />
            </button>
          </div>
        </div>
        <div class="cols">
          <div class="col" v-for="(col, colIndex) in row.cols" :key="col.id" @dragenter.prevent @dragover.prevent
            @drop="onDrop($event, col)">
            <div class="col-header">
              <div class="col-info">
                <div class="col-title">
                  <input type="text" v-model="col.title">
                </div>
                <div class="col-description">
                  <input type="text" v-model="col.description">
                </div>
              </div>
              <div class="col-actions">
                <button v-if="colIndex !== 0" class="btn" @click="onMoveUpCol(col, colIndex, row)" title="Move left">
                  <Icon name="arrow-left-s" />
                </button>

                <button v-if="row.cols.length - 1 !== colIndex" class="btn" @click="onMoveDownCol(col, colIndex, row)"
                  title="Move right">
                  <Icon name="arrow-right-s" />
                </button>

                <button v-if="row.cols.length > 1" class="btn" title="Delete" @click="onDeleteCol(col, colIndex, row)">
                  <Icon name="delete-bin" />
                </button>
              </div>
            </div>
            <div class="col-content">
              <div class="field" v-for="field in col.fields" :key="field.id" @click="onSelectField(field)">
                <div class="field-header">
                  <div class="field-icon">
                    <Icon size="25px" :name="field.icon" />
                  </div>
                  <div class="field-info">
                    <strong>{{ field.title }}</strong>
                    ({{ field.type }})
                  </div>
                </div>
                <div class="field-actions">
                  <button class="btn" title="Delete" @click="onDeleteField($event, fieldIndex, col.fields)">
                    <Icon name="delete-bin" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="designer-footer">
      <button class="btn" @click="onAddRow">
        <Icon name="add" />
        Add Row
      </button>
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

.row-header,
.col-header {
  display: flex;
  justify-content: space-between;
}

.row-actions,
.col-actions {
  display: flex;
  gap: .5em;
  align-items: flex-start;
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

.field {
  border: 1px solid #ccc;
  padding: .5em;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
}

.col-content {
  display: flex;
  flex-direction: column;
  gap: .5em;
}

/* Hover Effects */
.row-header .row-actions {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.row:hover .row-header .row-actions {
  opacity: 1;
}

.col-header .col-actions {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.col:hover .col-header .col-actions {
  opacity: 1;
}

.designer-footer {
  display: flex;
  justify-content: center;
  margin-top: 1em;
}

input {
  border: none;
  background-color: hsl(var(--b));
}
</style>