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
      data-ad-format="auto"
      data-full-width-responsive="true"
      // {...adUnitProps[variant]}
    />

    // <div style={{ minHeight: '100px', maxHeight: '100px', minWidth: '100%', maxWidth: '100%',}}>
    // {/* <iframe src='https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-5674078816323888&output=html&h=600&slotname=7863578035&adk=673456346&adf=1353742077&pi=t.ma~as.7863578035&w=288&fwrn=4&fwrnh=100&lmt=1666077719&rafmt=1&format=288x600&url=https%3A%2F%2Fwww.skies.dev%2Fnext-adsense&fwr=0&fwrattr=true&rpe=1&resp_fmts=4&wgl=1&uach=WyJXaW5kb3dzIiwiMTUuMC4wIiwieDg2IiwiIiwiMTA2LjAuNTI0OS4xMTkiLFtdLGZhbHNlLG51bGwsIjY0IixbWyJDaHJvbWl1bSIsIjEwNi4wLjUyNDkuMTE5Il0sWyJHb29nbGUgQ2hyb21lIiwiMTA2LjAuNTI0OS4xMTkiXSxbIk5vdDtBPUJyYW5kIiwiOTkuMC4wLjAiXV0sZmFsc2Vd&dt=1666077718963&bpp=1&bdt=268&idt=393&shv=r20221013&mjsv=m202210110101&ptt=9&saldr=aa&abxe=1&cookie=ID%3D5b329f70b53534cc-22fe2bb9f4d60088%3AT%3D1665487994%3ART%3D1665487994%3AS%3DALNI_Maj5TT_h2u30R4PR_68YUf7LYz4-A&gpic=UID%3D00000b5eff97f02a%3AT%3D1665487994%3ART%3D1666072192%3AS%3DALNI_MbX4b5T6sBO7HlbKqge3NOhwQ2zhw&prev_fmts=0x0%2C1200x280&nras=1&correlator=6142308266567&frm=20&pv=1&ga_vid=1344202530.1665487994&ga_sid=1666077719&ga_hid=548416921&ga_fc=1&u_tz=330&u_his=2&u_h=864&u_w=1536&u_ah=816&u_aw=1536&u_cd=24&u_sd=1.25&dmc=8&adx=1239&ady=392&biw=1519&bih=697&scr_x=0&scr_y=0&eid=44759876%2C44759927%2C44759842%2C44774648%2C42531706%2C44774652%2C44770881%2C44773747%2C31062930&oid=2&pvsid=735303306341310&tmod=1423202319&uas=0&nvt=2&eae=0&fc=1920&brdim=-1537%2C215%2C-1537%2C215%2C1536%2C216%2C1538%2C818%2C1536%2C714&vis=1&rsz=%7C%7CeE%7C&abl=CS&pfx=0&fu=1152&bc=31&ifi=3&uci=a!3&fsb=1&xpc=3jAk0YNsnN&p=https%3A//www.skies.dev&dtd=397' /> */}
    // </div>

  );
}

export default GoogleAd;
