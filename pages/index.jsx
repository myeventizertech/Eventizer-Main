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
      </Head>
      <main>
        <Main />
      </main>
    </>
  );
}
