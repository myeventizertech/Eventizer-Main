import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#ef0d5e" />
          <meta name="author" content="Eventizer" />

          <meta
            name="keywords"
            content="Event, Best Event management service, Best Event management service in Bangladesh, Event Organizer, Event Planning Companies, Event Planning near me, Event Management Website, Famous Event Planner, Business Event, Top Event Management, Birthday Event Management, Party Event, Decoration, Printing & Press, Photographer booking, Cinematographer booking, Dhaka Event Service"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Eventizer" />

          <meta property="og:image" content="/img/og.png" />
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
