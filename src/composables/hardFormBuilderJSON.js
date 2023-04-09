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
              title: 'Input',
              icon: 'pencil',
              type: 'text',
              style: {
                width: '100%',
                backgroundColor: 'white',
                color: 'black',
                borderColor: '#ccc',
                borderRadius: '4px',
                padding: '8px',
              },
            },
          ],
        },
      ],
    },
  ],
}

export default formBuilderJSON
