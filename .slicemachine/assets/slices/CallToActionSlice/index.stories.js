import MyComponent from '../../../../slices/CallToActionSlice';

export default {
  title: 'slices/CallToActionSlice',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'call_to_action_slice',
      items: [],
      primary: {
        title: [
          { type: 'heading1', text: 'Drive proactive mindshare', spans: [] },
        ],
        ctaBtnName: [
          {
            type: 'paragraph',
            text: 'Ad occaecat non incididunt labore ad enim duis aute incididunt cillum exercitation officia aliqua. Nostrud irure in eiusmod occaecat adipisicing laboris voluptate labore nisi aliquip minim consequat pariatur.',
            spans: [],
          },
        ],
        signupButtonLink: { link_type: 'Web', url: 'http://twitter.com' },
        bookDemoDesc: [
          {
            type: 'paragraph',
            text: 'Fugiat nulla velit excepteur nisi ea ad laboris id.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
