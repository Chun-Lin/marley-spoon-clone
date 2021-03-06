import MyComponent from '../../../../slices/StickyPromotionSlice';

export default {
  title: 'slices/StickyPromotionSlice',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'sticky_promotion_slice',
      items: [],
      primary: {
        promoTitle: [
          {
            type: 'paragraph',
            text: 'Excepteur minim commodo exercitation cillum consectetur aliqua culpa.',
            spans: [],
          },
        ],
        ctaText: [
          {
            type: 'paragraph',
            text: 'Aute irure excepteur dolore aliqua qui officia eu incididunt eu nostrud ipsum sint ex commodo. Pariatur veniam laborum dolore laboris velit tempor. Excepteur elit sint pariatur est non aliqua aliqua nostrud.',
            spans: [],
          },
        ],
        ctaLink: { link_type: 'Web', url: 'http://google.com' },
        bgImage: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop',
        },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
