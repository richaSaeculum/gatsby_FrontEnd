
import React, { useEffect } from "react";

import { ads } from "../../utils/constants";

function Ad({ adId, postId }) {
  const ad = ads[adId.slice(-1)];

  useEffect(() => {
    if (typeof window !== undefined) {
      const { googletag } = window;
      console.log(googletag, "googletaggoogletaggoogletag")
      if (googletag) {
        googletag.cmd.push(function () {
          googletag
            .defineSlot(
              `/22654691416/${adId}`,
              ad.sizes,
              `div-gpt-ad-${adId}`
            )
            .defineSizeMapping(ad.mapping)
            .addService(googletag.pubads());

          googletag.enableServices();
        });

        googletag.cmd.push(function () {
          googletag.display(`div-gpt-ad-${adId}`);
        });
      }
    }
  }, [adId])

  // return <div id={`div-gpt-ad_${adId}`} />;
  return (
    <div className={'adSlot'} style={{ height: "auto!important", minHeight: "0px!important", textAlign: 'center' }} >
      <div style={{ color: "#3b3b4f", fontSize: "12px", marginBottom: "8px", textAlign: 'center' }}>ADVERTISEMENT</div>
      <div id={`div-gpt-ad-${adId}`} style={{ width: '100%', height: "90px", background: 'red' }} data-postId={postId}></div>
    </div>
  );
}

export default Ad;