import idGenerator from './idGenerator'

const defaultStyle = {
  width: '100%',
  backgroundColor: '#ffffff',
  color: '#222222',
  borderColor: '#ccc',
  borderRadius: '4px',
  padding: '8px',
}

const tools = [
  {
    id: idGenerator('field'),
    title: 'Input',
    icon: 'pencil',
    type: 'text',
    style: defaultStyle,
  },
  {
    id: idGenerator('field'),
    title: 'Textarea',
    icon: 'file-text',
    type: 'textarea',
    placeholder: 'Enter text',
    description: 'This is a textarea field',
    style: defaultStyle,
  },
  {
    id: idGenerator('field'),
    title: 'Select',
    icon: 'archive',
    type: 'select',
    placeholder: 'Select an option',
    style: defaultStyle,
    options: [
      {
        id: idGenerator('option'),
        label: 'Option 0',
        value: 'option0',
      },
    ],
  },
  {
    id: idGenerator('field'),
    title: 'Checkbox',
    icon: 'checkbox',
    type: 'checkbox',
    label: 'Checkbox',
    style: defaultStyle,
  },
  {
    id: idGenerator('field'),
    title: 'Radio',
    icon: 'radio-button',
    type: 'radio',
    label: 'Radio',
    style: defaultStyle,
  },
  {
    id: idGenerator('field'),
    title: 'Datepicker',
    icon: 'calendar',
    type: 'datetime-local',
    style: defaultStyle,
  },
]

export default tools
