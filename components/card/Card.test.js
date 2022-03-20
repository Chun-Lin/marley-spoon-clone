import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const cardProps = {
    avatar: {
      url: 'http://placeimg.com/640/480',
      alt: 'test image',
    },
    cardTitle: [{ text: 'card title', type: 'paragraph' }],
    cardLink: { url: 'www.google.com' },
  };

  it('renders Card', () => {
    const { getByRole, getByText } = render(<Card {...cardProps} />);

    expect(getByRole('link')).toHaveAttribute('href', cardProps.cardLink.url);
    expect(getByRole('img')).toHaveAttribute('src', cardProps.avatar.url);
    expect(getByRole('img')).toHaveAttribute('alt', cardProps.avatar.alt);
    expect(getByText(/card title/i)).toBeVisible();
  });
});
