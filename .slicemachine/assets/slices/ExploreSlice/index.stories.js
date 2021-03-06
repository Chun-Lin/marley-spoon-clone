import MyComponent from '../../../../slices/ExploreSlice';

export default {
  title: 'slices/ExploreSlice',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'explore_slice',
      items: [
        {
          avatar: {
            dimensions: { width: 900, height: 500 },
            alt: 'Placeholder image',
            copyright: null,
            url: 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop',
          },
          cardTitle: [
            {
              type: 'paragraph',
              text: 'Nisi do consequat duis cupidatat quis culpa anim esse. Minim ullamco aute aute exercitation enim veniam et proident tempor voluptate cupidatat deserunt veniam anim.',
              spans: [],
            },
          ],
          cardLink: { link_type: 'Web', url: 'http://google.com' },
        },
        {
          avatar: {
            dimensions: { width: 900, height: 500 },
            alt: 'Placeholder image',
            copyright: null,
            url: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop',
          },
          cardTitle: [
            {
              type: 'paragraph',
              text: 'Nulla amet qui pariatur cillum occaecat amet do magna exercitation enim commodo nulla anim ut non. Veniam magna officia aute in excepteur incididunt nulla.',
              spans: [],
            },
          ],
          cardLink: { link_type: 'Web', url: 'http://twitter.com' },
        },
        {
          avatar: {
            dimensions: { width: 900, height: 500 },
            alt: 'Placeholder image',
            copyright: null,
            url: 'https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop',
          },
          cardTitle: [
            {
              type: 'paragraph',
              text: 'Dolor deserunt ea quis consequat veniam qui. Officia qui pariatur et nisi mollit nulla nulla non minim Lorem dolor veniam enim.',
              spans: [],
            },
          ],
          cardLink: { link_type: 'Web', url: 'http://google.com' },
        },
        {
          avatar: {
            dimensions: { width: 900, height: 500 },
            alt: 'Placeholder image',
            copyright: null,
            url: 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop',
          },
          cardTitle: [
            {
              type: 'paragraph',
              text: 'Proident occaecat nostrud sit et dolore mollit duis sunt. Sunt non quis excepteur. Consectetur in non do sunt ullamco esse enim cillum velit anim.',
              spans: [],
            },
          ],
          cardLink: { link_type: 'Web', url: 'http://twitter.com' },
        },
      ],
      primary: {
        title: [
          {
            type: 'heading5',
            text: 'Leverage web-enabled networks',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
