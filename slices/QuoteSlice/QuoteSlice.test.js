import { render } from '@testing-library/react';

import QuoteSlice from './index';
import quoteSliceData from '../../__mocks__/quoteSlice.json';

describe('QuoteSlice', () => {
  it('renders QuoteSlice', () => {
    const { getByRole, getByText } = render(
      <QuoteSlice slice={quoteSliceData} />
    );

    expect(getByRole('heading', { level: 2 })).toHaveTextContent(
      'Why EdApp works for the food delivery and food manufacturing industries'
    );
    expect(
      getByText(
        'For companies like Marley Spoon who are dealing with food, health and safety is always a priority. EdApp microlessons allow learners to complete important lessons anytime, anywhere in small, digestible chunks. What’s more, content can be revisited regularly to ensure processes are completed and, more importantly, understood.'
      )
    ).toBeVisible();
    expect(
      getByText(
        'Whether employees are on-site at production centres, out delivering product or at the office, dispersed teams can complete their EdApp microlessons in five minutes or so, and revisit when it suits them. Lessons can be created, edited, and deployed to cohorts ensuring that all team members have the most up-to-date content at all times. The best part? All this can be done on learners’ mobile devices.'
      )
    ).toBeVisible();

    expect(
      getByText(
        'Food business and manufacturing are very fast-paced environments. So having a product [like EdApp] that can keep up with these changes is extremely valuable.'
      )
    ).toBeVisible();
  });
});
