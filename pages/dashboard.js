import React from "react";
import { withSSRContext } from "aws-amplify";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

export const getServerSideProps = async (context) => {
  const { Auth } = withSSRContext(context);

  try {
    const user = await Auth.currentAuthenticatedUser();

    if (user.signInUserSession.idToken) {
      return {
        redirect: {
          destination: "/dashboard/profile",
          permanent: false,
        },
      };
    }
  } catch (error) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
};

export default Dashboard;
