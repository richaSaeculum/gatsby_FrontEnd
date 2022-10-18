import { useEffect } from 'react';
import { AdType, adUnitProps } from './googleAd.constant';

// adSlot = 7181773959

function GoogleAd({ variant = AdType.DEFAULT, adSlot }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={process.env.PUBLIC_GOOGLE_ADSENSE}
      // data-ad-client="ca-pub-5674078816323888"
      // data-ad-slot={7181773959}
      data-ad-slot="7863578035"
      // data-ad-format="auto"
      // data-full-width-responsive="true"
      {...adUnitProps[variant]}
    />
  );
}

export default GoogleAd;
