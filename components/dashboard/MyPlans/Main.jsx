import React, { useState, useEffect } from "react";
import BriefItem from "./BriefItem";
import StatusInfo from "./StatusInfo";
import Loader from "../../reUseComponents/Loader";
import * as queries from "../../../src/graphql/queries";
import { API } from "aws-amplify";
import { useUserOrVendor } from "../../../authContext/AuthContext";

let corporateEvent = [
  {
    id: 1,
    totalBrief: "...",
    title: "Total Brief Submitted",
    status: "Pending",
  },
  { id: 2, totalBrief: "...", title: "Total Brief Replied", status: "Replied" },
];

const Main = () => {
  const [currList, setCurrList] = useState(corporateEvent[0].status);
  const [loader, setLoader] = useState(false);
  let hadleCurrList = (id) => setCurrList(id);
  let [data, setData] = useState([]);
  const { verifyUser } = useUserOrVendor();
  let { attributes } = verifyUser?.isUser_vendorAttr || {};
  useEffect(() => {
    setLoader(true);
    async function fetchData() {
      try {
        let allData = await API.graphql({
          query: queries.getUser,
          // authMode: "API_KEY",
          variables: {
            id: attributes?.sub,
          },
        });
        corporateEvent[0].totalBrief =
          allData?.data?.getUser?.Plan?.items?.length;
        corporateEvent[1].totalBrief =
          allData?.data?.getUser?.Plan?.items?.filter(
            (item) => item.status === "Replied"
          ).length;
        setData(allData?.data?.getUser?.Plan?.items);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [attributes?.sub]);

  return (
    <>
      <div className="flex gap-5 sm:gap-10 flex-wrap">
        {corporateEvent.map((item, i) => {
          return (
            <div
              role="button"
              className={`bg-white rounded-xl p-4 flex-1 shadow cursor-pointer border btn-hover min-w-[8rem]
              ${
                item.status !== currList
                  ? "border-[#a5a2a2]"
                  : "border-[#ef0d5e] "
              }`}
              key={i}
              onClick={() => hadleCurrList(item.status)}
            >
              <BriefItem item={item} />
            </div>
          );
        })}
      </div>
      <h3 className="font-22 md:font-26 font-normal color4 mt-8 mb-4">
        List Of Events{" "}
      </h3>
      {loader ? (
        <Loader center={true} colorDefault={false} />
      ) : (
        <>
          {data.filter((item) => {
            if (currList == "Replied") {
              return item.status === currList;
            } else {
              return item;
            }
          }).length == 0 ? (
            <h5 className="font-26 md:font-18 font-normal color4 mt-4 text-center">
              {currList == "Replied"
                ? "You have no replied event"
                : "You have no event"}
            </h5>
          ) : (
            <>
              <div className=" grid sm:grid-cols-2 gap-8">
                {data
                  .filter((item) => {
                    if (currList == "Replied") {
                      return item.status === currList;
                    } else {
                      return item;
                    }
                  })
                  .map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="bg-white rounded-xl p-4 flex-1 shadow"
                      >
                        <StatusInfo item={item} currList={currList} />
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Main;
