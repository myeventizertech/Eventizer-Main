import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#ef0d5e" />
          <meta name="author" content="Eventizer" />
          {/* <meta
            name="title"
            content="Eventizer | Plan Your Event Hassle Free"
          />
          <meta
            name="description"
            content="Eventizer is the Bangladesh's first decentralized marketplace for event related logistics & services. We aim to provide an easy-to-use platform where users can browse and find event vendors offering best prices for their events, regardless of which part of Bangladesh they are in. Eventizer will be available on all devices, so users can plan their events anytime, anywhere."
          />
          <meta
            name="keywords"
            content="Event, Best Event management service, Best Event management service in Bangladesh, Event Organizer, Event Planning Companies, Event Planning near me, Event Management Website, Famous Event Planner, Business Event, Top Event Management, Birthday Event Management, Party Event, Decoration, Printing & Press, Photographer booking, Cinematographer booking, Dhaka Event Service"
          />
          <link rel="canonical" href="https://myeventizer.com/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Eventizer | Organize Your Event Hassle Free"
          />
          <meta
            property="og:description"
            content="Eventizer is the Bangladesh's first decentralized marketplace for event related logistics & services. We aim to provide an easy-to-use platform where users can browse and find event vendors offering best prices for their events, regardless of which part of Bangladesh they are in. Eventizer will be available on all devices, so users can plan their events anytime, anywhere."
          />
          <meta property="og:image" content="/img/og.png" />
          <meta property="og:url" content="https://myeventizer.com" />
          <meta property="og:site_name" content="Eventizer" /> */}

          <meta name="twitter:domain" content="https://myeventizer.com" />
          <meta
            name="twitter:title"
            content="Eventizer | Organize Your Event Hassle Free"
          />
          <meta
            name="twitter:description"
            content="Eventizer is the Bangladesh's first decentralized marketplace for event related logistics & services. We aim to provide an easy-to-use platform where users can browse and find event vendors offering best prices for their events, regardless of which part of Bangladesh they are in. Eventizer will be available on all devices, so users can plan their events anytime, anywhere."
          />
          <meta name="twitter:image" content="/img/og.png" />
          <meta name="twitter:site" content="@eventizer" />
          <meta name="twitter:creator" content="@eventizer" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="application-name" content="eventizer" />
          <meta name="apple-mobile-web-app-title" content="eventizer" />

          <link rel="icon" href="/img/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-Poppins bg-[#fafafa]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
