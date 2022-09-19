import Input from "../../reUseComponents/Input";
import { Formik, Form } from "formik";
import debounce from "../../../utils/debounceSubmitHandler";
import * as yup from "yup";
import { Auth } from "aws-amplify";
import Loader from "../../reUseComponents/Loader";
import toast from "react-hot-toast";
import ShowPass from "../../reUseComponents/ShowPass";
import useShowPass from "../../../utils/useShowPass";
import ButtonClick from "../../reUseComponents/ButtonClick";
const ChangePassword = () => {
  let { isShow, handleShowClick } = useShowPass();

  return (
    <>
      <h2 className="multiStepHeader">Change Password</h2>

      <Formik
        initialValues={{
          oldPass: "",
          newPass: "",
          confirmNewPass: "",
        }}
        validationSchema={yup.object().shape({
          oldPass: yup
            .string()
            .min(8, "minimum 8 character")
            .required("Required field"),
          newPass: yup
            .string()
            .min(8, "minimum 8 character")
            .required("Required field"),
          confirmNewPass: yup
            .string()
            .required("Please confirm your password")
            .when("newPass", {
              is: (val) => (val && val.length > 0 ? true : false),
              then: yup
                .string()
                .oneOf([yup.ref("newPass")], "Password does not match"),
            }),
        })}
        validateOnBlur={true}
        onSubmit={async (values, actions) => {
          await debounce(1000);

          try {
            let user = await Auth.currentAuthenticatedUser();
            await Auth.changePassword(user, values.oldPass, values.newPass);
            toast.success("Password upadate successful");
            actions.resetForm();
          } catch (error) {
            toast.error("Old password is not valid");

            console.log(error);
          }
        }}
      >
        {(props) => (
          <Form>
            <div className="multistepeer">
              <div className=" relative">
                <Input
                  label="Old Password"
                  type={isShow ? "text" : "password"}
                  name="oldPass"
                  placeholder="⚹⚹⚹⚹⚹⚹⚹"
                  value={props.values.oldPass}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                  error={
                    props.touched.oldPass && props.errors.oldPass
                      ? props.errors.oldPass
                      : ""
                  }
                />
                {props.values.oldPass.length > 0 && (
                  <ShowPass handleShowClick={handleShowClick} isShow={isShow} />
                )}
              </div>

              <div className=" relative">
                <Input
                  label="New Password"
                  type={isShow ? "text" : "password"}
                  name="newPass"
                  placeholder="⚹⚹⚹⚹⚹⚹⚹"
                  value={props.values.newPass}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                  error={
                    props.touched.newPass && props.errors.newPass
                      ? props.errors.newPass
                      : ""
                  }
                />
                {props.values.newPass.length > 0 && (
                  <ShowPass handleShowClick={handleShowClick} isShow={isShow} />
                )}
              </div>

              <div className=" relative">
                <Input
                  label="Confirm Password"
                  type={isShow ? "text" : "password"}
                  name="confirmNewPass"
                  placeholder="⚹⚹⚹⚹⚹⚹⚹"
                  value={props.values.confirmNewPass}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                  error={
                    props.touched.confirmNewPass && props.errors.confirmNewPass
                      ? props.errors.confirmNewPass
                      : ""
                  }
                />
                {props.values.confirmNewPass.length > 0 && (
                  <ShowPass handleShowClick={handleShowClick} isShow={isShow} />
                )}
              </div>
              {props.isSubmitting ? (
                <Loader center={true} colorDefault={false} />
              ) : (
                <>
                  <ButtonClick
                    type="submit"
                    css={"bgcolor2 text-white rounded-full ml-auto block"}
                    width="null"
                    text={"Update Password"}
                    padding="px-6 sm:px-14"
                    disable={props.isSubmitting || !props.dirty}
                  />
                </>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ChangePassword;
