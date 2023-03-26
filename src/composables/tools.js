import idGenerator from './idGenerator'

const tools = [
  {
    id: idGenerator('field'),
    title: 'Input',
    icon: 'pencil',
    type: 'text',
  },
  {
    id: idGenerator('field'),
    title: 'Textarea',
    icon: 'file-text',
    type: 'textarea',
    placeholder: 'Enter text',
    description: 'This is a textarea field',
  },
  {
    id: idGenerator('field'),
    title: 'Select',
    icon: 'archive',
    type: 'select',
    placeholder: 'Select an option',
  },
  {
    id: idGenerator('field'),
    title: 'Checkbox',
    icon: 'checkbox',
    type: 'checkbox',
    label: 'Checkbox',
  },
  {
    id: idGenerator('field'),
    title: 'Radio',
    icon: 'radio-button',
    type: 'radio',
    label: 'Radio',
  },
  {
    id: idGenerator('field'),
    title: 'Datepicker',
    icon: 'calendar',
    type: 'datepicker',
  },
]

export default tools
