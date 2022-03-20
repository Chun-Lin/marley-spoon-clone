import { useEffect, useCallback, useState } from 'react';

const useMedaiQuery = ({
  mediaQuery,
}: {
  mediaQuery: string;
}): { isMatch: boolean } => {
  const [isMatch, setIsMatch] = useState(false);

  const handleMediaQueryChange = useCallback((mediaQueryList) => {
    if (mediaQueryList.matches) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
    }
  }, []);

  useEffect(() => {
    let mediaQueryList = window.matchMedia(mediaQuery);

    handleMediaQueryChange(mediaQueryList);

    mediaQueryList.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange);
    };
  }, [handleMediaQueryChange, mediaQuery]);

  return { isMatch };
};

export default useMedaiQuery;
