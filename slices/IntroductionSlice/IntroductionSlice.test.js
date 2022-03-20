import { render } from '@testing-library/react';

import IntroductionSlice from './index';
import introductionSliceData from '../../__mocks__/introductionSlice.json';

describe('IntroductionSlice', () => {
  it('renders IntroductionSlice', () => {
    const { getByRole, getByText } = render(
      <IntroductionSlice slice={introductionSliceData} />
    );

    expect(getByRole('heading', { level: 1 })).toHaveTextContent(
      'EdApp & Marley Spoon'
    );
    expect(getByRole('heading', { level: 2 })).toHaveTextContent(
      'A food Services Case Study'
    );

    expect(
      getByText(
        'This is how Marley Spoon leveraged EdApp to onboard hundreds of new employees to support the unprecedented growth brought on by COVID-19.'
      )
    ).toBeVisible();
  });
});
