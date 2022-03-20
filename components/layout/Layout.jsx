import React from 'react';

import Seo from '../seo/Seo';
import Footer from '../footer/Footer';
import DesktopHeader from '../header/desktop-header/Header';
import MobileHeader from '../header/mobile-header/Header';
import { useMediaQuery } from '../../hooks';

const Layout = ({ seo, navigation, footer, children }) => {
console.log("🚀 ~ file: Layout.jsx ~ line 10 ~ Layout ~ seo", seo)
  const { isMatch: shouldShowMobileHeader } = useMediaQuery({
    mediaQuery: '(max-width: 1140px)',
  });

  return (
    <div>
      <Seo {...seo.data} />
      {shouldShowMobileHeader ? (
        <MobileHeader navigationData={navigation.data} />
      ) : (
        <DesktopHeader navigationData={navigation.data} />
      )}
      <main>{children}</main>
      <Footer footerData={footer.data} />
    </div>
  );
};

export default Layout;
