const formBuilderJSON = {
  rows: [
    {
      id: 1,
      title: 'Row 1',
      description: 'Row 1 description',
      cols: [
        {
          id: 1,
          title: 'Col 1',
          description: 'Col 1 description',
          fields: [
            {
              id: 1,
              title: 'Text',
              icon: 'pencil',
              type: 'text',
              placeholder: 'Enter text',
              description: 'This is a text field',
            },
          ],
        },
        {
          id: 2,
          title: 'Col 2',
          description: 'Col 2 description',
          fields: [
            {
              id: 4,
              title: 'Textarea',
              icon: 'file-text',
              type: 'textarea',
              placeholder: 'Enter text',
              description: 'This is a textarea field',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Row 2',
      description: 'Row 2 description',
      cols: [
        {
          id: 3,
          title: 'Col 3',
          description: 'Col 3 description',
          fields: [
            {
              id: 5,
              title: 'Select',
              icon: 'archive',
              type: 'select',
              placeholder: 'Select an option',
              description: 'This is a select field',
              options: [
                {
                  id: 1,
                  label: 'Option 1',
                  value: 'option-1',
                },
                {
                  id: 2,
                  label: 'Option 2',
                  value: 'option-2',
                },
                {
                  id: 3,
                  label: 'Option 3',
                  value: 'option-3',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default formBuilderJSON
