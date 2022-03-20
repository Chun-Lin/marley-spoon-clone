import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  const footerData = {
    appleStore: [
      {
        appleStoreImage: {
          alt: 'Download on the App Store',
          url: 'https://images.prismic.io/marley-spoon-clone/5e9d7dbf-1c4e-41f8-bc00-d99b4450a3d8_app-store-badge.png?auto=compress,format',
          dimensions: { width: 156, height: 48 },
        },
        appleStoreLink: {
          url: 'https://apple.co/1RNEsSK',
        },
      },
    ],
    edLearning: [
      {
        edLearningImage: {
          alt: 'Learn online at web.edapp.com',
          url: 'https://images.prismic.io/marley-spoon-clone/21d89d94-e5ff-48a9-9c85-3ff6ffb8ee79_ed-web-badge.png?auto=compress,format',
          dimensions: { width: 156, height: 48 },
        },
        edLearningLink: {
          url: 'https://web.edapp.com/',
        },
      },
    ],
    googlePlayStore: [
      {
        googlePlayStoreImage: {
          alt: 'Get it on Google Play',
          url: 'https://images.prismic.io/marley-spoon-clone/e4315e91-7a0c-4cfd-85fa-5b16fa57393d_google-play-badge.png?auto=compress,format',
          dimensions: { width: 156, height: 48 },
        },
        googlePlayStoreLink: {
          url: 'https://bit.ly/1ZvyCv1',
        },
      },
    ],
    slices: [
      {
        items: [
          {
            footerLink: { url: 'https://www.edapp.com/lms-features/' },
            footerTitle: [{ text: 'LMS Features', type: 'paragraph' }],
          },
        ],
        primary: {
          title: [{ text: 'Features', type: 'heading1' }],
        },
      },
    ],
  };

  it('renders Footer', () => {
    const { getAllByRole, getByText } = render(
      <Footer footerData={footerData} />
    );

    const storeBadgeNodes = getAllByRole('img');
    const appleStoreImg = storeBadgeNodes[0];
    const googlePlayStoreImg = storeBadgeNodes[1];
    const edLearningImg = storeBadgeNodes[2];

    const storeLinkNodes = getAllByRole('link');
    const appleStoreLink = storeLinkNodes[1];
    const googlePlayStoreLink = storeLinkNodes[2];
    const edLearningLink = storeLinkNodes[3];

    expect(getByText('Features')).toBeVisible();
    expect(getByText(/LMS Features/i)).toBeVisible();
    expect(getByText(/LMS Features/i)).toHaveAttribute(
      'href',
      footerData.slices[0].items[0].footerLink.url
    );
    expect(appleStoreImg).toHaveAttribute(
      'alt',
      footerData.appleStore[0].appleStoreImage.alt
    );
    expect(googlePlayStoreImg).toHaveAttribute(
      'alt',
      footerData.googlePlayStore[0].googlePlayStoreImage.alt
    );
    expect(edLearningImg).toHaveAttribute(
      'alt',
      footerData.edLearning[0].edLearningImage.alt
    );

    expect(appleStoreLink).toHaveAttribute(
      'href',
      footerData.appleStore[0].appleStoreLink.url
    );
    expect(googlePlayStoreLink).toHaveAttribute(
      'href',
      footerData.googlePlayStore[0].googlePlayStoreLink.url
    );
    expect(edLearningLink).toHaveAttribute(
      'href',
      footerData.edLearning[0].edLearningLink.url
    );
  });
});
