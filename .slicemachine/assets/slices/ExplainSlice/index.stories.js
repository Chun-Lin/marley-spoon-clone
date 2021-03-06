import MyComponent from '../../../../slices/ExplainSlice';

export default {
  title: 'slices/ExplainSlice',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'explain_slice',
      items: [],
      primary: {
        title: [
          {
            type: 'heading2',
            text: 'Generate impactful infomediaries',
            spans: [],
          },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Laboris nulla aliqua labore ut proident culpa enim commodo incididunt est. Quis veniam veniam quis occaecat laboris Lorem. Ad in reprehenderit nisi mollit deserunt esse laboris ullamco.',
            spans: [],
          },
        ],
        description2: [
          {
            type: 'paragraph',
            text: 'Elit ullamco sunt ea dolore est. Officia labore velit id anim mollit dolore commodo non.',
            spans: [],
          },
        ],
        image: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop',
        },
        blockquote: [
          {
            type: 'paragraph',
            text: 'Consequat commodo velit aute. Elit officia cupidatat ut deserunt culpa.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
