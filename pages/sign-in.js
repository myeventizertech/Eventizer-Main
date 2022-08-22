import React from "react";
import Main from "../components/SignInpage/Main";
import Head from "next/head";
import {checkPublicRoute} from "../utils/checkPublicRoute";

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Eventizer | Sign in</title>
      </Head>
    
        <Main />
    </>
  );
};
export const getServerSideProps = checkPublicRoute((context) => {
  return { props: {} };
});
export default SignIn;
