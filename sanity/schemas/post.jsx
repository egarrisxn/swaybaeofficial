import {BookIcon} from '@sanity/icons'

export const post = {
  name: 'post',
  type: 'document',
  title: 'Post',
  icon: BookIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      options: {
        indexing: true,
      },
      validation: (Rule) => Rule.required(),
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
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'blockContent',
      title: 'Content',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tag(s)',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
      options: {
        layout: 'tags',
        min: 1,
        max: 3,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      description: 'Make this a featured post.',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      coverImage: 'coverImage',
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {coverImage, title, publishedAt} = selection
      return {
        title: `${title}`,
        subtitle: new Date(publishedAt).toLocaleDateString(),
        media: coverImage,
      }
    },
  },
}
