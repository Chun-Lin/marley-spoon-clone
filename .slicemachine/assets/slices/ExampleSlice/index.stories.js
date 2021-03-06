import MyComponent from '../../../../slices/ExampleSlice';

export default {
  title: 'slices/ExampleSlice',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'example_slice',
      items: [],
      primary: {
        title: [
          { type: 'heading2', text: 'Iterate wireless convergence', spans: [] },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Officia consequat incididunt sit. Adipisicing dolor commodo aliqua excepteur ad do magna enim reprehenderit. Velit non nisi eiusmod pariatur cupidatat in nostrud occaecat in culpa.',
            spans: [],
          },
        ],
        description2: [
          {
            type: 'paragraph',
            text: 'Velit adipisicing cillum elit ad elit veniam. Nostrud esse laborum in anim amet quis nostrud. Id quis magna reprehenderit reprehenderit consectetur.',
            spans: [],
          },
        ],
        backgroundImage: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop',
        },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';

export const _WithTextLeft = () => (
  <MyComponent
    slice={{
      variation: 'withTextLeft',
      name: 'With Text Left',
      slice_type: 'example_slice',
      items: [],
      primary: {
        title: [
          {
            type: 'heading2',
            text: 'Cultivate extensible relationships',
            spans: [],
          },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Culpa veniam est culpa adipisicing elit in nostrud anim ullamco labore dolor id.',
            spans: [],
          },
        ],
        description2: [
          {
            type: 'paragraph',
            text: 'Adipisicing consequat mollit do mollit cupidatat anim nulla officia laborum non ea aliqua irure.',
            spans: [],
          },
        ],
        backgroundImage: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop',
        },
      },
      id: '_WithTextLeft',
    }}
  />
);
_WithTextLeft.storyName = 'With Text Left';

export const _WithTextRightBlockquote = () => (
  <MyComponent
    slice={{
      variation: 'withTextRightBlockquote',
      name: 'With Text Right Blockquote',
      slice_type: 'example_slice',
      items: [],
      primary: {
        title: [
          {
            type: 'heading2',
            text: 'Deliver clicks-and-mortar action-items',
            spans: [],
          },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Do fugiat ex incididunt qui dolore commodo fugiat aliqua culpa laboris enim exercitation ex. Lorem quis labore veniam enim quis officia qui adipisicing do laborum nostrud occaecat occaecat.',
            spans: [],
          },
        ],
        description2: [
          {
            type: 'paragraph',
            text: 'Nulla officia tempor ea nisi sint laboris id aute occaecat magna excepteur do.',
            spans: [],
          },
        ],
        blockquote: [
          {
            type: 'paragraph',
            text: 'Incididunt consectetur cillum adipisicing esse magna est laboris mollit anim consequat ad veniam tempor enim.',
            spans: [],
          },
        ],
        backgroundImage: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop',
        },
      },
      id: '_WithTextRightBlockquote',
    }}
  />
);
_WithTextRightBlockquote.storyName = 'With Text Right Blockquote';
