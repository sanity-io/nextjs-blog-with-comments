export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'image'
        },
        {
          name: 'text',
          type: 'object',
          fields: [
            {
              name: 'content',
              type: 'blockContent'
            }
          ]
        }
      ]
    }
  ]
}
