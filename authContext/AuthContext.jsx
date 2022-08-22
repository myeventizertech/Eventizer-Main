import { createContext, useContext, useEffect, useState,useReducer } from "react";
import { Auth, Hub } from "aws-amplify";
import Reducer from "./Reducer";

import { API, Storage } from "aws-amplify";


// let check = await API?.graphql({
//   query: checkVendorGet(amplifyUser.attributes["custom:service"]),
//   variables: { id: amplifyUser.attributes?.sub },
// });

// let amplifyObj = check.data[Object.keys(check.data)[0]];
// let imageKey =
//   amplifyObj && (await Storage.get(amplifyObj?.uploadYourPhoto));

// let check = await API?.graphql({
//   query: checkUserGet(),
//   variables: { id: amplifyUser.attributes?.sub },
// });
// let amplifyObj = check.data[Object.keys(check.data)[0]];

// profileImage
// isverifyVendorConfirmed

const INITIAL_STATE = {
  AmpUserInfo: JSON.parse(typeof window !== 'undefined' && (localStorage.getItem("AmpUserInfo")) || null),
};

const UserContext = createContext({});
export default function AuthContext({ children }) {
  const [verifyUser, setVeifyUser] = useState({});
  const [authLoader, setAuthLoader] = useState(false);
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  let [imageUpdate, setImageUpdate] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    setAuthLoader(true);
    Hub.listen("auth", () => {
      checkUser();
    });
  }, []);


  useEffect(() => {
    localStorage.setItem("AmpUserInfo", JSON.stringify(state.AmpUserInfo));
  }, [state.AmpUserInfo]);




  async function checkUser() {
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();

      let CogObj = {
        isverified: amplifyUser?.signInUserSession.idToken,
        isUser_vendorAttr: amplifyUser,
      };

      if (amplifyUser.attributes["custom:userOrvendor"] === "vendor") {
        CogObj.isUser_vendor = amplifyUser?.attributes["custom:userOrvendor"];
        CogObj.userTitle = `${amplifyUser?.attributes["custom:firstName"]} ${amplifyUser?.attributes["custom:lastName"]}`;
      } else if (amplifyUser.attributes["custom:userOrvendor"] === "user") {
        CogObj.isUser_vendor = amplifyUser?.attributes?.given_name
          ? "user"
          : amplifyUser?.attributes["custom:userOrvendor"];
        CogObj.userTitle = amplifyUser?.attributes?.given_name
          ? amplifyUser?.attributes.given_name
          : `${amplifyUser?.attributes["custom:firstName"]} ${amplifyUser?.attributes["custom:lastName"]}`;
      } else {
        CogObj = {};
      }

      setVeifyUser(CogObj);

      setAuthLoader(false);
    } catch (error) {
      console.error(error);
      setAuthLoader(false);
      setVeifyUser({});
    }
  
  }
  useEffect(() => {
    async function checkImageUpdate() {
      let key = await Storage.get(state?.AmpUserInfo?.profilePicture);
      const test =await fetch(key)
      if(test.ok){

        setImageUpdate(key)
      }else{
        setImageUpdate(null)
      }

;
    }
    checkImageUpdate();
  }, [state?.AmpUserInfo]);
  return (
    <UserContext.Provider
      value={{
        verifyUser,
        setAuthLoader,
        authLoader,
        setVeifyUser,
        isVendorDetailConfrimed: state?.AmpUserInfo?.vendor?.isConfirmed,
        profileImage: imageUpdate || "",
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserOrVendor = () => useContext(UserContext);
