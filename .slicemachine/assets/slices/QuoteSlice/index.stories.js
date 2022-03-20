import MyComponent from '../../../../slices/QuoteSlice';

export default {
  title: 'slices/QuoteSlice',
};

export const _Default = () => (
  <MyComponent
    slice={{
      variation: 'default',
      name: 'Default',
      slice_type: 'quote_slice',
      items: [],
      primary: {
        image: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop',
        },
        blockquote: [
          {
            type: 'paragraph',
            text: 'Do qui esse adipisicing sit occaecat officia consectetur et dolore magna dolor minim qui. Aute esse laboris excepteur et sit aliqua fugiat id velit cillum voluptate incididunt consectetur.',
            spans: [],
          },
        ],
        figCaption: [
          {
            type: 'paragraph',
            text: 'Ea sint labore minim est labore ex non adipisicing. Aliquip tempor non eiusmod sunt.',
            spans: [],
          },
        ],
      },
      id: '_Default',
    }}
  />
);
_Default.storyName = 'Default';

export const _WithTwoColumn = () => (
  <MyComponent
    slice={{
      variation: 'withTwoColumn',
      name: 'With Two Column',
      slice_type: 'quote_slice',
      items: [],
      primary: {
        title: [
          {
            type: 'heading1',
            text: 'Extend customized web services',
            spans: [],
          },
        ],
        description: [
          {
            type: 'paragraph',
            text: 'Cupidatat aliqua exercitation officia nulla eu non Lorem ad.',
            spans: [],
          },
        ],
        description2: [
          {
            type: 'paragraph',
            text: 'Eu exercitation laboris sint exercitation. Laborum aliquip non nulla deserunt dolore minim ullamco nisi. Culpa labore et anim tempor do aliquip aute.',
            spans: [],
          },
        ],
        image: {
          dimensions: { width: 900, height: 500 },
          alt: 'Placeholder image',
          copyright: null,
          url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop',
        },
        blockquote: [
          {
            type: 'paragraph',
            text: 'Elit eiusmod magna reprehenderit irure ut sunt cupidatat pariatur cupidatat occaecat deserunt elit. Cupidatat aliqua consectetur deserunt occaecat Lorem. Deserunt elit elit sit incididunt ex cupidatat ea laborum aliqua deserunt quis Lorem excepteur exercitation id.',
            spans: [],
          },
        ],
        figCaption: [
          {
            type: 'paragraph',
            text: 'Aliquip amet eu veniam in qui occaecat id eu reprehenderit commodo proident irure. Proident cupidatat elit cupidatat fugiat do ipsum est occaecat irure aute enim magna.',
            spans: [],
          },
        ],
      },
      id: '_WithTwoColumn',
    }}
  />
);
_WithTwoColumn.storyName = 'With Two Column';
