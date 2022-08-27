import React, { useState, useEffect } from "react";
import BriefItem from "./BriefItem";
import StatusInfo from "./StatusInfo";
import Loader from "../../reUseComponents/Loader";
import * as queries from "../../../src/graphql/queries";
import { API } from "aws-amplify";

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



  
  useEffect(() => {
    setLoader(true);
    async function fetchData() {
      try {
        let filter = {
          status: {
            eq: currList,
          },
        };
        let allData = await API.graphql({
          query: queries.listPlans,
          variables: { filter: filter },
        });
        setData(allData.data.listPlans.items);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [currList]);


  useEffect(() => {
    async function fetchData() {
      try {
        let allData = await API.graphql({
          query: queries.listPlans,
        });
        corporateEvent[0].totalBrief = allData?.data?.listPlans?.items?.length;
        corporateEvent[1].totalBrief = allData?.data?.listPlans?.items?.filter(
          (item) => item.status === "Replied"
        ).length;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
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
                  ? "border-[#ded6d6]"
                  : "border-[#141414] "
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
          {data.length == 0 ? (
            <h5 className="font-26 md:font-18 font-normal color4 mt-4 text-center">
              You have no event
            </h5>
          ) : (
            <>
              <div className=" grid sm:grid-cols-2 gap-8">
                {data.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 flex-1 shadow"
                    >
                      <StatusInfo item={item} />
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
