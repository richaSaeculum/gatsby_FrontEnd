import { useEffect, useState } from 'react';
import { Router } from 'next/router';

import { config } from "@fortawesome/fontawesome-svg-core";

import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { showLoader } from '../utils/helpers';
import Loader from '../components/loader/loader';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => { setShowLoader(true) });
    Router.events.on("routeChangeComplete", () => { setShowLoader(false) });
    return () => {
      Router.events.off("routeChangeStart", () => {
        console.log("stopped");
      });
      Router.events.off("routeChangeComplete", () => {
        console.log("stopped");
      });
    };
  }, []); // depe Router.events

  return (
    <>
      <Loader showLoader={showLoader} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
