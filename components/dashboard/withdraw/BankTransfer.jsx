import ButtonClick from "../../reUseComponents/ButtonClick";
import Input from "../../reUseComponents/Input";
import { Formik, Form } from "formik";
import Loader from "../../reUseComponents/Loader";
import * as yup from "yup";
import * as mutations from "../../../src/graphql/mutations";
import { API } from "aws-amplify";
import toast from "react-hot-toast";

let validationSchema = yup.object({
  bankName: yup.string().required("Required field"),
  accholderName: yup.string().required("Required field"),
  bankAccNumber: yup
    .number()
    .typeError("Must be a number")
    .positive("Must be greater than zero")
    .required("Required field"),
  withdrawAmount: yup
    .number()
    .typeError("Must be a number")
    .positive("Must be greater than zero")
    .required("Required field"),
  acBranch: yup.string().required("Required field"),
});

const BankTransfer = ({ setBTisOpen ,getData}) => {
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
  let onSubmit = async (values, actions) => {
    if (+values.withdrawAmount > storage.balance.balance) {
      toast.error("You dont have this amount");
      return actions.setSubmitting(false);
    }
    try {
     
      let payData = {
        balanceAmount: values.withdrawAmount,
        bankName: values.bankName,
        bankAcNo: values.bankAccNumber,
        acHolderName: values.accholderName,
        acBranch: values.acBranch,
        type: "Bank",
        status: "Pending",
        vendorID: storage?.vendor?.id,
      };
      await API.graphql({
        query: mutations.createPaymentRequest,
        variables: { input: payData },
      });
      toast.success("Withdraw Successful");
      getData()
      setBTisOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-5 ">
      <Formik
        initialValues={{
          bankName: "",
          bankAccNumber: "",
          accholderName: "",
          withdrawAmount: "",
          acBranch: "",
        }}
        validationSchema={validationSchema}
        validateOnBlur={true}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <div className="flex justify-between gap-x-5">
              <h1 className="header mb-3">Bank Info</h1>
              <button
                onClick={() => setBTisOpen(false)}
                className="text-white border border-[#ef0d5e] color3 btn-hover px-4 py-1 font-20 rounded-[4px] font-light "
              >
                close
              </button>
            </div>

            <div className="sm:flex gap-x-5 mt-3">
              <div className="flex-1">
                <Input
                  label={"Bank Name"}
                  name="bankName"
                  placeholder="Prime Bank"
                  value={props.values.bankName}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                  error={
                    props.touched.bankName && props.errors.bankName
                      ? props.errors.bankName
                      : ""
                  }
                />
              </div>
              <div className="flex-1">
                <Input
                  label={"Bank ACC Number"}
                  name="bankAccNumber"
                  placeholder="2446587885484"
                  value={props.values.bankAccNumber}
                  handleChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={
                    props.touched.bankAccNumber && props.errors.bankAccNumber
                      ? props.errors.bankAccNumber
                      : ""
                  }
                />
              </div>
            </div>

            <div className="sm:flex gap-x-5 mt-3">
              <div className="flex-1">
                <Input
                  label={"ACC Holder Name"}
                  name="accholderName"
                  placeholder="Sadid Iqbal"
                  value={props.values.accholderName}
                  handleChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={
                    props.touched.accholderName && props.errors.accholderName
                      ? props.errors.accholderName
                      : ""
                  }
                />
              </div>
              <div className="flex-1">
                <Input
                  label={"Withdraw Amount"}
                  name="withdrawAmount"
                  placeholder="500"
                  value={props.values.withdrawAmount}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                  error={
                    props.touched.withdrawAmount && props.errors.withdrawAmount
                      ? props.errors.withdrawAmount
                      : ""
                  }
                />
              </div>
            </div>
            <Input
              label={"Branch Name"}
              name="acBranch"
              placeholder="Branch Name"
              value={props.values.acBranch}
              handleChange={props.handleChange}
              onBlur={props.handleBlur}
              error={
                props.touched.acBranch && props.errors.acBranch
                  ? props.errors.acBranch
                  : ""
              }
            />
            <>
              <ButtonClick
                type="submit"
                css={"bgcolor2 text-white rounded block ml-auto "}
                width="null"
                text={
                  props.isSubmitting ? (
                    <Loader loaderWidht="w-[27px] h-[27px]" center={true} />
                  ) : (
                    "Withdraw request"
                  )
                }
                padding="px-6 sm:px-10"
                disable={props.isSubmitting || !props.dirty}
              />
            </>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BankTransfer;
