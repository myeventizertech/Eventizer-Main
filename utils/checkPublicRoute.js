import { withSSRContext } from "aws-amplify";

export function checkPublicRoute(gssp) {
  return async (context) => {
    const { Auth } = withSSRContext(context);

    try {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    } catch (error) {}

    return await gssp(context);
  };
}

