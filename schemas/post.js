export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Bursary', value: 'Bursary' },
          { title: 'Internship', value: 'Internship' },
          { title: 'Learnership', value: 'Learnership' },
        ],
        layout: 'dropDown',
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
    },
    // {
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
