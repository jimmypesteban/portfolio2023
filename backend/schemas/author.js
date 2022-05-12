export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  groups: [
    {
      name: 'langdingPage',
      title: 'Landing Page',
    },
    {
      name: 'aboutMe',
      title: 'About Me',
    },
    {
      name: 'contactPage',
      title: 'Contact Page',
    },
  ],
  fields: [
    {
      name: 'signature',
      title: 'Signature',
      description: "Used in navbar",
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      group: "langdingPage",
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'resume',
      title: 'Resume',
      type: 'file',
    },
    {
      name: 'recommendationLetter',
      title: 'RecommendationLetter',
      type: 'file',
    },

    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [
        {
          title: 'Experience',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'roleTitle',
              title: 'RoleTitle',
              type: 'string'
            },
            {
              name: 'titleLink',
              title: 'TitleLink',
              type: 'string'
            },
            {
              name: 'date',
              title: 'Date',
              type: 'string'
            },
            {
              title: 'Experience', 
              name: 'experience',
              type: 'array', 
              of: [{type: 'block'}]
            }
          ]
        }
      ]
    }
    ,
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          title: 'Education',
          type: 'object',
          fields: [
            {
              name: 'schoolName',
              title: 'School Name',
              type: 'string'
            },
            {
              name: 'degreeProgramme',
              title: 'Degree Programme',
              type: 'string'
            },
            {
              name: 'date',
              title: 'Date',
              type: 'string'
            },
          ]
        }
      ]
    }
    ,
    {
      name: 'slug',
      description: 'describe me pls',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'someImage',
      title: 'Some Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}