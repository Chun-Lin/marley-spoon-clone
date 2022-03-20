import MyComponent from '../../../../slices/VideoSlice';

export default {
  title: 'slices/VideoSlice',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'video_slice',
      items: [],
      primary: { youtubeId: 'seize web-enabled communities' },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
