export const schemaTypes = [
  {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'username',
        title: 'Username',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'string',
      },
    ],
  },
  {
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'about',
        title: 'About',
        type: 'string',
      },
      {
        name: 'destination',
        title: 'Destination',
        type: 'url',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'userId',
        title: 'UserId',
        type: 'string',
      },
      {
        name: 'postedBy',
        title: 'PostedBy',
        type: 'postedBy',
      },
      {
        name: 'save',
        title: 'Save',
        type: 'array',
        of: [{type: 'save'}],
      },

      {
        name: 'comments',
        title: 'Comments',
        type: 'array',
        of: [{type: 'comments'}],
      },
    ],
  },
  {
    name: 'comments',
    title: 'Comments',
    type: 'document',
    fields: [
      {
        name: 'postedBy',
        title: 'PostedBy',
        type: 'postedBy',
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'string',
      },
    ],
  },
  {
    name: 'save',
    title: 'Save',
    type: 'document',
    fields: [
      {
        name: 'postedBy',
        title: 'PostedBy',
        type: 'postedBy',
      },
      {
        name: 'userId',
        title: 'UserId',
        type: 'string',
      },
    ],
  },

  {
    name: 'postedBy',
    title: 'PostedBy',
    type: 'reference',
    to: [{type: 'user'}],
  },
]
