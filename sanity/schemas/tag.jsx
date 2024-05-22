import {TagIcon} from '@sanity/icons'

export const tag = {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  icon: TagIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
      options: {
        indexing: true,
      },
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          {title: 'Electric Blue', value: 'deepskyblue'},
          {title: 'Muted Blue', value: 'royalblue'},
          {title: 'Bright Pink', value: 'deeppink'},
          {title: 'Lavender', value: 'lavender'},
          {title: 'Light Purple', value: 'mediumorchid'},
          {title: 'Indigo', value: 'indigo'},
          {title: 'Highlighter Yellow', value: 'yellow'},
          {title: 'Muted Grey', value: 'lightgrey'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      const firstLetter = title.charAt(0).toUpperCase()
      return {
        title: title,
        media: <div>{firstLetter}</div>,
      }
    },
  },
}
