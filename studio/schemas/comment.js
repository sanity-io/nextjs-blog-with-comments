export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'comment',
      type: 'text',
    },
    {
      name: 'post',
      type: 'reference',
      to: [
        {type: 'post'}
      ]
    }
  ],
  preview: {
    select: {
      name: 'name',
      comment: 'comment',
      post: 'post.title'
    },
    prepare({name, comment, post}) {
      return {
        title: `${name} on ${post}`,
        subtitle: comment
      }
    }
  }
}
