import Layout from "../components/layout/Layout";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import "../styles/animte.css";
import "../styles/multiStep.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "keen-slider/keen-slider.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-awesome-time-picker/assets/index.css";
import "../styles/overide.css";

import "../configureAmplify";
import AuthContext from "../authContext/AuthContext";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";

// import { Provider } from "react-redux";
// import store from "../redux/strore";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3127042, 1);
  }, []);

  return (
    <>
      <Script
        id="icWebChat"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function () {
      var div = document.createElement('div');
      div.id = 'icWebChat';
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://webchat.getalice.ai/index.js';
      var lel = document.body.getElementsByTagName('script');
      var el = lel[lel.length - 1];
      el.parentNode.insertBefore(script, el);
      el.parentNode.insertBefore(div, el);
      script.addEventListener('load', function () {
        ICWebChat.init({ selector: '#icWebChat',
                         platformId: '10146',
                         primaryId: 'a6f52b94f3bc11eca653b6b702a42acc',
                         token: '99705fbcfa810ee2f04b921170f58c83246ddef59107f352' });
      });
    })();
  `,
        }}
      />

      <NextNProgress
        color="#ef0d5e"
        height={2}
        options={{ showSpinner: false }}
      />
      <Toaster
        reverseOrder={false}
        toastOptions={{
          duration: 1000,
        }}
      />
      {/* <Provider store={store}> */}
      <AuthContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContext>
      {/* </Provider> */}
    </>
  );
}

export default MyApp;
