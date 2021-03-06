import MyComponent from '../../../../slices/SecondLevelNavSlice';

export default {
  title: 'slices/SecondLevelNavSlice',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'second_level_nav_slice',
      items: [
        {
          thirdLevelNavTitle: [
            {
              type: 'paragraph',
              text: 'Dolore aliqua ex labore sunt id eiusmod culpa ex duis nisi. Velit consectetur culpa sit mollit ea duis eu. Adipisicing non consectetur enim sint est occaecat laborum deserunt ullamco occaecat cillum culpa enim nulla sit.',
              spans: [],
            },
          ],
          thirdLevelNavLink: { link_type: 'Web', url: 'http://google.com' },
        },
        {
          thirdLevelNavTitle: [
            {
              type: 'paragraph',
              text: 'Eiusmod incididunt fugiat quis id culpa laborum elit mollit aliquip incididunt aliqua anim ad adipisicing qui. Eu sint deserunt sunt exercitation do minim nostrud aliqua labore incididunt proident. Magna laborum cupidatat Lorem adipisicing ut cillum deserunt est non tempor minim.',
              spans: [],
            },
          ],
          thirdLevelNavLink: { link_type: 'Web', url: 'https://prismic.io' },
        },
        {
          thirdLevelNavTitle: [
            {
              type: 'paragraph',
              text: 'Sint excepteur do eu elit ipsum incididunt. Ad sunt magna amet aute enim dolore consectetur veniam eu exercitation commodo. Consequat consequat mollit pariatur incididunt dolor eu.',
              spans: [],
            },
          ],
          thirdLevelNavLink: { link_type: 'Web', url: 'http://twitter.com' },
        },
        {
          thirdLevelNavTitle: [
            {
              type: 'paragraph',
              text: 'Dolore sunt dolore est sit occaecat aliquip voluptate velit voluptate fugiat consequat cupidatat et commodo. Nostrud commodo nisi culpa ex. Laborum nostrud reprehenderit consectetur excepteur ex aliqua.',
              spans: [],
            },
          ],
          thirdLevelNavLink: { link_type: 'Web', url: 'http://google.com' },
        },
        {
          thirdLevelNavTitle: [
            {
              type: 'paragraph',
              text: 'Ut ea irure mollit in deserunt nostrud occaecat duis elit proident nostrud officia nulla voluptate pariatur.',
              spans: [],
            },
          ],
          thirdLevelNavLink: {
            link_type: 'Web',
            url: 'https://slicemachine.dev',
          },
        },
      ],
      primary: {
        secondLevelNavTitle: [
          {
            type: 'paragraph',
            text: 'Amet sint esse esse quis consequat non aliqua Lorem magna anim occaecat ullamco. Quis ad labore aliqua officia sit sunt esse qui labore minim culpa.',
            spans: [],
          },
        ],
        secondLevelNavLink: { link_type: 'Web', url: 'https://prismic.io' },
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';
