import MyComponent from '../../../../slices/BannerSlice';

export default {
  title: 'slices/BannerSlice',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'banner_slice',
      items: [],
      primary: {
        bannerImage: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop',
        },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
