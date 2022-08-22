import { withSSRContext } from "aws-amplify";

export function checkProtectRoute(gssp) {
  return async (context) => {
    const { Auth } = withSSRContext(context);

    try {
      const user = await Auth.currentAuthenticatedUser();

      if (!user.signInUserSession.idToken) {
        return {
          redirect: {
            destination: "/sign-in",
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

    return await gssp(context);
  };
}
