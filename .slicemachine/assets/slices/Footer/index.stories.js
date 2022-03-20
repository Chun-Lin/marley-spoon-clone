import MyComponent from '../../../../slices/Footer';

export default {
  title: 'slices/Footer',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'footer',
      items: [
        {
          footerTitle: 'productize global bandwidth',
          footerLink: { link_type: 'Web', url: 'http://google.com' },
        },
        {
          footerTitle: 'streamline global eyeballs',
          footerLink: { link_type: 'Web', url: 'http://twitter.com' },
        },
        {
          footerTitle: 'aggregate plug-and-play initiatives',
          footerLink: { link_type: 'Web', url: 'http://google.com' },
        },
        {
          footerTitle: 'monetize real-time supply-chains',
          footerLink: { link_type: 'Web', url: 'https://slicemachine.dev' },
        },
      ],
      primary: {
        title: [
          {
            type: 'heading1',
            text: 'Enhance bleeding-edge web services',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
