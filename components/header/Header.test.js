import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DesktopHeader from './desktop-header/Header';
import MobileHeader from './mobile-header/Header';
import navigationData from '../../__mocks__/navigation.json';

describe('Header', () => {
  it('renders desktop header', async () => {
    const { getByRole, getByText } = render(
      <DesktopHeader navigationData={navigationData} />
    );

    expect(getByText('FEATURES')).toBeVisible();
    expect(getByText('A MOBILE LMS')).toBeVisible();
    expect(getByText('COURSE LIBRARY')).toBeVisible();
    expect(getByRole('link', { name: 'COURSE LIBRARY' })).toHaveAttribute(
      'href',
      'https://www.edapp.com/course-library/'
    );
    expect(getByText('INDUSTRIES')).toBeVisible();
    expect(getByText('EDUCATE ALL')).toBeVisible();
    expect(getByText('SUPPORT')).toBeVisible();
    expect(getByText('TESTIMONIALS')).toBeVisible();

    await userEvent.hover(getByText('FEATURES'));

    expect(getByText('LMS Features')).toBeVisible();
    expect(getByRole('link', { name: 'LMS Features' })).toHaveAttribute(
      'href',
      'https://www.edapp.com/lms-features/'
    );

    await userEvent.hover(getByText('Authoring'));

    expect(getByText('Authoring Tools')).toBeVisible();
    expect(getByRole('link', { name: 'Authoring Tools' })).toHaveAttribute(
      'href',
      'https://www.edapp.com/authoring-tool/'
    );

    expect(getByText('LOG IN')).toBeVisible();
    expect(getByText('SIGN UP FREE')).toBeVisible();

    await userEvent.hover(getByText('LOG IN'));

    expect(getByRole('link', { name: /Learn/i })).toHaveAttribute(
      'href',
      'https://web.edapp.com/'
    );

    expect(getByRole('link', { name: /Admin/i })).toHaveAttribute(
      'href',
      'https://admin.edapp.com/'
    );
  });

  it('renders desktop header', async () => {
    const { getByRole, getAllByRole, getByText, queryByText, debug } = render(
      <MobileHeader navigationData={navigationData} />
    );

    expect(queryByText('FEATURES')).toBeFalsy();
    expect(getByText('SIGN UP FREE')).toBeVisible();

    const burgerIconNode =
      getAllByRole('button')[getAllByRole('button').length - 1];
    await userEvent.click(burgerIconNode);

    expect(getByText('FEATURES')).toBeVisible();
    expect(getByText('A MOBILE LMS')).toBeVisible();
    expect(getByText('COURSE LIBRARY')).toBeVisible();
    expect(getByRole('link', { name: 'COURSE LIBRARY' })).toHaveAttribute(
      'href',
      'https://www.edapp.com/course-library/'
    );
    expect(getByText('INDUSTRIES')).toBeVisible();
    expect(getByText('EDUCATE ALL')).toBeVisible();
    expect(getByText('SUPPORT')).toBeVisible();
    expect(getByText('TESTIMONIALS')).toBeVisible();

    await userEvent.click(getByText('FEATURES'));

    expect(getByText('LMS Features')).toBeVisible();
    expect(getByRole('link', { name: 'LMS Features' })).toHaveAttribute(
      'href',
      'https://www.edapp.com/lms-features/'
    );

    expect(getByText('Authoring Tools')).toBeVisible();
    expect(getByRole('link', { name: 'Authoring Tools' })).toHaveAttribute(
      'href',
      'https://www.edapp.com/authoring-tool/'
    );
  });
});
