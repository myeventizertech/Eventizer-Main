import React from "react";
import Main from "../components/userRegisterPage/Main";
import Head from "next/head";
import { checkPublicRoute } from "../utils/checkPublicRoute";
const UserRegister = () => {
  return (
    <>
      <Head>
        <title>Eventizer | User registration</title>
      </Head>
      <Main />
    </>
  );
};
export const getServerSideProps = checkPublicRoute((context) => {
  return { props: {} };
});
export default UserRegister;
