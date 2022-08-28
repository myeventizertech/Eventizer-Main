import React, { useState, useEffect } from "react";
import FormData from "./FormData";
import ButtonClick from "../../reUseComponents/ButtonClick";
import ButtonLinkOrClick from "../../reUseComponents/ButtonLinkOrClick";
import { saveAs } from "file-saver";
import { Storage } from "aws-amplify";
import toast from "react-hot-toast";

const FORMAT_CURR = new Intl.NumberFormat(undefined, {
  currency: "BDT",
  style: "currency",
});
function formatCurr(num) {
  return FORMAT_CURR.format(num);
}

const StatusInfo = ({ item, currList }) => {
  const [modalViewForm, setViewForm] = useState(false);
  const [modalViewStatus, setViewStatus] = useState(false);
  const [downloadFile, setDownloadFile] = useState(null);

  let totalBudget = item?.totalBudget || 0;
  useEffect(() => {
    async function fetchme() {
      try {
        const key = await Storage.get(item?.fileLink);
        setDownloadFile(key);
      } catch (error) {}
    }
    fetchme();
  }, [item.fileLink]);
  return (
    <>
      <div>
        <h3 className="font-18 sm:font-22 color4 font-medium">
          {item.eventTitle}
        </h3>
        <p className="color1 font-14 font-normal tracking-wider">
          Submitted on {item?.eventDate}
        </p>

        <div className="mt-5 text-center">
          <h3 className="font-16 color4 font-medium">Target Budget</h3>

          <div className="h-3 w-full bg-gray-300 rounded-full my-2 relative overflow-hidden">
            <div
              style={{
                width: (totalBudget / 1000000) * 100 + "%",
              }}
              className="bgcolor1 absolute left-0 top-0 bottom-0"
            ></div>
          </div>
          <h3 className="font-16 color4 font-medium">
            {totalBudget > 1000000 ? 1000000 + "+" : formatCurr(totalBudget)}
          </h3>
        </div>
        {currList === "Replied" && (
          <>
            {item?.status === "Replied" && (
              <ButtonClick
                type="button"
                css={"bgcolor1 text-white rounded-md block mt-4"}
                width="w-full"
                text={"View Status"}
                padding="px-6 sm:px-10"
                font="font-14 sm:font-16"
                handleClick={() => setViewStatus(true)}
                shadow=""
              />
            )}
          </>
        )}

        {currList === "Pending" && (
          <ButtonClick
            type="button"
            css={"bg-[#BA4DAF] text-white rounded-md block mt-4"}
            width="w-full"
            text={"VIew Form Info"}
            padding="px-6 sm:px-10"
            font="font-14 sm:font-16"
            handleClick={() => setViewForm(true)}
            shadow=""
          />
        )}
      </div>

      {modalViewForm && (
        <div className="modal-cover">
          <div className="modal">
            <FormData formData={item} />
            <button
              onClick={() => setViewForm(false)}
              className="text-white bgcolor1 btn-hover px-4 py-1 font-20 rounded-[4px] font-light mx-auto mt-5 block mb-10 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {modalViewStatus && (
        <div className="modal-cover flex-center">
          <div className="max-w-[800px] mx-auto ">
            <div className="bg-[#24b25a] p-5 rounded">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/pinIcon.png"
                alt="thanks icon"
                className="w-24 mx-auto"
              />
              <p className="color4 font-16 sm:font-20 my-3 text-center">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                We've attached a pdf file that meets your needs. Please see the
                attachment. Thank you very much.
              </p>

              <ButtonLinkOrClick
                isLink={false}
                text="Download the Attachement"
                font="font-14 md:font-20 font-normal"
                handleBtn={() => {
                  if (downloadFile) {
                    saveAs(downloadFile, "eventizer-attachment.pdf");
                    setViewStatus(false);
                    return;
                  }
                  toast.error("something went wrong");
                }}
                radius="rounded-[1000px]"
                py="py-[10px]"
                px=" px-[30px] mdx:px-[45px]"
                otherCss="text-center font-semibold color4 block mt-5 mx-auto"
                bgcolor="bg-[#fff]"
                download={true}
              />
            </div>
          </div>
          <button
            onClick={() => setViewStatus(false)}
            className="text-white bgcolor1 btn-hover px-4 py-1 font-20 rounded-[4px] font-light absolute top-5 right-5"
          >
            close
          </button>
        </div>
      )}
    </>
  );
};

export default StatusInfo;
