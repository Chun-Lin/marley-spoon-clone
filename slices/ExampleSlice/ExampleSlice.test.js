import { render } from '@testing-library/react';

import ExampleSlice from './index';
import exampleSliceData from '../../__mocks__/exampleSlice.json';

describe('ExampleSlice', () => {
  it('renders ExampleSlice', () => {
    const { getByRole, getByText } = render(
      <ExampleSlice slice={exampleSliceData} />
    );

    expect(getByRole('heading', { level: 2 })).toHaveTextContent(
      'An enhanced learning experience with EdApp'
    );
    expect(
      getByText(
        'Marley Spoon has a large number of team members, who are divided into various sub-departments, meaning certain courses are targetted to train specific groups. Utilising EdApp’sfeatureslike User Groups and Push Notifications has enabled Marley Spoon to easily create and share content with these unique groups. When new content is ready, learners are notified in real-time with a push notification, sent straight to their mobile devices. Marley Spoon also incentivises its team members through EdApp’s built-in prizing feature. It sparks some friendly competition and winners are rewarded with real prizes.'
      )
    ).toBeVisible();
    expect(
      getByText(
        'Having our content on EdApp has made it more engaging, more fun, and more interactive.'
      )
    ).toBeVisible();
  });
});
