import { render } from '@testing-library/react';

import CallToActionSlice from './index';
import callToActionSliceData from '../../__mocks__/callToActionSlice.json';

describe('CallToActionSlice', () => {
  it('renders CallToActionSlice', () => {
    const { getByRole } = render(
      <CallToActionSlice slice={callToActionSliceData} />
    );
    expect(getByRole('button', { name: 'Sign up free' })).toBeVisible();
    expect(getByRole('link', { name: 'book a demo' })).toHaveAttribute(
      'href',
      'mailto:demo@edapp.com'
    );
  });
});
