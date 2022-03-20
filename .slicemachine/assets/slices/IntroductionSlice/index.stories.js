import MyComponent from '../../../../slices/IntroductionSlice';

export default {
  title: 'slices/IntroductionSlice',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'introduction_slice',
      items: [],
      primary: {
        caseTitleImage: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop',
        },
        title: [
          {
            type: 'heading1',
            text: 'Revolutionize innovative technologies',
            spans: [],
          },
        ],
        subTitle: [
          {
            type: 'paragraph',
            text: 'Est proident laborum dolore. Id minim veniam cillum adipisicing exercitation eiusmod enim id nulla labore cupidatat elit est anim. Sint nostrud nostrud excepteur consectetur aute ex et nulla eiusmod non consectetur esse ut.',
            spans: [],
          },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Commodo magna et occaecat eu ex mollit aute sunt elit aliqua esse reprehenderit irure ullamco quis. Proident nostrud veniam officia ex excepteur deserunt ea.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
