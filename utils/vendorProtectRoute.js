import { withSSRContext } from "aws-amplify";

export function vendorProtectRoute(gssp) {
  return async (context) => {
    const { Auth } = withSSRContext(context);

    try {
      const user = await Auth.currentAuthenticatedUser();

      if (user.attributes["custom:userOrvendor"] !== "vendor") {
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
