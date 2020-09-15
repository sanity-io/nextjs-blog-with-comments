export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug'
    },
    {
      name: 'page',
      type: 'reference',
      to: [{type: 'page'}]
    }
  ]
}
