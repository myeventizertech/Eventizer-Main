import React from "react";
import Head from "next/head";
import Main from "../../../components/personal-event-product/Main";

const MakeupArtist = () => {
  return (
    <>
      <Head>
        <title>Eventizer | Makeup Artist</title>
      </Head>
      <Main service={"Makeup Artist"}/>
    </>
  );
};

export default MakeupArtist;
