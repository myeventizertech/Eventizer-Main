import Head from "next/head";
import dynamic from "next/dynamic";
import Loader from "../components/reUseComponents/Loader";
const Main = dynamic(() => import("../components/homePage/Main"), {
  loading: () => (
    <div className="h-screen pt-32">
      <Loader
        center={true}
        colorDefault={false}
        loaderWidht="w-[44px] h-[44px]"
        bdrWidth="4px"
      />
    </div>
  ),
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Eventizer | Home</title>
        <meta name="title" content="Eventizer | Plan Your Event Hassle Free" />
        <meta
          name="description"
          content="Eventizer is the Bangladesh's first decentralized marketplace for event related logistics & services. We aim to provide an easy-to-use platform where users can browse and find event vendors offering best prices for their events, regardless of which part of Bangladesh they are in. Eventizer will be available on all devices, so users can plan their events anytime, anywhere."
        />

        <meta
          property="og:title"
          content="Eventizer | Organize Your Event Hassle Free"
        />
        <meta
          property="og:description"
          content="Eventizer is the Bangladesh's first decentralized marketplace for event related logistics & services. We aim to provide an easy-to-use platform where users can browse and find event vendors offering best prices for their events, regardless of which part of Bangladesh they are in. Eventizer will be available on all devices, so users can plan their events anytime, anywhere."
        />
        <meta property="og:url" content="https://myeventizer.com" />

        <meta name="twitter:domain" content="https://myeventizer.com" />
        <meta
          name="twitter:title"
          content="Eventizer | Organize Your Event Hassle Free"
        />
        <meta
          name="twitter:description"
          content="Eventizer is the Bangladesh's first decentralized marketplace for event related logistics & services. We aim to provide an easy-to-use platform where users can browse and find event vendors offering best prices for their events, regardless of which part of Bangladesh they are in. Eventizer will be available on all devices, so users can plan their events anytime, anywhere."
        />
      </Head>
      <main>
        <Main />
      </main>
    </>
  );
}
