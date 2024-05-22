import {ImageIcon, DocumentVideoIcon} from '@sanity/icons'

const HighlightIcon = () => <span style={{fontWeight: 'bold'}}>H</span>

const HighlightDecorator = (props) => {
  return <span style={{backgroundColor: 'yellow', color: 'black'}}>{props.children}</span>
}

export const blockContent = {
  name: 'blockContent',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'Blockquote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
          {
            title: 'Highlight',
            value: 'highlight',
            icon: HighlightIcon,
            component: HighlightDecorator,
          },
        ],
        annotations: [
          {
            name: 'link',
            title: 'Link',
            type: 'link',
          },
          // {
          //   name: 'link',
          //   type: 'object',
          //   title: 'URL',
          //   fields: [
          //     {
          //       name: 'href',
          //       type: 'url',
          //     },
          //     {
          //       title: 'Open in new tab',
          //       name: 'blank',
          //       type: 'boolean',
          //     },
          //   ],
          // },
          // {
          //   name: 'internalLink',
          //   type: 'object',
          //   title: 'Reference',
          //   icon: UserIcon,
          //   fields: [
          //     {
          //       name: 'reference',
          //       type: 'reference',
          //       to: [{type: 'post'}, {type: 'tag'}],
          //     },
          //   ],
          // },
        ],
      },
    },
    {
      type: 'image',
      icon: ImageIcon,
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Important for SEO and accessiblity.',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
      options: {hotspot: true},
    },
    {
      name: 'youtube',
      type: 'object',
      icon: DocumentVideoIcon,
      fields: [
        {
          name: 'video',
          type: 'youtubeVideo',
        },
      ],
    },
  ],
}
