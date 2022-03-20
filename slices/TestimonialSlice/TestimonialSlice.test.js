import { render } from '@testing-library/react';

import TestimonialSlice from './index';
import testimonialSliceData from '../../__mocks__/testimonialSlice.json';

describe('TestimonialSlice', () => {
  it('renders TestimonialSlice', () => {
    const { getByRole, getAllByRole, getByText } = render(
      <TestimonialSlice slice={testimonialSliceData} />
    );

    expect(getByRole('heading', { level: 2 })).toHaveTextContent('Why EdApp?');

    expect(getAllByRole('heading', { level: 3 })[0]).toHaveTextContent(
      'World-class Authoring Tool'
    );
    expect(
      getByText(
        'Create lessons on EdApp’s intuitive and incredibly agile platform in days. Choose from 2 template libraries, full of completely free and ready-made content ready for you to quickly edit, brand, and deploy. No prior technical knowledge needed. it’s a smartphone, tablet or laptop.'
      )
    ).toBeVisible();

    expect(getAllByRole('heading', { level: 3 })[1]).toHaveTextContent(
      'Mobile-first microlearning'
    );
    expect(
      getByText(
        'Deliver a learning strategy that provides the best learning outcomes with microlearning. Leverage interactive, built-in features guaranteed to boost engagement and completion rates. Deploy your bespoke content to your teams directly to their personal mobile devices, where they can easily access and complete lessons in small digestible chunks.'
      )
    ).toBeVisible();

    expect(getAllByRole('heading', { level: 3 })[2]).toHaveTextContent(
      'Better learning outcomes'
    );
    expect(
      getByText(
        'Experience completion rates beyond 90% compared to rates as low as 15% from traditional eLearning platforms. Apply features like spaced repetition and gamification to make learning fun and enjoyable while simultaneously increasing retention and creating a continuous learning experience.'
      )
    ).toBeVisible();
  });
});
