import { render } from '@testing-library/react';

import ExploreSlice from './index';
import exploreSliceData from '../../__mocks__/exploreSlice.json';

describe('ExploreSlice', () => {
  it('renders ExploreSlice', () => {
    const { getByRole, getAllByRole } = render(
      <ExploreSlice slice={exploreSliceData} />
    );

    expect(getByRole('heading', { level: 5 })).toHaveTextContent(
      'EXPLORE MORE'
    );

    expect(getAllByRole('heading', { level: 6 })[0]).toHaveTextContent(
      'Hear from some of our Global Clients'
    );

    expect(getAllByRole('heading', { level: 6 })[1]).toHaveTextContent(
      'Book in a demonstration with one of our Solutions Consultants'
    );

    expect(getAllByRole('heading', { level: 6 })[2]).toHaveTextContent(
      'See live authoring demonstrations on our YouTube page'
    );

    expect(getAllByRole('heading', { level: 6 })[3]).toHaveTextContent(
      'Read independent reviews of our platform on G2 Crowd'
    );
  });
});
